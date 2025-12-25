import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  useUpdateProfileMutation,
  useUserInfoQuery,
} from "@/redux/features/User/user.api";
import { Edit3, Mail, Save, User } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EditProfile from "./EditProfile";
import z from "zod";
import type { updateProfileSchema } from "./updateProfileSchema";
import { toast } from "sonner";

const MyProfile = () => {
  const { data, isLoading } = useUserInfoQuery(undefined);
  const [updateProfile] = useUpdateProfileMutation();
  console.log(data?.data);

  const [editProfile, setEditProfile] = useState(false);

  // const handleEditProfile = (x: boolean) => {
  //   setEditProfile(x);

  // };

  const onSubmit = async (data: z.infer<typeof updateProfileSchema>) => {
    const updatedUserInfo = {
      name: data.name,
      phoneNumber: data.phoneNumber,
      password: data.password,
    };
    // updateProfile(data);
    // const toastId = toast.loading("User Profile Updating...");
    try {
      const result = await updateProfile(updatedUserInfo).unwrap();
      console.log(result);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
      console.error("Failed to update profile:", error);
    }
    console.log(updatedUserInfo);
  };

  return (
    <div className="flex flex-col items-center min-h-screen md:p-8 bg-gradient-to-br from-background to-muted/20 text-foreground transition-all duration-300">
      <Card className="w-full max-w-4xl bg-card/90 backdrop-blur-sm shadow-2xl border border-border/40 rounded-3xl overflow-hidden">
        <CardHeader className="bg-sky-200/30 p-8">
          <div className="text-center text-7xl px-8 pb-5 bg-sky-500 border border-sky-900 rounded-full w-32 h-32 flex items-center justify-center mx-auto   text-white font-semibold ">
            {data?.data?.name[0]}
          </div>
          <CardTitle className="text-center mt-5 text-3xl font-bold">
            {data?.data?.name}
          </CardTitle>

          <div className="flex items-center gap-2 text-muted-foreground text-lg justify-center ">
            <Mail className="h-5 w-5" />
            {data?.data?.email}
          </div>
          <CardDescription className="text-background text-center mt-2 bg-sky-500  px-4 py-1 rounded-full text-sm font-medium w-24 flex items-center justify-center mx-auto">
            <User className="h-4 w-4 mr-1" />
            {data?.data?.role}
          </CardDescription>
        </CardHeader>
        {editProfile ? (
          <div>
            <EditProfile onSubmit={onSubmit} />
            <CardFooter className="flex justify-end w-11/12 mt-16">
              <Button
                className=" mb-6 bg-transparent  hover:bg-gray-100/10 text-white   border mr-2 py-5"
                onClick={() => setEditProfile(!editProfile)}
              >
                <span className="font-light text-2xl mb-1">x</span>
                <span className="hover:underline text-lg">Cancel</span>
              </Button>
              <Button
                type="submit"
                form="edit-profile-form"
                className=" mb-6 bg-sky-500 hover:bg-sky-600 text-white text-lg  border-0"
              >
                <Save className="mr-2 h-4 w-4" />
                Save Profile
              </Button>
            </CardFooter>
          </div>
        ) : (
          <div>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 w-10/12 mx-auto">
              <div className="">
                <h3 className="font-semibold text-lg mb-2">Account Status</h3>
                {data?.data?.current_status === "UNBLOCKED" ||
                data?.data?.current_status === "APPROVE" ? (
                  <p className="w-1/2 italic first-letter:uppercase lowercase text-green-500">
                    {data?.data?.current_status}
                  </p>
                ) : (
                  <p className="w-1/2 italic first-letter:uppercase lowercase text-red-500">
                    {data?.data?.current_status}
                  </p>
                )}
              </div>
              <div className="">
                <h3 className="font-semibold text-lg mb-2">Joined Date</h3>
                <p className="w-1/2 italic">
                  {data?.data?.createdAt
                    ? format(new Date(data?.data?.createdAt), "PPP")
                    : "N/A"}
                </p>
              </div>
              <div className="">
                <h3 className="font-semibold text-lg mb-2">Role</h3>
                <p className="w-1/2 italic">{data?.data?.role}</p>
              </div>
              <div className="">
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="w-1/2 italic">{data?.data?.role}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end w-11/12 mt-16">
              <Button
                className=" mb-6 bg-sky-500 hover:bg-sky-600 text-white text-lg  border-0"
                onClick={() => setEditProfile(!editProfile)}
              >
                <Edit3 className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </CardFooter>
          </div>
        )}
      </Card>
    </div>
  );
};

export default MyProfile;

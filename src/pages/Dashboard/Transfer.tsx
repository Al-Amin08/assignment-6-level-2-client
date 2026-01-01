import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAllUserQuery } from "@/redux/features/User/user.api";

import { useTransferMutation } from "@/redux/features/wallet/wallet.api";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type User = {
  _id: string;
  name: string;
  email: string;
  role: "ADMIN" | "USER" | "AGENT" | "SUPER_ADMIN"; // extend with other roles if needed
  current_status: "BLOCKED" | "UNBLOCKED"; // enum-like union
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
};

const Transfer = () => {
  const form = useForm({
    defaultValues: {
      receiver_Email: "",
      amount: 10,
    },
  });
  const [transfer, { isLoading }] = useTransferMutation();

  const { data: allUser, isLoading: searchLoading } =
    useAllUserQuery(undefined);

  const [receiverEmail, setReceiveEmail] = useState<User | undefined>();
  // console.log(receiverEmail);

  // console.log(data?.data, "transfer");

  const handleSearch: SubmitHandler<FieldValues> = (data) => {
    setReceiveEmail(
      allUser?.data.find((item) => item.email === data.receiver_Email)
    );
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(allUser);
    console.log(allUser?.data);

    console.log(receiverEmail?.name);
    const amount = Number(data.amount);
    console.log({ ...data, amount });

    try {
      await transfer({ ...data, amount }).unwrap();
      toast.success("Transfer successful");
    } catch (error) {
      toast.error("Transfer failed");
      console.error("Transfer:", error);
    }
  };
  return (
    <div>
      {receiverEmail ? (
        <div className="max-w-md mx-auto mt-10 border-2 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Send Money</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="receiver_Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name: {receiverEmail?.name}</FormLabel>
                    <FormLabel>Receiver Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Receiver Email"
                        {...field}
                        value={field.value || receiverEmail.email}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter amount" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full"
              >
                {isLoading ? "Processing..." : "Transfer"}
              </Button>
            </form>
          </Form>
        </div>
      ) : (
        <div className="max-w-md mx-auto mt-10 border-2 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Send Money</h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSearch)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="receiver_Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Receiver Email</FormLabel>

                    <FormControl>
                      <Input placeholder="Enter the email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter amount" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              /> */}

              <Button
                type="submit"
                disabled={searchLoading}
                className="btn btn-primary w-full"
              >
                {searchLoading ? "Searching..." : "Search"}
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Transfer;

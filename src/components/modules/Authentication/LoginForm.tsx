/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";

import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import { useLoginMutation } from "@/redux/features/auth/auth.api";

// const registerSchema = z.object({
//   name: z.string().min(2).max(50),
//   email: z.email(),
//   password: z.string().min(6),
//   confirmPassword: z.string().min(6),
// });

const LoginForm = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const form = useForm({
    defaultValues: {
      email: "mahinkhanmahinkhan@gmail.com",
      password: "123456",
    },
  });
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await login(data).unwrap();
      if (res.success) {
        toast.success("Logged in successfully");
        navigate("/");
      }
      //   console.log(res);
    } catch (error: any) {
      if (error.data.message === "Password doesn't match") {
        toast.error("Invalid credentials");
      }
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email and password below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@company.com" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="******" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
        >
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserInfoQuery } from "@/redux/features/User/user.api";

import {
  useCashOutMutation,
  useWithdrawMoneyMutation,
} from "@/redux/features/wallet/wallet.api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Withdraw = () => {
  const form = useForm({
    defaultValues: {
      id: "6900d0656644607479e15632",
      amount: 1,
    },
  });
  const [withdraw, { isLoading }] = useCashOutMutation();
  const { data: user } = useUserInfoQuery(undefined);
  const onSubmit = async (data) => {
    const amount = Number(data.amount);
    console.log({ ...data, amount, userEmail: user?.data?.email });
    try {
      await withdraw({
        ...data,
        amount,
        userEmail: user?.data?.email,
      }).unwrap();

      toast.success("Withdraw successful");
    } catch (error) {
      toast.error("Withdraw failed");
      console.error("Withdraw:", error);
    }
    console.log(data);
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 border-2 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Withdraw Money</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agent ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter agent ID" {...field} />
                  </FormControl>

                  <FormMessage />
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

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full"
            >
              {isLoading ? "Processing..." : "Cash In"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Withdraw;

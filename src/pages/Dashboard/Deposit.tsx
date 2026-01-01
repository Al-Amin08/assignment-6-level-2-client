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
import { useCashInMutation } from "@/redux/features/wallet/wallet.api";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Deposit = () => {
  const form = useForm({
    defaultValues: {
      id: "6900d0656644607479e15632",
      amount: 1,
    },
  });
  // const [userId, setUserId] = useState("");
  // const [amountMoney, setAmountMoney] = useState<number>(0);
  const [cashIn, { isLoading }] = useCashInMutation();
  const { data: user } = useUserInfoQuery(undefined);
  console.log(user?.data);
  const onSubmit = async (data) => {
    const amount = Number(data.amount);

    console.log({ ...data, amount, userEmail: user?.data?.email });

    try {
      await cashIn({ ...data, amount, userEmail: user?.data?.email }).unwrap();
      toast.success("Deposit successful");
    } catch (error) {
      toast.error("Deposit failed");
      console.error("Deposit:", error);
    }
  };
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 border-2 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Agent Cash-In</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* <div>
              <label className="block text-sm font-medium">User ID</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter user ID"
                required
              />
            </div> */}
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter User ID" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <div>
              <label className="block text-sm font-medium">Amount</label>
              <input
                type="number"
                min={1}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="input input-bordered w-full"
                placeholder="Enter amount"
                required
              />
            </div> */}
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

export default Deposit;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Wallet, Copy, Check, Calendar, Clock } from "lucide-react";
import { useState } from "react";
// import { formatDate, formatTime } from "@/utils/dataTime";
import { useMyWalletQuery } from "@/redux/features/wallet/wallet.api";
import { format } from "date-fns";
import { toast } from "sonner";

interface WalletData {
  _id: string;
  balance: number;
  user: string;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
}

const MyWallet = () => {
  const { data: wallet } = useMyWalletQuery(undefined);
  console.log(wallet?.data);

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string) => {
    await navigator.clipboard.writeText(id);
    setCopiedId(id);
    toast.success("User ID copied to clipboard");
    // toast({
    //   title: "Copied!",
    //   description: "User ID copied to clipboard",
    // });

    setTimeout(() => setCopiedId(null), 2000);
  };
  console.log(copiedId);

  // if (!data?.length) {
  //   return (
  //     <div className="flex justify-center items-center py-20 text-muted-foreground">
  //       No wallet data available
  //     </div>
  //   );
  // }

  return (
    <div className=" flex items-center justify-center h-full w-full ">
      <div className=" bg-sky-400 w-6/12">
        <Card
          key={wallet?.data?._id}
          className="shadow-sm hover:shadow-md transition "
        >
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              Wallet
            </CardTitle>

            {/* <Badge
              variant={
                wallet?.data?.status === "ACTIVE" ? "default" : "destructive"
              }
            >
              {wallet.status}
            </Badge> */}
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Balance */}
            <div
              className="bg-gradient-to-r from-sky-50 to-sky-100 dark:from-sky-900/50 dark:to-sky-900 
  text-sky-700 dark:text-sky-200
  rounded-md p-4 
  flex justify-between items-center
"
            >
              <span className="text-sm text-muted-foreground font-medium">
                Balance
              </span>
              <span className="text-xl font-semibold">
                {wallet?.data?.balance.toFixed(2)}
              </span>
            </div>

            {/* User ID */}
            <div className="bg-muted rounded-md p-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground font-medium">User ID</span>
              <button
                type="button"
                onClick={() => handleCopy(wallet?.data?.owner)}
                className="flex items-center gap-1 text-primary hover:underline"
              >
                {wallet?.data?.owner?.slice(-6)}
                {copiedId === wallet?.data?.owner ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-8 text-sm pt-3">
              <div className="bg-muted p-4 rounded-md">
                <p className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="w-4 h-4" /> Created
                </p>
                <p className="font-medium">
                  {wallet?.data?.createdAt
                    ? format(new Date(wallet?.data?.createdAt), "PPP")
                    : "N/A"}
                </p>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <p className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" /> Updated
                </p>
                <p className="font-medium">
                  {wallet?.data?.updatedAt
                    ? format(new Date(wallet?.data?.updatedAt), "PPP")
                    : "N/A"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MyWallet;

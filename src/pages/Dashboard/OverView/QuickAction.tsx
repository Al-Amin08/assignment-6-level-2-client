import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router";
// import { getIcon } from "@/utils/getIcon";
import { FiList } from "react-icons/fi";
// import type { QuickActionUiProps } from "@/types/overview.type";

import * as Icons from "react-icons/fi";
import type { IconType } from "react-icons";
import { getSideBarItems } from "@/utils/getSideBarItems";
import type { TRole } from "@/Types";
import { useUserInfoQuery } from "@/redux/features/User/user.api";
import { useMyWalletQuery } from "@/redux/features/wallet/wallet.api";

const getIcon = (iconName?: string): IconType | null => {
  if (!iconName) return null;
  return (Icons as Record<string, IconType>)[iconName] || null;
};

const QuickActionUi = () => {
  const { data: userData } = useUserInfoQuery(undefined);
  const { data: myWallet } = useMyWalletQuery(undefined);
  const role = userData?.data?.role;

  const sidebarItems = getSideBarItems(role as TRole);
  console.log(sidebarItems, "sidebarItems");

  const quickActions = sidebarItems.flatMap((group) => group.items);
  console.log(quickActions);

  // .filter((item) => item.title !== "Dashboard");
  // console.log(quickActions);
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="">
        <Card>
          <CardContent className="flex  p-4 bg-blue-500 text-white">
            <div className="text-4xl mb-2">
              <h1>Your Wallet Balance is 50</h1>
              {/* {myWallet?.data?.balance} */}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {quickActions?.slice(1).map((action: any, idx) => (
          // console.log(action)
          <Card
            key={idx}
            className="cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate(action.url)}
          >
            <CardContent className="flex flex-col items-center justify-center p-4">
              {action.icon && (
                <div className="text-3xl mb-2">
                  {" "}
                  {(() => {
                    const IconComponent = getIcon(action.icon);
                    return IconComponent ? <IconComponent /> : <FiList />;
                  })()}
                </div> // use real icon component if you have
              )}
              <CardTitle className="text-center text-sm">
                {action.title}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickActionUi;

import Deposit from "@/pages/Dashboard/Deposit";
import transfer from "@/pages/Dashboard/Transfer";
import Withdraw from "@/pages/Dashboard/Withdraw";
import MyTransaction from "@/pages/Dashboard/MyTransaction";
import MyProfile from "@/pages/Dashboard/MyProfile";

import QuickActionUi from "@/pages/Dashboard/OverView/QuickAction";
import MyWallet from "@/pages/Dashboard/MyWallet";

export const userSidebarItems = [
  {
    title: "User Dashboard",
    items: [
      {
        title: "Quick Actions",
        url: "/user/dashboard/quick-actions",
        component: QuickActionUi,
        icon: "FiZap",
      },
      {
        title: "My Profile",
        url: "/user/dashboard/my-profile",
        component: MyProfile,
        icon: "FiUser",
      },
    ],
  },

  // {
  //   title: "Commission Management",
  //   items: [
  //     {
  //       title: "Commission History",
  //       url: "/user/dashboard/commission-history",
  //       component: CommissionHistory,
  //     },
  //   ],
  // },

  {
    title: "Transaction Management",
    items: [
      {
        title: "Transaction History",
        url: "/user/dashboard/my-transaction-history",
        component: MyTransaction,
        icon: "FiCreditCard",
      },
    ],
  },
  {
    title: "Wallet Management",
    items: [
      {
        title: "Your Wallet",
        url: "/user/dashboard/my-wallet",
        component: MyWallet,
        icon: "FiDollarSign",
      },
      {
        title: "Deposit Money",
        url: "/user/dashboard/deposit-money",
        component: Deposit,
        icon: "FiDollarSign",
      },
      {
        title: "Transfer Money",
        url: "/user/dashboard/transfer-money",
        component: transfer,
        icon: "FiSend",
      },
      {
        title: "Withdraw Money",
        url: "/user/dashboard/withdraw-money",
        component: Withdraw,
        icon: "FiArrowDownCircle",
      },
    ],
  },
];

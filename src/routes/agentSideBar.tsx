import MyTransaction from "@/pages/Dashboard/MyTransaction";
import CashIn from "@/pages/Dashboard/Agent_DashBoard/CashIn";
import CashOut from "@/pages/Dashboard/Agent_DashBoard/CashOut";
import MyProfile from "@/pages/Dashboard/MyProfile";

export const agentSidebarItems = [
  {
    title: "Agent Dashboard",
    items: [
      {
        title: "My Profile",
        url: "/agent/dashboard/my-profile",
        component: MyProfile,
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
        url: "/agent/dashboard/my-transaction-history",
        component: MyTransaction,
      },
    ],
  },
  {
    title: "Wallet Management",
    items: [
      {
        title: "My Wallet",
        url: "/agent/dashboard/my-wallet",
        component: CashIn,
      },
      {
        title: "Cash In",
        url: "/agent/dashboard/cash-in",
        component: CashIn,
      },
      {
        title: "Cash Out",
        url: "/agent/dashboard/cash-out",
        component: CashOut,
      },
    ],
  },
];

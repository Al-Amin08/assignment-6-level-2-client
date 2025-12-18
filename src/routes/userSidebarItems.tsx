import CommissionHistory from "@/pages/admin_DashBoard/Commission/CommissionHistory";
import ListOfAllUser from "@/pages/admin_DashBoard/ListOfAllUser";
import MyProfile from "@/pages/admin_DashBoard/MyProfile";
import AllTransactionHistory from "@/pages/admin_DashBoard/Transaction/AllTransactionHistory";
import ApproveAgent from "@/pages/admin_DashBoard/Wallet/ApproveAgent";
import GetAllWallet from "@/pages/admin_DashBoard/Wallet/GetAllWallet";
import UnblockUser from "@/pages/admin_DashBoard/Wallet/UnblockUser";

export const userSidebarItems = [
  {
    title: "User Dashboard",
    items: [
      {
        title: "List of All Users",
        url: "/user/dashboard/list-of-users",
        component: ListOfAllUser,
      },

      {
        title: "My Profile",
        url: "/user/dashboard/my-profile",
        component: MyProfile,
      },
    ],
  },

  {
    title: "Commission Management",
    items: [
      {
        title: "Commission History",
        url: "/user/dashboard/commission-history",
        component: CommissionHistory,
      },
    ],
  },

  {
    title: "Transaction Management",
    items: [
      {
        title: "All Transaction History",
        url: "/user/dashboard/all-transaction-history",
        component: AllTransactionHistory,
      },
    ],
  },
  {
    title: "Wallet Management",
    items: [
      {
        title: "All Wallets Info",
        url: "/user/dashboard/get-all-wallet",
        component: GetAllWallet,
      },
      {
        title: "Unblock User",
        url: "/user/dashboard/",
        component: UnblockUser,
      },
      //   {
      //     title: "Block User",
      //     url: "#",
      //   },
      {
        title: "Approve Agent",
        url: "/user/dashboard/approve-agent",
        component: ApproveAgent,
      },
      //   {
      //     title: "Suspend Agent",
      //     url: "#",
      //   },
    ],
  },
];

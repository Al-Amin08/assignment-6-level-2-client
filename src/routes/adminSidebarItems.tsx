import CommissionHistory from "@/pages/Dashboard/admin_DashBoard/Commission/CommissionHistory";
import ListOfAllUser from "@/pages/Dashboard/admin_DashBoard/ListOfAllUser";
import MyProfile from "@/pages/Dashboard/MyProfile";
import AllTransactionHistory from "@/pages/Dashboard/admin_DashBoard/Transaction/AllTransactionHistory";
import ApproveAgent from "@/pages/Dashboard/admin_DashBoard/Wallet/ApproveAgent";
import GetAllWallet from "@/pages/Dashboard/admin_DashBoard/Wallet/GetAllWallet";
import UnblockUser from "@/pages/Dashboard/admin_DashBoard/Wallet/UnblockUser";
import type { ISidebarItem } from "@/Types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "List of All Users",
        url: "/admin/dashboard/list-of-users",
        component: ListOfAllUser,
      },

      {
        title: "My Profile",
        url: "/admin/dashboard/my-profile",
        component: MyProfile,
      },
    ],
  },

  {
    title: "Commission Management",
    items: [
      {
        title: "Commission History",
        url: "/admin/dashboard/commission-history",
        component: CommissionHistory,
      },
    ],
  },

  {
    title: "Transaction Management",
    items: [
      {
        title: "All Transaction History",
        url: "/admin/dashboard/all-transaction-history",
        component: AllTransactionHistory,
      },
    ],
  },
  {
    title: "Wallet Management",
    items: [
      {
        title: "All Wallets Info",
        url: "/admin/dashboard/get-all-wallet",
        component: GetAllWallet,
      },
      {
        title: "Unblock User",
        url: "/admin/dashboard/",
        component: UnblockUser,
      },
      //   {
      //     title: "Block User",
      //     url: "#",
      //   },
      {
        title: "Approve Agent",
        url: "/admin/dashboard/approve-agent",
        component: ApproveAgent,
      },
      //   {
      //     title: "Suspend Agent",
      //     url: "#",
      //   },
    ],
  },
];

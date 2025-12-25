import App from "@/App";
import DashBoardLayout from "@/components/layout/DashBoardLayout";
import About from "@/pages/About/About";

import Login from "@/pages/Authentication/Login";
import Register from "@/pages/Authentication/Register";
import Contact from "@/pages/Contact/Contact";
import Faq from "@/pages/FAQ/Faq";
import Features from "@/pages/Features/Features";

import Home from "@/pages/Home/Home";
import { generateRoutes } from "@/utils/generateRoutes";

import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import Unauthorized from "@/pages/Unauthrization";
import withAuth from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/Types";
import { agentSidebarItems } from "./agentSideBar";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        Component: About,
        path: "/about",
      },
      {
        Component: Features,
        path: "/features",
      },
      {
        Component: Contact,
        path: "/contact",
      },
      {
        Component: Faq,
        path: "/faq",
      },
    ],
  },
  {
    Component: withAuth(DashBoardLayout, role.admin as TRole),
    path: "/admin",
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard/my-profile" />,
      },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashBoardLayout, role.user as TRole),
    path: "/user",
    children: [
      {
        index: true,
        element: <Navigate to="/user/dashboard/my-profile" />,
      },
      ...generateRoutes(userSidebarItems),
    ],
  },
  {
    Component: withAuth(DashBoardLayout, role.agent as TRole),
    path: "/agent",
    children: [
      {
        index: true,
        element: <Navigate to="/agent/dashboard/my-profile" />,
      },
      ...generateRoutes(agentSidebarItems),
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);

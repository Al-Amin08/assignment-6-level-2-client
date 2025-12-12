import App from "@/App";
import About from "@/pages/About/About";
import Login from "@/pages/Authentication/Login";
import Register from "@/pages/Authentication/Register";
import Contact from "@/pages/Contact/Contact";
import Faq from "@/pages/FAQ/Faq";
import Features from "@/pages/Features/Features";

import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";

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
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
]);

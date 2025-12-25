import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { agentSidebarItems } from "@/routes/agentSideBar";
import { userSidebarItems } from "@/routes/userSidebarItems";

import type { TRole } from "@/Types";

export const getSideBarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return [...adminSidebarItems];
    case role.user:
      return [...userSidebarItems];
    case role.agent:
      return [...agentSidebarItems];

    default:
      return [];
  }
};

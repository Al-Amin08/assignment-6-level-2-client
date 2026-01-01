import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/assets/icons/Logo";
import { NavLink, useLocation } from "react-router";
import { getSideBarItems } from "@/utils/getSideBarItems";
import { useUserInfoQuery } from "@/redux/features/User/user.api";
import { ModeToggle } from "./layout/ModeToggler";

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { data: userdata } = useUserInfoQuery(undefined);
  const location = useLocation();

  const navMain = getSideBarItems(userdata?.data?.role);

  return (
    <Sidebar {...props}>
      {/* ---------- Header ---------- */}
      <SidebarHeader>
        <NavLink to="/" className="flex items-center gap-2 px-2">
          <Logo />
          <h3 className="text-2xl font-semibold">
            Digital <span className="text-sky-600 font-bold">Wallet</span>
          </h3>
        </NavLink>
      </SidebarHeader>

      {/* ---------- Content ---------- */}
      <SidebarContent>
        {navMain.map((group) => {
          // ✅ AUTO-EXPAND GROUP IF ANY CHILD IS ACTIVE
          const isGroupActive = group.items.some((item) =>
            location.pathname.startsWith(item.url)
          );

          return (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className="
                          relative transition-all
                          data-[active=true]:bg-sky-50
                          data-[active=true]:text-sky-700
                        "
                      >
                        <NavLink
                          to={item.url}
                          end
                          className={({ isActive }) =>
                            `
                            flex items-center gap-2 px-3 py-2 rounded-md
                            transition-all duration-200
                            ${
                              isActive
                                ? "font-semibold"
                                : "text-gray-700 hover:bg-gray-100"
                            }
                          `
                          }
                        >
                          {({ isActive }) => (
                            <>
                              {/* ✅ LEFT ACTIVE INDICATOR */}
                              {isActive && (
                                <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r bg-sky-600" />
                              )}

                              <span className="pl-2">{item.title}</span>
                            </>
                          )}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
      <div className="ml-50 mb-4">
        <ModeToggle />
      </div>
      <SidebarRail />
    </Sidebar>
  );
}

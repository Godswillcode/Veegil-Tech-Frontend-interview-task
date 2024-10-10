import { appRoute } from "src/config/routeMgt/routePaths";
import { SidebarLink } from "src/types";

export const sidebarLinks: SidebarLink[] = [
  {
    to: appRoute.home,
    title: "Dashboard",
    icon: "carbon:home",
  },
  {
    to: appRoute.customers,
    title: "Transaction history",
    icon: "iconamoon:history-light",
  },
  {
    to: appRoute.customers,
    title: "Account",
    icon: "uil:user",
  },
];

  

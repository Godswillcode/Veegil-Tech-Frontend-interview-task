import { appRoute } from "src/config/routeMgt/routePaths";
import { SidebarLink } from "src/types";

export const sidebarLinks: SidebarLink[] = [
  {
    to: appRoute.home,
    title: "Dashboard",
    icon: "carbon:home",
  },
  {
    to: appRoute.transactionHistory,
    title: "Transaction history",
    icon: "iconamoon:history-light",
  },
  {
    to: appRoute.account,
    title: "Account",
    icon: "uil:user",
  },
];

  

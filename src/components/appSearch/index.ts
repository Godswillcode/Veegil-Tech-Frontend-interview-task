import { appRoute } from "src/config/routeMgt/routePaths";

export interface searchObjectItem {
  name: string;
  link: string;
}
export const searchData: searchObjectItem[] = [
  {
    name: "Dashboard",
    link: appRoute.home,
  },
  {
    name: "Account",
    link: appRoute.account,
  },
  {
    name: "Profile",
    link: appRoute.profile,
  },
  {
    name: "Transaction history",
    link: appRoute.transactionHistory,
  },
];

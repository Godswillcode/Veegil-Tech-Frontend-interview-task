import { Tooltip } from "antd";
import { Icon } from "@iconify/react";
import "./style.css";
import { sidebarLinks } from ".";
import { SidebarProps } from "src/types";
import { Link, NavLink, useLocation } from "react-router-dom";
import { appRoute } from "src/config/routeMgt/routePaths";

export const SideBar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const toggle = () => setIsOpen(!isOpen);
  const { pathname } = useLocation();
  return (
    <div
      className={`h-screen px-3 pb-5 pt-1 bg-[#F5F5F5] sidebar ${
        isOpen ? "w-[227px]" : "w-[65px]"
      }`}
    >
      <Link
        to={appRoute.home}
        className={` ${
          isOpen ? "h-24" : "h-12"
        } flex justify-center items-center mt-2 border p-2 shadow-sm w-full`}
      >
        {!isOpen ? (
          <span className="font-bold text-xl text-primary">EF</span>
        ) : (
          <span className="font-extrabold text-xl text-primary">ECO FINANCE</span>
        )}
      </Link>

      <div className={"mt-[52px]"}>
        {sidebarLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={`sidebar_link ${pathname === link.to && "active"}`}
          >
            <Tooltip title={isOpen ? "" : link.title} placement="right">
              <Icon icon={link.icon} className="nav_icon" />
            </Tooltip>
            <span className={isOpen ? "" : "hidden"}>{link.title}</span>
          </NavLink>
        ))}
      </div>

      <div className="flex justify-end">
        {/* <Tooltip
          title={`${isOpen ? "Close" : "Open"} Sidebar`}
          placement="right"
        > */}
        <div
          onClick={toggle}
          className="bg-primary mt-10 cursor-pointer hover-bg-secondary flex items-center rounded-full justify-center h-7 w-7"
        >
          <Icon
            icon={`ep:arrow-${isOpen ? "left" : "right"}-bold`}
            className="text-white"
          />
        </div>
        {/* </Tooltip> */}
      </div>
    </div>
  );
};

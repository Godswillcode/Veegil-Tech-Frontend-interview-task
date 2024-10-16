import { SearchOutlined } from "@ant-design/icons";
import { Drawer, Input } from "antd";
import { Icon } from "@iconify/react";
import { Dropdown } from "antd";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { SignOut } from "./SignOut";
import { Link } from "react-router-dom";
import { appRoute } from "src/config/routeMgt/routePaths";
import { ChangePassword } from "src/ExtraSettings/components/ChangePassword";
import { SearchModal } from "../appSearch/SearchModal";
import realImage from "src/assets/images/UserImage.png";
import { INavBarActions } from "src/types";
import { useGetUserInfo } from "src/hooks/useGetUserInfo";

export const Navbar = () => {
  const {userInfo} = useGetUserInfo()
  const [actions, setActions] = useState<INavBarActions>()

  const onCancel = () => {
    setActions(undefined)
  }

    
  return (
    <>
      <ChangePassword
        open={actions === "passwordChange"}
        handleClose={() => onCancel()}
      />
      <SearchModal
        open={actions === "searchModal"}
        handleClose={() => onCancel()}
      />

      <div className="w-full bg-white sticky top-0 z-50 shadow-sm border-b py-3 Container flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <Icon
            icon="lucide:menu"
            className="text-xl lg:hidden flex"
            onClick={() => setActions("sideBar")}
          />

          <Input
            onClick={() => setActions("searchModal")}
            placeholder="Search here..."
            suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
            className="md:w-80 lg:flex hidden"
          />
        </div>
        <div className="flex items-center gap-x-5 text-gray-600">
          <Icon
            onClick={() => setActions("searchModal")}
            icon="tabler:search"
            className="lg:hidden flex text-xl"
          />

          <Dropdown
            overlay={
              <div className="bg-white border overflow-y px-3 rounded py-5 mr-3 mt-2 shadow-sm w-[13rem] h-[14rem]">
                <div className="text-center">
                  <div className="border-b pb-4">
                    <p className="pt-4 font-semibold text-lg">
                     {userInfo?.full_name}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-col gap-2 mt-2">
                  <Link to={appRoute.profile} className="menuStyle">
                    <Icon icon="guidance:user-1" className="text-[18.5px]" />
                    <span>View Profile</span>
                  </Link>
                  <li
                    className="menuStyle"
                    onClick={() => setActions("passwordChange")}
                  >
                    <Icon icon="mdi:lock-outline" className="text-xl" />
                    <span>Change Password</span>
                  </li>
                  <li className="menuStyle" onClick={() => setActions("logout")}>
                    <Icon
                      icon="ant-design:logout-outlined"
                      className="text-xl"
                    />
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            }
            placement="bottom"
            trigger={["click"]}
          >
            <div className="flex items-center gap-2 group cursor-pointer hover:text-primary">
              <div className="h-7 w-7 rounded-full border border-primary  shadow-sm">
                <img
                  src={realImage}
                  alt="profile"
                  className="rounded-full object-cover h-full w-full"
                />
              </div>
              <span className="text-base md:flex group-hover:text-secondary  hidden">
                Profile
              </span>
            </div>
          </Dropdown>
        </div>
      </div>

      {/* sidebar mobile */}
      <Drawer
        title="Menu"
        open={actions === "sideBar"}
        onClose={() => onCancel()}
      >
        <SideBar isOpen={true} setIsOpen={() => console.log()} />
      </Drawer>

      {/* Logout confirmation */}
      <SignOut open={actions === "logout"} handleClose={() => onCancel()} />
    </>
  );
};

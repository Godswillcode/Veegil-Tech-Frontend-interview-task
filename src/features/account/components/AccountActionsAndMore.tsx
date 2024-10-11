import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { SignOut } from "src/components/layout/SignOut";
import { formatToNaira } from "src/features/dashboard/utils";

export const AccountActionsAndMore = () => {
  const [openLogout, setOpenLogout] = useState(false);
  return (
    <>
     {/* Logout confirmation */}
     <SignOut open={openLogout} handleClose={() => setOpenLogout(false)} />

    <div className="flex flex-col gap-4">
      <div className="border cursor-pointer group flex items-center text-accentSecondary gap-1 shadow-sm rounded-md px-4 py-4">
        <Icon icon="tdesign:add" className="text-3xl" />
        <span className="text-sm group-hover:text-secondary">Fund Account</span>
      </div>
      <div className="border cursor-pointer group flex items-center text-accentSecondary gap-1 shadow-sm rounded-md px-4 py-4">
        <Icon icon="f7:money-dollar" className="text-3xl" />
        <span className="text-sm group-hover:text-secondary">
          Withdraw Funds
        </span>
      </div>
      <div className="border cursor-pointer group flex items-center text-accentSecondary gap-[5.5px] shadow-sm rounded-md px-4 py-4">
        <Icon icon="ic:sharp-share" className="text-3xl" />
        <span className="text-sm group-hover:text-secondary">
          Refer & Earn {formatToNaira(1000)}
        </span>
      </div>
      <div className="border cursor-pointer group flex items-center text-accentSecondary gap-[5.5px] shadow-sm rounded-md px-4 py-4">
        <Icon icon="iconamoon:notification" className="text-3xl" />
        <span className="text-sm group-hover:text-secondary">
          Notifications
        </span>
      </div>
      <div className="border cursor-pointer group flex items-center text-accentSecondary gap-[5.5px] shadow-sm rounded-md px-4 py-4">
        <Icon icon="material-symbols:call-outline" className="text-3xl" />
        <span className="text-sm group-hover:text-secondary">Contact Us</span>
      </div>

      <div onClick={() => setOpenLogout(true)} className="border cursor-pointer justify-between group flex items-center text-red-600  shadow-sm rounded-md px-4 py-4">
        <div className="flex items-center gap-[10px]">
          <Icon icon="uiw:logout" className="text-2xl" />
          <span className="text-sm group-hover:text-secondary">Logout</span>
        </div>
        <Icon icon="iconamoon:arrow-right-2-thin" className="text-2xl text-accentSecondary"/>
      </div>
    </div>
    </>
  );
};

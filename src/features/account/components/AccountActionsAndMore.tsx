import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { SignOut } from "src/components/layout/SignOut";
import { formatToNaira } from "src/features/dashboard/utils";
import { WithdrawFunds } from "./WithdrawFunds";
import { TransferFund } from "./TransferFund";
import { AccountTActions } from "../types";
import { DepositFund } from "./DepositFund";
import { openNotification } from "src/utils/notification";

export const AccountActionsAndMore = () => {

  const [action, setAction] = useState<AccountTActions>();

  const clearAction = () => {
    setAction(undefined);
  };

  const handleShowInfo = () => {
    openNotification({
      title: "Info",
      state: "info",
      description:
        "Coming soon...",
      duration: 8.0,
    });
  };

  return (
    <>
      <SignOut open={action === "logout"} handleClose={() => clearAction()} />

      <WithdrawFunds
        open={action === "withdrawFunds"}
        handleClose={() => clearAction()}
      />
      <TransferFund
        open={action === "transfer"}
        handleClose={() => clearAction()}
      />
      <DepositFund
        open={action === "depositFund"}
        handleClose={() => clearAction()}
      />

      <div className="flex flex-col gap-4">
        <div  onClick={() => setAction("depositFund")} className="border cursor-pointer group flex items-center text-accentSecondary gap-1 shadow-sm rounded-md px-4 py-4">
          <Icon icon="tdesign:add" className="text-3xl" />
          <span className="text-sm group-hover:text-secondary">
            Deposit Fund
          </span>
        </div>
        <div
          onClick={() => setAction("withdrawFunds")}
          className="border cursor-pointer group flex items-center text-accentSecondary gap-1 shadow-sm rounded-md px-4 py-4"
        >
          <Icon icon="f7:money-dollar" className="text-3xl" />
          <span className="text-sm group-hover:text-secondary">
            Withdraw Funds
          </span>
        </div>
        <div
          onClick={() => setAction("transfer")}
          className="border cursor-pointer group flex items-center text-accentSecondary gap-3 shadow-sm rounded-md px-4 py-4"
        >
          <Icon icon="cil:transfer" className="text-3xl" />
          <span className="text-sm group-hover:text-secondary">Transfer</span>
        </div>
        <div onClick={() => handleShowInfo()} className="border cursor-pointer group flex items-center text-accentSecondary gap-[8px] shadow-sm rounded-md px-4 py-4">
          <Icon icon="ic:outline-share" className="text-3xl" />
          <span className="text-sm group-hover:text-secondary">
            Refer & Earn {formatToNaira(1000)}
          </span>
        </div>

        <div onClick={() => handleShowInfo()} className="border cursor-pointer group flex items-center text-accentSecondary gap-[8px] shadow-sm rounded-md px-4 py-4">
          <Icon icon="material-symbols:call-outline" className="text-3xl" />
          <span className="text-sm group-hover:text-secondary">Contact Us</span>
        </div>

        <div
          onClick={() => setAction("logout")}
          className="border cursor-pointer justify-between group flex items-center text-red-600  shadow-sm rounded-md px-4 py-4"
        >
          <div className="flex items-center gap-[10px]">
            <Icon icon="uiw:logout" className="text-2xl" />
            <span className="text-sm group-hover:text-secondary">Logout</span>
          </div>
          <Icon
            icon="iconamoon:arrow-right-2-thin"
            className="text-2xl text-accentSecondary"
          />
        </div>
      </div>
    </>
  );
};

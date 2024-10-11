import { Tooltip } from "antd";
import { useRef } from "react";
import realImage from "src/assets/images/UserImage.png";
import { formatToNaira } from "src/features/dashboard/utils";
import { openNotification } from "src/utils/notification";

export const AccountDetails = () => {
  const textAreaRef = useRef<any>(null);

  function copyToClipboard(e: any) {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
      e.target.focus();
      openNotification({
        title: "Copied",
        description: "",
        state: "success",
        duration: 4.0,
      });
    }
  }
  return (
    <div>
      <div className="flex justify-center">
        <div className="h-24 w-24 rounded-full border-primary border-[2px] bg-white  shadow-sm">
          <img
            src={realImage}
            alt="profile"
            className="rounded-full object-cover h-full w-full"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center pt-3">Godswill Omenuko</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mt-5">
        <div className="border flex justify-between shadow-sm rounded-md px-4 py-5">
          <div>
            <input
              type="text"
              ref={textAreaRef}
              value={`7358496050`}
              className="font-medium text-[22px] w-32 border-none inline outline-none"
            />
            <p className="text-accentSecondary text-sm pt-1">
              Eco Finance bank
            </p>
          </div>
          <Tooltip title="Copy account number">
            <i
              className="ri-file-copy-line hover:text-primary text-lg cursor-pointer"
              onClick={copyToClipboard}
            ></i>
          </Tooltip>
        </div>
        <div className="border shadow-sm rounded-md px-4 py-5">
          <h3 className="font-medium text-[22px]">150</h3>
          <p className="text-accentSecondary text-sm pt-1">
            Eco Finance Points
          </p>
        </div>
        <div className="border shadow-sm rounded-md px-4 py-5">
          <h3 className="font-medium text-[22px]">#EcoFinanceID </h3>
          <p className="text-accentSecondary text-sm pt-1">0001</p>
        </div>
        <div className="border shadow-sm rounded-md px-4 py-5">
          <h3 className="font-medium text-[22px]"> {formatToNaira(0)}</h3>
          <p className="text-accentSecondary text-sm pt-1">Referral Earnings</p>
        </div>
      </div>
    </div>
  );
};

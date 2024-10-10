import { Tooltip } from "antd";
import { useRef, useState } from "react";
import realImage from "src/assets/images/logo.png";
import { AppButton } from "src/components/button/AppButton";
import { EditCompanyProfile } from "./EditCompanyProfile";
import { openNotification } from "src/utils/notification";

export const CompanyProfile = () => {
  const textAreaRef = useRef<any>(null);
  const [editProfile, setEditProfile] = useState(false);

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
    <>
      <EditCompanyProfile
        open={editProfile}
        handleClose={() => setEditProfile(false)}
      />
      <div className="banner text-white flex justify-center text-center items-center px-5 mt-3">
        <div>
          <h3 className="text-2xl md:text-3xl font-medium pb-2 flex items-center gap-3">
            Company Profile
          </h3>
        </div>
      </div>
      <div className="flex justify-center -mt-12">
        <div className="h-24 w-24 rounded-full border-[3px] bg-white  shadow-sm">
          <img
            src={realImage}
            alt="profile"
            className="rounded-full object-contain h-full w-full"
          />
        </div>
      </div>

      <div className="flex justify-center mt-4 text-center">
        <div>
          <h4 className="font-semibold pb-2">Gonimas Properties</h4>
          <div className="flex items-center gap-3 text-sm mb-5">
            <span>the.imaginative.innovators@gmail.com</span> <span>-</span>
            <span>090354261781</span>
          </div>

          <AppButton
            variant="transparent"
            label="Edit Profile"
            handleClick={() => setEditProfile(true)}
          />
          <p className="text-sm text-gray-400 pt-3">Referral link</p>

          <div className="flex items-center gap-4 bg-gray-100 px-2 mt-3 rounded">
            <input
              type="text"
              ref={textAreaRef}
              value={`https://bricks-image.netlify.app/register?ref=111111`}
              className="focus:outline-none w-full bg-gray-100 py-2 text-sm"
            />
            <Tooltip title="Copy referral link">
              <i
                className="ri-file-copy-line hover:text-primary text-lg cursor-pointer"
                onClick={copyToClipboard}
              ></i>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

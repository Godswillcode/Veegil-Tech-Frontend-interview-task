import { Tooltip } from "antd";
import { useRef } from "react";
import { Link } from "react-router-dom";
import realImage from "src/assets/images/realtorsImage.png";
import { appRoute } from "src/config/routeMgt/routePaths";
import { openNotification } from "src/utils/notification";

export const RealtorProfile = () => {
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
    <>
      <div className="banner text-white flex justify-center text-center items-center px-5 mt-3">
        <div>
          <h3 className="text-2xl md:text-3xl font-medium pb-2 flex items-center gap-3">
            My Profile
          </h3>
        </div>
      </div>
      <div className="flex justify-center -mt-12">
        <div className="h-24 w-24 rounded-full border-[3px] bg-white  shadow-sm">
          <img
            src={realImage}
            alt="profile"
            className="rounded-full object-cover h-full w-full"
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

          <Link
            to={appRoute.editRealtorProfile(1).path}
            className="transparentButton"
          >
            Edit Profile
          </Link>
          <p className="text-sm text-gray-400 pt-3">My Referral link</p>

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

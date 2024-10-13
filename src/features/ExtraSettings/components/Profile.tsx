import realImage from "src/assets/images/UserImage.png";
import { useGetUserInfo } from "src/hooks/useGetUserInfo";
import { openNotification } from "src/utils/notification";

export const UserProfile = () => {
  const {userInfo} = useGetUserInfo()
  const handleEdit = () => {
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
          <h4 className="font-semibold pb-2">{userInfo?.full_name}</h4>
          <div className="flex items-center gap-3 text-sm mb-5">
            <span>{userInfo?.email}</span> <span>-</span>
            <span>0{userInfo?.phone}</span>
          </div>

          <button className="transparentButton" onClick={handleEdit}>Edit Profile</button>
        </div>
      </div>
    </>
  );
};

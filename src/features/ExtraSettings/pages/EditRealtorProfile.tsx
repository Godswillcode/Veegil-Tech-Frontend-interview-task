import { Collapse, CollapseProps } from "antd";
import realImage from "src/assets/images/realtorsImage.png";
import { PageIntro } from "src/components/PageIntro";
import { appRoute } from "src/config/routeMgt/routePaths";
import { PersonalDetails } from "../components/PersonalDetails";
import { BankDetails } from "../components/BankDetails";
import { SocialMedia } from "../components/SocialMedia";

export const EditRealtorProfile = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Personal Details",
      children: (
        <div className=" bg-gray-50 p-5 rounded">
          <PersonalDetails />
        </div>
      ),
    },
    {
      key: "2",
      label: "Bank Details",
      children: (
        <div className="bg-gray-50 p-5 rounded">
          <BankDetails />
        </div>
      ),
    },
    {
      key: "3",
      label: "Social Media",
      children: (
        <div className="bg-gray-50 p-5 rounded">
          <SocialMedia />
        </div>
      ),
    },
  ];
  return (
    <div>
      <PageIntro
        title="Profile"
        linkBack={appRoute.profile}
        description="View & edit your profile on the system"
      />
      <div className="banner text-white flex justify-center text-center items-center px-5 mt-3">
        <div>
          <h3 className="text-2xl md:text-3xl font-medium pb-2 flex items-center gap-3">
            Edit Profile
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

      <Collapse
        defaultActiveKey={["1"]}
        items={items}
        expandIconPosition="right"
        className="mt-10 profileCollapse"
        bordered
      />
    </div>
  );
};

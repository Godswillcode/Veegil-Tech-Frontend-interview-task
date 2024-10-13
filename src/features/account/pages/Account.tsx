import { PageIntro } from "src/components/PageIntro";
import { AccountDetails } from "../components/AccountDetails";
import { AccountActionsAndMore } from "../components/AccountActionsAndMore";
import { useGetUserInfo } from "src/hooks/useGetUserInfo";

const Account = () => {
  const {userInfo} = useGetUserInfo()
  return (
    <div>
      <PageIntro
        title="My Account"
        arrowBack={false}
        description={userInfo?.full_name}
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-10 gap-y-5 mt-16">
        <div className="col-span-2">
         <AccountActionsAndMore/>
        </div>
        <div className="col-span-3">
          <AccountDetails />
        </div>
      </div>
    </div>
  );
};

export default Account;

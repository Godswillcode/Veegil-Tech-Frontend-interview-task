import { PageIntro } from "src/components/PageIntro";
import { AccountDetails } from "../components/AccountDetails";
import { AccountActionsAndMore } from "../components/AccountActionsAndMore";

const Account = () => {
  return (
    <div>
      <PageIntro
        title="My Account"
        arrowBack={false}
        description="Godswill Omenuko"
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16">
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

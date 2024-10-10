import { Icon } from "@iconify/react";
import { SimpleCard } from "src/components/cards/SimpleCard";
import { LatestActivities } from "../components/LatestActivities";

const Dashboard = () => {

  return (
    <>
      <div className="banner text-white flex justify-center text-center items-center px-5 mt-3">
        <div>
          <h3 className="text-2xl md:text-4xl font-medium pb-2 flex items-center gap-3">
            <span>Hello</span> <Icon icon="noto:waving-hand" />
          </h3>
          <h4 className="font-medium">Welcome back Godswill</h4>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-7">
        <SimpleCard
          title={"Current Balance"}
          count={0}
          cardColor={"blue"}
          icon={"akar-icons:money"}
        
        />
      
        <SimpleCard
          title={"Total Withdrawal"}
          count={0}
          cardColor={"oxblood"}
          icon={"ph:hand-withdraw-bold"}
         
        />
       
        <SimpleCard
          title={"Weekly Coupon"}
          count={0}
          cardColor={"lightBlue"}
          icon={"mingcute:coupon-line"}
         
        />
        <SimpleCard
          title={"Avaliable Loan"}
          count={0}
          cardColor={"purple"}
          icon={"tdesign:money"}
         
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-7">
      <div className="col-span-2">
      <LatestActivities/>
      <div>
      </div>
      </div>
      
      </div>
    </>
  );
};

export default Dashboard;

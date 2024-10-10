import { SimpleCard } from "src/components/cards/SimpleCard";
import { LatestActivities } from "../components/LatestActivities";
import google from "../assets/google-play-badge.png";
import playStore from "../assets/iosbadge-101-image.webp";

const Dashboard = () => {
  return (
    <>
      <div className="banner text-white flex justify-center text-center items-center px-5 mt-3">
        <div>
          <h3 className="text-2xl md:text-4xl font-medium pb-2 flex items-center gap-3">
            <span>Hello Godswill</span>
          </h3>
          <h4 className="font-medium">We're glad you're here!</h4>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-7">
        <SimpleCard
          title={"Current Balance"}
          count={5000}
          cardColor={"blue"}
          icon={"akar-icons:money"}
        />

        <SimpleCard
          title={"Total Withdrawal"}
          count={1000}
          cardColor={"oxblood"}
          icon={"ph:hand-withdraw-bold"}
        />

        <SimpleCard
          title={"Weekly Coupon"}
          count={20}
          cardColor={"lightBlue"}
          icon={"mingcute:coupon-line"}
        />
        <SimpleCard
          title={"Avaliable Loan"}
          count={2000}
          cardColor={"purple"}
          icon={"tdesign:money"}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-10 gap-y-5 mt-16">
        <div className="col-span-3">
          <LatestActivities />
        </div>
        <div className="col-span-2">
          <div>
            <h4 className="text-sm text-accentSecondary uppercase">
              Download the Mobile App
            </h4>

            <div className="flex items-center gap-3 justify-between">
              <div className=" h-20 w-[10.5rem] flex justify-center items-center">
                <img src={google} alt="google" className="cursor-pointer"/>
              </div>
              <div className=" h-20 w-[10.5rem] flex justify-center items-center">
                <img src={playStore} alt="ios" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import realImage from "src/assets/images/UserImage.png";
import { formatToNaira } from "src/features/dashboard/utils";

export const AccountDetails = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="h-24 w-24 rounded-full border-[3px] bg-white  shadow-sm">
          <img
            src={realImage}
            alt="profile"
            className="rounded-full object-cover h-full w-full"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center pt-3">Godswill Omenuko</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mt-5">
        <div className="border shadow-sm rounded-md px-4 py-5">
          <h3 className="font-medium text-2xl">7358496050</h3>
          <p className="text-accentSecondary text-sm pt-1">Eco Finance bank</p>
        </div>
        <div className="border shadow-sm rounded-md px-4 py-5">
          <h3 className="font-medium text-2xl">150</h3>
          <p className="text-accentSecondary text-sm pt-1">Eco Finance Points</p>
        </div>
        <div className="border shadow-sm rounded-md px-4 py-5">
          <h3 className="font-medium text-2xl">#EcoFinanceID </h3>
          <p className="text-accentSecondary text-sm pt-1">0001</p>
        </div>
        <div className="border shadow-sm rounded-md px-4 py-5">
          <h3 className="font-medium text-2xl"> {formatToNaira(0)}</h3>
          <p className="text-accentSecondary text-sm pt-1">Referral Earnings</p>
        </div>
      </div>
    </div>
  );
};

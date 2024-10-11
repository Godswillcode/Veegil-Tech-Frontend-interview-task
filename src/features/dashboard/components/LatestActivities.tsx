// import { Empty, Skeleton } from "antd";
// import { useGetActivityLog } from "../hooks/useGetActivityLog";
// import dayjs from "dayjs";

import { Icon } from "@iconify/react/dist/iconify.js";
import { formatToNaira } from "../utils";

export const LatestActivities = () => {
  // const { data, isLoading } = useGetActivityLog();
  // formatToNaira
  return (
    <div>
      <h3 className="text-sm pb-4 text-accentSecondary">RECENT TRANSACTIONS</h3>

      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="border flex shadow-sm rounded-md px-4 py-5 items-start mb-4 justify-between text-xs text-accentSecondary"
        >
          <div className="flex items-center gap-3">
            <div
              className={`bg-primary rounded-full h-8 w-8 flex justify-center items-center`}
            >
              <Icon icon="tabler:wallet" className="text-lg text-white" />
            </div>
            <div>
              <p className="pb-1">Account credited</p>
              <p>1 min ago</p>
            </div>
          </div>
          <span>{formatToNaira(2500)}</span>
        </div>
      ))}
    </div>
  );
};

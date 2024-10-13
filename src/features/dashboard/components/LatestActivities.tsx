// import { Empty, Skeleton } from "antd";
// import { useGetActivityLog } from "../hooks/useGetActivityLog";
// import dayjs from "dayjs";

import { Icon } from "@iconify/react/dist/iconify.js";
import { formatToNaira } from "../utils";
import { useGetTransactionHistory } from "src/features/transactionHistory/hooks/useGetTransactionHistory";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Skeleton } from "antd";

dayjs.extend(relativeTime);
export const LatestActivities = () => {
  const { data, isLoading } = useGetTransactionHistory();

  // Function to determine display message based on transaction type
  const getTransactionMessage = (transactionType: string) => {
    switch (transactionType) {
      case "debit":
        return "Account debited";
      case "credit":
        return "Account credited";
      case "deposit":
        return "Account deposited";
      default:
        return "Transaction type unknown";
    }
  };

  return (
    <div>
      <h3 className="text-sm pb-4 text-accentSecondary">RECENT TRANSACTIONS</h3>
      {isLoading ? (
        <Skeleton />
      ) : data && data?.length > 0 ? (
        <div>{data?.slice(0, 5).map((item) => (
          <div
            key={item.createdAt}
            className="border flex shadow-sm rounded-md px-4 py-5 items-start mb-4 justify-between text-xs text-accentSecondary"
          >
            <div className="flex items-center gap-3">
              <div
                className={`bg-primary rounded-full h-8 w-8 flex justify-center items-center`}
              >
                <Icon icon="tabler:wallet" className="text-lg text-white" />
              </div>
              <div>
                <p className="pb-1">
                  {getTransactionMessage(item.transaction_type)}
                </p>
                <p>{dayjs(item.createdAt).fromNow()}</p>
              </div>
            </div>
            <span>{formatToNaira(item.amount)}</span>
          </div>
        ))}</div>
      ) : (
        <div className="pt-10">No Transaction Yet</div>
      )}

      {/* {data?.map((item) => (
        <div
          key={item.createdAt}
          className="border flex shadow-sm rounded-md px-4 py-5 items-start mb-4 justify-between text-xs text-accentSecondary"
        >
          <div className="flex items-center gap-3">
            <div
              className={`bg-primary rounded-full h-8 w-8 flex justify-center items-center`}
            >
              <Icon icon="tabler:wallet" className="text-lg text-white" />
            </div>
            <div>
              <p className="pb-1">
                {getTransactionMessage(item.transaction_type)}
              </p>
              <p>{dayjs(item.createdAt).fromNow()}</p>
            </div>
          </div>
          <span>{formatToNaira(item.amount)}</span>
        </div>
      ))} */}
    </div>
  );
};

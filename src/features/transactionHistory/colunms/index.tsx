import { ColumnsType } from "antd/es/table";
import { ITransactionHistoryProps } from "../types";
import { formatToNaira } from "src/features/dashboard/utils";
import dayjs from "dayjs";

export const TRANSACTION_HISTORY_TABLE_COLUMNS =
  (): ColumnsType<ITransactionHistoryProps> => [
    {
      title: "Transaction Type",
      dataIndex: "name",
      render: (_, val) => {
        let colorClass = "";
        if (val?.transaction_type === "debit") {
          colorClass = "text-red-700";
        } else if (val?.transaction_type === "credit") {
          colorClass = "text-green-700";
        } else if (val?.transaction_type === "deposit") {
          colorClass = "text-yellow-500";
        }

        return (
          <div className={`${colorClass} capitalize`}>
            {val?.transaction_type}
          </div>
        );
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (_, val) => <span>{formatToNaira(val?.amount)}</span>,
    },
    {
      title: "Account Number",
      dataIndex: "account_number",
      render: (_, val) => (
        <span className="capitalize">{val.account_name}</span>
      ),
    },
    {
      title: "Account Name",
      dataIndex: "account_name",
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (_, val) => (
        <span>{dayjs(val?.createdAt).format("MMM Do YYYY")}</span>
      ),
    },
    {
      title: "Time",
      dataIndex: "time",
      render: (_, val) => <span>{dayjs(val?.createdAt).format("h:mm a")}</span>,
    },
    {
      title: "Reason",
      dataIndex: "reason",
    },
    {
      title: "Note",
      dataIndex: "note",
    },
  ];

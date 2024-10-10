import { ColumnsType } from "antd/es/table";
import { ITransactionHistoryProps } from "../types";

export const TRANSACTION_HISTORY_TABLE_COLUMNS =
  (): ColumnsType<ITransactionHistoryProps> => [  {
    title: "Transaction Type",
    dataIndex: "name",
  },
  {
    title: "Bank",
    dataIndex: "bank",
  },
  {
    title: "Account Number",
    dataIndex: "accountNumber",
  },
  {
    title: "Account Name",
    dataIndex: "accountName",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Time",
    dataIndex: "time",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },]
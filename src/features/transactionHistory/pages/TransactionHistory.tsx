import { PageIntro } from "src/components/PageIntro";
import { Table } from "antd/lib";
import { TRANSACTION_HISTORY_TABLE_COLUMNS } from "../colunms";
import { useGetTransactionHistory } from "../hooks/useGetTransactionHistory";
import { Select } from "antd";
import {useState} from "react"

const columns = TRANSACTION_HISTORY_TABLE_COLUMNS();

const TransactionHistory = () => {
  const [tType, setTType] = useState("")
  const { data, isLoading } = useGetTransactionHistory({
    transaction_type: tType,
  });

  return (
    <div>
      <PageIntro
        title="Transactions History"
        arrowBack={false}
        description="View all transactions history on the system"
      />
       <div className="flex justify-end">
       <Select
        placeholder="Filter Transactions"
        allowClear
        options={[
          { value: "debit", label: "Debit" },
          { value: "credit", label: "Credit" },
          { value: "deposit", label: "Deposit" },
        ]}
        className="w-[10rem]"
        onChange={(val) => setTType(val)}
      />
       </div>
      <Table
        className="shadow-sm mt-7"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10, total: data?.length }}
        loading={isLoading}
        scroll={{ x: 500 }}
      />
    </div>
  );
};

export default TransactionHistory;

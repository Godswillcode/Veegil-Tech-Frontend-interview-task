
import { PageIntro } from "src/components/PageIntro";
import { Table } from "antd/lib";
import { TRANSACTION_HISTORY_TABLE_COLUMNS } from "../colunms";

const columns = TRANSACTION_HISTORY_TABLE_COLUMNS()

const TransactionHistory = () => {
  return (
    <div>
      <PageIntro
        title="Transactions History"
        arrowBack={false}
        description="View all transactions history on the system"
      />

      <Table
        className="bg-white mt-10"
        columns={columns}
        dataSource={[]}
        // pagination={{ ...pagination, total: data?.total }}
        // onChange={onChange}
        // loading={isLoading}
        scroll={{ x: 500 }}
      />
    </div>
  );
};

export default TransactionHistory;

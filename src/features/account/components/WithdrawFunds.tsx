import { Drawer, Form, Input, InputNumber, Select } from "antd";
import { AppButton } from "src/components/button/AppButton";
import { transferReasonsOptions } from "src/constants/general";
import { formatToNaira } from "src/features/dashboard/utils";
import { IdentifierProps } from "src/types";
import { generalValidationRules } from "src/utils/formHelpers/validations";
import { useTransferAndWithdrawFund } from "../hooks/useTransferAndWithdrawFund";
import { useQueryClient } from "react-query";
import { openNotification } from "src/utils/notification";
import { QUERY_KEY_FOR_CURRENT_BALANCE, useGetCurrentBalance } from "src/features/dashboard/hooks/useGetCurrentBalance";
import { QUERY_KEY_FOR_TRANSACTIONS_HISTORY } from "src/features/transactionHistory/hooks/useGetTransactionHistory";
import { UsersFormInput } from "./UsersFormInput";

export const WithdrawFunds = ({ handleClose, open }: IdentifierProps) => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const { data } = useGetCurrentBalance();
  const {mutate, isLoading} = useTransferAndWithdrawFund()
const handleSubmit = (values: any) => {
  mutate(
    {
      amount: values.amount,
      password: values.password,
      userId: values.userId,
      reason: values.reason,
      note: "..."
    },
    {
      onError: (err: any) => {
        openNotification({
          title: "Error",
          state: "error",
          description: err.response.data.data.message,
          duration: 8.0,
        });
      },
      onSuccess: (res: any) => {    
        openNotification({
          title: "Success",
          state: "success",
          description: res.data.data.message,
          duration: 4.5,
        });
        form.resetFields();
        handleClose()
        queryClient.invalidateQueries([QUERY_KEY_FOR_CURRENT_BALANCE]);
        queryClient.invalidateQueries([QUERY_KEY_FOR_TRANSACTIONS_HISTORY]);
      },
    }
  );
}

  return (
    <Drawer title="Withdraw Fund" open={open} onClose={() => handleClose()}>
      <div className="text-accentSecondary">
        <h3 className="font-medium text-sm">
          Available balance is: {formatToNaira(data?.balance??0)}
        </h3>

        <Form form={form} layout="vertical" requiredMark={false} className="mt-5" onFinish={handleSubmit}>
          <Form.Item
            name="amount"
            label="Amount to withdraw"
            rules={generalValidationRules}
          >
            <InputNumber className="w-full" placeholder="e.g 3000" min={1} max={data?.balance}/>
          </Form.Item>

          <UsersFormInput Form={Form} control={{label: "Select Destination", name: "userId"}}/>
          <Form.Item
            name="reason"
            label="Select withdrawal reason"
            rules={generalValidationRules}
          >
            <Select
              options={transferReasonsOptions}
              placeholder="Select"
              allowClear
              showSearch
              optionFilterProp="label"
            />
          </Form.Item>

          <Form.Item
          name="password"
          label="Enter your Password"
          rules={generalValidationRules}
          className="mb-10"
        >
          <Input.Password placeholder="For security reasons.." />
        </Form.Item>

        <AppButton label="Withdraw Now" type="submit" isLoading={isLoading}/>
        </Form>
      </div>
    </Drawer>
  );
};

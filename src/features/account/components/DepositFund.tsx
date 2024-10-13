import { IdentifierProps } from "src/types";
import { Form, InputNumber, Modal } from "antd";
import { generalValidationRules } from "src/utils/formHelpers/validations";
import { AppButton } from "src/components/button/AppButton";
import { useAddFund } from "../hooks/useAddFund";
import { openNotification } from "src/utils/notification";
import { useQueryClient } from "react-query";
import { QUERY_KEY_FOR_CURRENT_BALANCE } from "src/features/dashboard/hooks/useGetCurrentBalance";

export const DepositFund = ({ handleClose, open }: IdentifierProps) => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const {mutate, isLoading} = useAddFund()
  const handleSubmit = (values: any) => {
    mutate(
      { ...values },
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
        },
      }
    );
  };

  return (
    <Modal
      title="Deposit Fund"
      open={open}
      onCancel={() => handleClose()}
      footer={null}
      style={{ top: 15 }}
    >
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        className="mt-5"
        requiredMark={false}
        form={form}
      >
        <Form.Item name="amount" label="Enter Amount" rules={generalValidationRules}>
          <InputNumber min={1} className="w-full" placeholder="e.g 200"/>
        </Form.Item>

        <AppButton type="submit" label="Deposit Now" isLoading={isLoading}/>
      </Form>
    </Modal>
  );
};

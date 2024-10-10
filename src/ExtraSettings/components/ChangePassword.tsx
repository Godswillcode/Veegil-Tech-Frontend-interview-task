import { Form, Input, Modal } from "antd";
import { IdentifierProps } from "src/types";

import { AppButton } from "src/components/button/AppButton";
import { openNotification } from "src/utils/notification";

export const ChangePassword = ({ handleClose, open }: IdentifierProps) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    openNotification({
      title: "Info",
      state: "info",
      description:
        "Please note that this form is not connected to any endpoint.",
      duration: 8.0,
    });
  };

  return (
    <Modal
      open={open}
      onCancel={() => handleClose()}
      footer={null}
      title="Change Password"
      style={{ top: 15 }}
    >
      <Form
        layout="vertical"
        className="mt-7"
        form={form}
        onFinish={handleSubmit}
      >
        <Form.Item name="old" label="Old Password">
          <Input.Password />
        </Form.Item>
        <Form.Item name="password" label="New Password">
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="password_confirmation"
          label="Confirm Password"
          dependencies={["password"]}
        >
          <Input.Password />
        </Form.Item>

        <AppButton type="submit" />
      </Form>
    </Modal>
  );
};

import { openNotification } from "src/utils/notification";
import { Form, Input } from "antd";
import { emailValidationRules } from "src/utils/formHelpers/validations";
import { AppButton } from "src/components/button/AppButton";

export const ForgotPasswordForm = () => {
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
    <Form layout="vertical" onFinish={handleSubmit} form={form}>
      <Form.Item name="email" label="Email" rules={emailValidationRules}>
        <Input />
      </Form.Item>

      <AppButton
        type="submit"
        label="Submit"
        containerStyle="w-full mt-5"
      />
    </Form>
  );
};

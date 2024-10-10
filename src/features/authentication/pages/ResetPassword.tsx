import { Form, Input } from "antd";
import { AuthLayout } from "../components/AuthLayout";
import {
  passwordValidationRules,
  textInputValidationRules,
} from "src/utils/formHelpers/validations";

import { AppButton } from "src/components/button/AppButton";

const ResetPassword = () => {
  return (
    <AuthLayout
      title="Reset Password"
      description="Fill in the code that was to your email and new password"
    >
      <Form layout="vertical" requiredMark={false}>
        <Form.Item
          name="code"
          label="Enter Code"
          rules={textInputValidationRules}
        >
          <Input placeholder="Enter code..." />
        </Form.Item>

        <Form.Item
          name="password"
          label="New Password"
          rules={passwordValidationRules}
        >
          <Input.Password placeholder="Enter your password.." />
        </Form.Item>
        <Form.Item
          name="password_confirmation"
          label="Confirm New Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Field is required",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered does not match."
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <AppButton type="submit" containerStyle="w-full" />
      </Form>
      <div className="flex justify-end pt-1">
        <div>
          <span className="cursor-pointer hover:text-secondary text-sm mt-2">
            Resend code
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;

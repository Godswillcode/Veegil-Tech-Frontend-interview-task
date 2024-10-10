import { Form, Input } from "antd";
import { AuthLayout } from "../components/AuthLayout";
import { emailValidationRules } from "src/utils/formHelpers/validations";
import { AppButton } from "src/components/button/AppButton";
import { Link } from "react-router-dom";
import { appRoute } from "src/config/routeMgt/routePaths";

const ForgotPassword = () => {
  return (
    <AuthLayout
      title="Forgot Password"
      description="Fill in your email and we will send you a code to reset your password."
    >
      <Form layout="vertical" requiredMark={false}>
        <Form.Item
          name="email"
          label="Email Address"
          rules={emailValidationRules}
        >
          <Input placeholder="Enter your email.." />
        </Form.Item>

        <AppButton type="submit" containerStyle="w-full" />
      </Form>
      <div className="flex justify-end pt-1">
        <div>
          <Link
            to={appRoute.login_in}
            className="cursor-pointer hover:text-primary text-secondary text-sm mt-2"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;

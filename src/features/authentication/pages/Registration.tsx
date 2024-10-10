import { Form, Input } from "antd";
import { AuthLayout } from "../components/AuthLayout";
import {
  emailValidationRules,
  generalValidationRules,
  textInputValidationRules,
} from "src/utils/formHelpers/validations";
import { AppButton } from "src/components/button/AppButton";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <AuthLayout
      title="Let's get to know you"
      description="Getting started made easy"
    >
      <Form layout="vertical" requiredMark={false}>
        <Form.Item
          name="fullname"
          label="Full Name"
          rules={textInputValidationRules}
        >
          <Input placeholder="Enter full name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email Address"
          rules={emailValidationRules}
        >
          <Input placeholder="Enter your email.." />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={textInputValidationRules}
        >
          <Input type="tel" placeholder="e.g 08198773833" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Enter Password"
          rules={generalValidationRules}
        >
          <Input.Password placeholder="Set your password.." />
        </Form.Item>
        <AppButton type="submit" label="Register" containerStyle="w-full" />
      </Form>

      <div className="mt-2">
        <span className="text-sm">
          Already have an account ?
          <Link to="/login" className="text-secondary hover:text-primary pl-1">
            Login
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Registration;

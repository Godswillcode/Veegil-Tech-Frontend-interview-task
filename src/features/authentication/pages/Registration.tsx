import { Form, Input } from "antd";
import { AuthLayout } from "../components/AuthLayout";
import {
  emailValidationRules,
  generalValidationRules,
  phoneNumberValidationRules,
  textInputValidationRules,
} from "src/utils/formHelpers/validations";
import { AppButton } from "src/components/button/AppButton";
import { Link, Navigate } from "react-router-dom";
import { useRegistration } from "../hooks/useRegistration";
import { openNotification } from "src/utils/notification";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { appRoute } from "src/config/routeMgt/routePaths";

const Registration = () => {
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const { mutate, isLoading } = useRegistration();

  const handleSubmit = (values: any) => {
    mutate(
      { ...values },
      {
        onError: (err: any) => {
          console.log("error", err);
          openNotification({
            title: "Error",
            state: "error",
            description: err.response.data.data.message,
            duration: 8.0,
          });
        },
        onSuccess: (res: any) => {
          const result = res.data.data;
          if (
            signIn({
              token: result.token,
              tokenType: "Bearer",
              authState: result,
              expiresIn: 180,
            })
          ) {
            openNotification({
              title: "Success",
              state: "success",
              description: "Account created successfully",
              duration: 4.5,
            });
          }
        },
      }
    );
  };

  return (
    <>
    {isAuthenticated() && <Navigate to={appRoute.home} replace={true} />}

    <AuthLayout
      title="Let's get to know you"
      description="Getting started made easy"
    >
      <Form layout="vertical" requiredMark={false} onFinish={handleSubmit}>
        <Form.Item
          name="full_name"
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
          rules={phoneNumberValidationRules}
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
        <AppButton
          isLoading={isLoading}
          type="submit"
          label="Register"
          containerStyle="w-full"
        />
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
    </>
  );
};

export default Registration;

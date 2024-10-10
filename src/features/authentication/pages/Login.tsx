import { Form, Input } from "antd";
import { AuthLayout } from "../components/AuthLayout";
import {
  generalValidationRules,
  emailValidationRules,
} from "src/utils/formHelpers/validations";
import { AppButton } from "src/components/button/AppButton";
import { Link, Navigate } from "react-router-dom";
import { appRoute } from "src/config/routeMgt/routePaths";
import { useLogin } from "../hooks/useLogin";
import { openNotification } from "src/utils/notification";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";

const Login = () => {
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const {mutate, isLoading} = useLogin()

const handleSubmit = (values: any) => {
    mutate({...values},   {
      onError: (err: any) => {
        openNotification({
          title: "Error",
          state: "error",
          description: err.response.data.message,
          duration: 8.0,
        });
      },
      onSuccess: (res: any) => {
        const result = res.data;
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
            description: "Logged in successfully",
            duration: 4.5,
          });
        }
      },
    })
}


  return (
    <>
      {isAuthenticated() && <Navigate to={appRoute.home} replace={true} />}
  
    <AuthLayout title="Welcome Back" description="Login to your account">
      <Form layout="vertical" requiredMark={false} onFinish={handleSubmit}>
        <Form.Item
          name="email"
          label="Email Address"
          rules={emailValidationRules}
        >
          <Input placeholder="Enter your email.." />
        </Form.Item>
        <Form.Item
          name="password"
          label="Enter Password"
          rules={generalValidationRules}
        >
          <Input.Password placeholder="Enter your password.." />
        </Form.Item>

        <AppButton isLoading={isLoading} type="submit" label="Login" containerStyle="w-full" />
      </Form>

      <div className="flex justify-end pt-1">
        <div>
          <Link
            to={appRoute.forgot_password}
            className="cursor-pointer hover:text-secondary text-sm mt-2"
          >
            Forget password
          </Link>
        </div>
      </div>

      <div className="text-sm mt-6 flex items-center gap-x-2 justify-center">
        <p> Don't have an account yet ? </p>
        <Link
          to={appRoute.registration}
          className="text-secondary hover:text-primary"
        >
          Register Now
        </Link>
      </div>
    </AuthLayout>
    </>
  );
};

export default Login;

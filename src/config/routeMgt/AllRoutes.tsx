import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { appRoute } from "./routePaths";
import Login from "src/features/authentication/pages/Login";
import ForgotPassword from "src/features/authentication/pages/ForgotPassword";
import ResetPassword from "src/features/authentication/pages/ResetPassword";
import { DashboardLayout } from "src/components/layout/Layout";
import { RequireAuth } from "react-auth-kit";
import Profile from "src/features/ExtraSettings/pages/Profile";
import Dashboard from "src/features/dashboard/pages/Dashboard";
import Registration from "src/features/authentication/pages/Registration";
import Account from "src/features/account/pages/Account";
import TransactionHistory from "src/features/transactionHistory/pages/TransactionHistory";

const routesArray: any[] = [
  {
    path: appRoute.home,
    element: <Dashboard />,
  },
  {
    path: appRoute.profile,
    element: <Profile />,
  },
  {
    path: appRoute.account,
    element: <Account />,
  },
  {
    path: appRoute.transactionHistory,
    element: <TransactionHistory />,
  },
];

export const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          {routesArray.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.path === appRoute.login_in ? (
                  route.element
                ) : (
                  <RequireAuth loginPath={appRoute.login_in}>
                    {route.element}
                  </RequireAuth>
                )
              }
            />
          ))}
        </Route>
        <Route path={appRoute.login_in} element={<Login />} />
        <Route path={appRoute.forgot_password} element={<ForgotPassword />} />
        <Route path={appRoute.reset_password} element={<ResetPassword />} />
        <Route path={appRoute.registration} element={<Registration />} />
      </Routes>
    </Router>
  );
};

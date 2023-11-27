import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "context/auth";

import RootLayout from "layouts/root";
import Home from "pages/home";
import Help from "pages/help";
import AboutUs from "pages/about-us";
import Dashboard from "pages/dashboard";
import ForgotPassword from "pages/forgot-password";
import Apply from "pages/apply";
import Create from "pages/create";
import Profile from "pages/profile";
import AccountInfoPage from "pages/account-info";

import AuthLayout from "layouts/auth";
import Login from "pages/login";
import Register from "pages/register";

const router = createBrowserRouter([
   {
      id: "root",
      path: "/",
      element: <RootLayout />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: "help",
            element: <Help />,
         },
         {
            path: "about-us",
            element: <AboutUs />,
         },
         {
            path: "dashboard",
            element: <Dashboard />,
         },
         {
            path: "apply/credit-card",
            element: <Apply type="Credit Card" />,
         },
         {
            path: "apply/loan",
            element: <Apply type="Loan" />,
         },
         {
            path: "create/checkings",
            element: <Create type="Checkings" />,
         },
         {
            path: "create/savings",
            element: <Create type="Savings" />,
         },
         {
            path: "user",
            element: <Profile />,
         },
         {
            path: "account-info",
            element: <AccountInfoPage />,
         },
      ],
   },
   {
      id: "auth",
      path: "/",
      element: <AuthLayout />,
      children: [
         {
            path: "login",
            element: <Login />,
         },
         {
            path: "register",
            element: <Register />,
         },
         {
            path: "forgot-password",
            element: <ForgotPassword />,
         },
      ],
   },
]);

export default function App() {
   return (
      <AuthProvider>
         <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
      </AuthProvider>
   );
}

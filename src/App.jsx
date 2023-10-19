import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";

import RootLayout from "./layouts/root";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

import AuthLayout from "./layouts/auth";
import Login from "./pages/login";
import Register from "./pages/register";

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
            path: "dashboard",
            element: <Dashboard />,
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

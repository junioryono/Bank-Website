import { Outlet } from "react-router-dom";

export default function AuthLayout() {
   return (
      <div className="flex flex-col justify-center h-screen pb-8">
         <Outlet />
      </div>
   );
}

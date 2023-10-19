import { Outlet } from "react-router-dom";

export default function AuthLayout() {
   return (
      <div className="flex flex-col">
         <div>Auth Header</div>
         <Outlet />
         <div>Auth Footer</div>
      </div>
   );
}

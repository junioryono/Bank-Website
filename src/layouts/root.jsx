import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RootLayout() {
   return (
      <div className="flex flex-col">
         <div className="flex">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/dashboard">Dashboard</Link>
         </div>
         <Outlet />
         <div>Footer</div>
      </div>
   );
}

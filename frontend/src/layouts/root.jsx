import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "context/auth";

export default function RootLayout() {
   const user = useAuth();

   return (
      <div className="flex flex-col h-screen text-text-primary">
         {/* BEGIN HEADER */}
         <div className="text-white bg-[#D71E28]">
            <div className="container flex justify-between pt-4 pb-3">
               <Link to="/" className="text-3xl">
                  Aztec Credit Union
               </Link>
               <div className="flex items-center gap-6">
                  <Link to="/help">Help</Link>
                  <Link to="/about-us">About Us</Link>
                  {!user ? (
                     <>
                        <Link to="/register">Register</Link>
                        <Link
                           to="/login"
                           type="button"
                           className="flex justify-center items-center px-4 py-2 rounded-3xl text-text-primary bg-white"
                        >
                           Login
                        </Link>
                     </>
                  ) : (
                     <Link
                        type="button"
                        to="/dashboard"
                        className="flex justify-center items-center px-4 py-2 rounded-3xl text-text-primary bg-white"
                     >
                        Dashboard
                     </Link>
                  )}
               </div>
            </div>
         </div>
         <div className="h-1 bg-[#FFCD41]" />
         {/* END HEADER */}

         {/* BEGIN CHILD CONTENT */}
         <div className="container flex flex-col mb-auto">
            <Outlet />
         </div>
         {/* END CHILD CONTENT */}

         {/* BEGIN FOOTER */}
         <div className="flex justify-center py-7 text-[#141414] bg-[#F4F0ED]">
            Copyright © {new Date().getFullYear()} Aztec Credit Union. All rights reserved.
         </div>
         {/* END FOOTER */}
      </div>
   );
}

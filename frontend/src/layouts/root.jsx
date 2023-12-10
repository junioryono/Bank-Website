import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "context/auth";
import Default_Profile_img from "images/Default_Profile.jpg";

export default function RootLayout() {
   const { user } = useAuth();

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
                     <></>
                  ) : (
                     <>
                        <Link
                           type="button"
                           to="/dashboard"
                           className="flex justify-center items-center px-4 py-2 rounded-3xl text-text-primary bg-white"
                        >
                           Dashboard
                        </Link>

                        <Link to="/user" type="button">
                           <img src={Default_Profile_img} className="rounded-full w-9" />
                        </Link>
                     </>
                  )}
               </div>
            </div>
         </div>
         <div className="py-[2px] bg-[#FFCD41]" />
         {/* END HEADER */}

         {/* BEGIN NAVBAR */}
         <nav className="border-b-2 bg-zinc-50">
            <div className="container flex">
               <Link to="/create/checkings" className="hover:bg-orange-50 hover:underline rounded-md px-16 py-3 m-0 p-8">
                  Checking
               </Link>
               <Link to="/create/savings" className="hover:bg-orange-50 hover:underline rounded-md px-16 py-3">
                  Savings
               </Link>
               <Link to="/apply/credit-card" className="hover:bg-orange-50 hover:underline rounded-md px-16 py-3">
                  Credit Cards
               </Link>
               <Link to="/apply/loan" className="hover:bg-orange-50 hover:underline rounded-md px-16 py-3">
                  Loans
               </Link>
            </div>
         </nav>
         {/* END NAVBAR */}

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

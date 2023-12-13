import { useAuth } from "context/auth";
import { useNavigate } from "react-router-dom";
import Default_Profile_img from "images/Default_Profile.jpg";

export default function profile() {
   const { user } = useAuth();
   const { logoutUser } = useAuth();
   const navigate = useNavigate();

   const logout = () => {
      logoutUser();
      navigate("/");
   };

   return (
      <>
         {user ? (
            <>
               <div className="flex justify-center">
                  <img src={Default_Profile_img} className="rounded-full w-60 mt-10" />
               </div>
               <div className="shadow ">
                  <div className="px-4 py-5 sm:px-6">
                     <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
                     <p className="mt-1 max-w-2xl text-sm text-gray-500">Details and informations about user.</p>
                  </div>
                  <div className="border-t border-gray-200">
                     <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Full name</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {user.firstName + " " + user.lastName}
                           </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Address</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.address}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Email address</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Salary</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.salary}</dd>
                        </div>
                     </dl>
                  </div>
               </div>
               <div className="flex justify-center">
                  <button
                     className="bg-red-600  hover:bg-red-700 text-white 
                  font-bold mt-3 py-2 px-10 rounded-full focus:outline-none focus:shadow-outline"
                     onClick={logout}
                  >
                     Log Out
                  </button>
               </div>
            </>
         ) : (
            navigate("/")
         )}
      </>
   );
}

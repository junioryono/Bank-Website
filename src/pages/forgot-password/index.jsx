import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/auth";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
   const user = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      if (user) {
         navigate("/dashboard");
      }
   }, [user]);

   if (user) {
      return null;
   }

   return (
      <section className="bg-gray-50">
         <Link
            to="/"
            className="bg-[#D71E28] hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full absolute top-6 left-6"
         >
            Back
         </Link>
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="flex items-center justify-center text-5xl font-bold text-[#D71E28] cursor-default pb-2">ACU</div>
            <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
               <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Forgot Password
               </h2>
               <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                  <div>
                     <div className="flex items-center justify-between">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">
                           Enter your email
                        </label>
                        <div className="text-sm">
                           <Link to="/login" className="font-semibold text-[#D71E28] hover:text-red-500 cursor-pointer">
                              Remember password?
                           </Link>
                        </div>
                     </div>
                     <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                     />
                  </div>

                  <button
                     type="submit"
                     className="flex w-full justify-center rounded-md bg-[#D71E28] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                     Forgot password
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
}

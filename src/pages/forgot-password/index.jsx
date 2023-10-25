import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function ForgotPassword() {
   const { username } = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      if (username) {
         navigate("/dashboard");
      }
   }, [username]);

   if (username) {
      return null;
   }

   return (
      <section class="bg-gray-50 dark:bg-gray-900">
         <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="flex items-center justify-center text-5xl font-bold text-[#D71E28] cursor-default pb-2">
               {" "}
               ACU
            </div>
            <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
               <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Forgot Password
               </h2>
               <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                  <div>
                     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Enter your email
                     </label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                     />
                  </div>

                  <button
                     type="submit"
                     class="flex w-full justify-center rounded-md bg-[#D71E28] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                     Forgot password
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
}

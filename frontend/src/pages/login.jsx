import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/auth";
import { Link } from "react-router-dom";

export default function Login() {
   const { user } = useAuth();
   const { loginUser } = useAuth();
   const navigate = useNavigate();
   const queryParams = useMemo(() => new URLSearchParams(window.location.search), []);

   const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      if (email.length > 0) {
         loginUser(email, password).then((res) => {
            if (res === 200) {
               const redirect = queryParams.get("redirect");
               if (redirect) {
                  navigate(redirect);
               } else {
                  navigate("/dashboard");
               }
            }
         });
      }
   };

   useEffect(() => {
      if (user) {
         navigate("/dashboard");
      }
   }, [user]);

   if (user) {
      return null;
   }

   return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link
               to="/"
               className="bg-[#D71E28] hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full absolute top-6 left-6"
            >
               Back
            </Link>
            <div className="flex items-center justify-center text-5xl font-bold text-[#D71E28] cursor-default"> ACU</div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
               Sign in to your account
            </h2>
         </div>

         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
               <div>
                  <label for="email" className="block text-sm font-medium leading-6 text-gray-900">
                     Email address
                  </label>
                  <div className="mt-2">
                     <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                     />
                  </div>
               </div>

               <div>
                  <div className="flex items-center justify-between">
                     <label for="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                     </label>
                     <div className="text-sm">
                        <Link
                           to={"/forgot-password" + (queryParams ? "?" + queryParams.toString() : "")}
                           className="font-semibold text-[#D71E28] hover:text-red-500 cursor-pointer"
                        >
                           Forgot password?
                        </Link>
                     </div>
                  </div>
                  <div className="mt-2">
                     <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                     />
                  </div>
               </div>

               <div>
                  <button
                     type="submit"
                     className="flex w-full justify-center rounded-md bg-[#D71E28] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                     Sign in
                  </button>
               </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500 flex-col">
               <div>Not a member?</div>
               <Link
                  to={"/register" + (queryParams ? "?" + queryParams.toString() : "")}
                  className="font-semibold leading-6 text-[#D71E28] cursor-pointer"
               >
                  Sign up here!
               </Link>
            </p>
         </div>
      </div>
   );
}

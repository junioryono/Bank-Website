import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function Home() {
   const user = useAuth();
   return (
      <>
         {/* Navbar */}
         <nav className="flex bg-center gap-20 border-b-2">
            <Link
               to={!user ? "/" : "create/checkings"}
               className="hover:bg-orange-50 hover:underline rounded-md px-3 py-3"
               onClick={() => (!user ? alert("You must log-in first") : "")}
            >
               Checking
            </Link>
            <Link
               to={!user ? "/" : "create/savings"}
               className="hover:bg-orange-50 hover:underline rounded-md px-3 py-3"
               onClick={() => (!user ? alert("You must log-in first") : "")}
            >
               Savings
            </Link>
            <Link
               to={!user ? "/" : "apply/credit-card"}
               className="hover:bg-orange-50 hover:underline rounded-md px-3 py-3"
               onClick={() => (!user ? alert("You must log-in first") : "")}
            >
               Credit Cards
            </Link>
            <Link
               to={!user ? "/" : "apply/loan"}
               className="hover:bg-orange-50 hover:underline rounded-md px-3 py-3"
               onClick={() => (!user ? alert("You must log-in first") : "")}
            >
               Loans
            </Link>
         </nav>

         {/* Banner */}
         <div className="bg-orange-50 mt-2">
            <div className="m-5 flex">
               {!user ? (
                  <div className="w-full max-w-xs">
                     <form className="bg-white shadow-2xl rounded-lg px-4 pt-6 pb-8 mb-4">
                        <h1 className=" text-2xl font-light">Hello</h1>
                        <h2 className="font-light pb-3">Sign on to manage your accounts.</h2>
                        <div className="mb-10">
                           <input
                              className="appearance-none border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-b-orange-600"
                              id="username"
                              type="text"
                              placeholder="Username"
                           />
                        </div>
                        <div className="mb-12">
                           <input
                              className="appearance-none border-b-2 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:border-b-orange-600"
                              id="password"
                              type="password"
                              placeholder="Password"
                           />
                        </div>
                        <div className="flex items-center justify-evenly">
                           <a
                              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full focus:outline-none focus:shadow-outline"
                              type="submit"
                              href="/login"
                           >
                              Sign In
                           </a>
                           <a
                              className="inline-block align-baseline font-bold text-sm text-black hover:underline"
                              href="/register"
                           >
                              Enroll
                           </a>
                        </div>
                        <div className="text-center pt-6 hover:underline">
                           <a href="forgot-password">Forgot password?</a>
                        </div>
                     </form>
                     <p className="text-center text-gray-500 text-xs">&copy;2023 ACU Corp. All rights reserved.</p>
                  </div>
               ) : (
                  <div className="w-full max-w-xs">
                     <form className="bg-white shadow-2xl rounded-lg px-4 pt-6 pb-8 mb-4">
                        <h1 className=" text-2xl font-light">Welcome back {user.name}!</h1>
                        <h2 className="font-light pb-3">What can we help you with today.</h2>
                     </form>
                  </div>
               )}
               <div className="flex-col">
                  <div>
                     <h1 className="p-9  text-5xl text-red-700">
                        50% student loans credit when you apply for a loan with Aztec Credit Union!
                     </h1>
                  </div>
                  <div className="p-9">
                     <p className="text-gray-500">*Must be a currnet student at San Diego State University</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/auth";
import { Link } from "react-router-dom";
import { formatNumberWithCommas } from "utilities/formatting";

export default function Dashboard() {
   const user = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      if (user === null) {
         navigate("/login?redirect=/dashboard");
      }
   }, [user]);

   const checkingsAndSavingsAccounts = useMemo(() => {
      if (user === null) {
         return [];
      }

      return user.accounts.filter((account) => {
         return account.type === "checkings" || account.type === "savings";
      });
   }, [user]);

   const creditCardAndLoanAccounts = useMemo(() => {
      if (user === null) {
         return [];
      }

      return user.accounts.filter((account) => {
         return account.type === "credit card" || account.type === "loan";
      });
   }, [user]);

   if (!user) {
      return null;
   }

   return (
      <div className="container max-w-4xl my-10">
         <div className="flex flex-col gap-4">
            <div className="text-3xl bold-text">Account Summary</div>
            <div className="text-1xl bold-text">Checkings and Savings</div>
            <ul role="list" className="divide-y divide-gray-300 bg-slate-100 border-2">
               {checkingsAndSavingsAccounts.map((account) => {
                  return (
                     <Link
                        type="li"
                        to={"/dashboard/account/" + account.accountNumber}
                        className="flex justify-between gap-x-6 py-5 hover:bg-gray-300 cursor-pointer px-5"
                     >
                        <div className="flex min-w-0 gap-x-4">
                           <div className="min-w-0 flex-auto">
                              <p className="text-lg font-semibold leading-6 text-gray-900 pb-3">
                                 My {account.type === "savings" ? "Savings" : "Checkings"}
                              </p>
                              <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                                 Account ID: {account.accountNumber}
                              </p>
                           </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                           <p className="text-lg leading-6 text-gray-900 pb-3">Balance</p>
                           <p className="mt-1 text-lg leading-5 text-gray-500">${formatNumberWithCommas(account.balance)}</p>
                        </div>
                     </Link>
                  );
               })}
            </ul>
         </div>
         <div className="flex flex-col gap-4 pt-8">
            <div className="text-1xl bold-text">Credit Cards and Loans</div>
            <ul role="list" className="divide-y divide-gray-300 bg-slate-100 border-2">
               {creditCardAndLoanAccounts.map((account) => {
                  return (
                     <Link
                        type="li"
                        to={"/dashboard/account/" + account.accountNumber}
                        className="flex justify-between gap-x-6 py-5 hover:bg-gray-300 cursor-pointer px-5"
                     >
                        <div className="flex min-w-0 gap-x-4">
                           <div className="min-w-0 flex-auto">
                              <p className="text-lg font-semibold leading-6 text-gray-900 pb-3">
                                 My {account.type === "credit card" ? "Credit Card" : "Loan"}
                              </p>
                              <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                                 Account ID: {account.accountNumber}
                              </p>
                           </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                           <p className="text-lg leading-6 text-gray-900 pb-3">Balance</p>
                           <p className="mt-1 text-lg leading-5 text-gray-500">${formatNumberWithCommas(account.balance)}</p>
                        </div>
                     </Link>
                  );
               })}
            </ul>
            <Link to="/" className="flex justify-between gap-x-6 py-5 hover-bg-gray-300 cursor-pointer px-5">
               <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                     <p className="text-lg font-semibold leading-6 text-gray-900 pb-3">Apply for a Loan</p>
                     <p className="mt-1 truncate text-sm leading-5 text-gray-500">Click here to apply for a loan.</p>
                  </div>
               </div>
            </Link>
         </div>
      </div>
   );
}

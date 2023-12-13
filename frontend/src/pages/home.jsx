import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { useAuth } from "context/auth";

import dashboardImage from "images/dashboard_screenshot.png";

export default function Home() {
   const { user } = useAuth();
   const { loginUser } = useAuth();

   const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      if (email.length > 0) {
         loginUser(email, password).catch((err) => {
            alert(err);
         });
      }
   };
   return (
      <>
         {/* Banner */}
         <div className="bg-orange-50 mt-2">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 md:px-16 md:py-24 py-10">
               {!user ? (
                  <div className="w-full max-w-xs self-center lg:self-start">
                     <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-2xl rounded-lg px-4 pt-6 pb-8 mb-4"
                        method="POST"
                     >
                        <h1 className="text-2xl font-light">Hello</h1>
                        <h2 className="font-light pb-3">Sign on to manage your accounts.</h2>
                        <div className="mb-10">
                           <input
                              className="appearance-none border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-b-orange-600"
                              id="email"
                              type="text"
                              placeholder="Email"
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
                           <button
                              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full focus:outline-none focus:shadow-outline"
                              type="submit"
                           >
                              Sign In
                           </button>
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
                     <form className="bg-white shadow-2xl rounded-lg px-4 pt-8 pb-8 mb-4">
                        <h1 className="text-2xl font-light">Welcome back, {user.firstName}!</h1>
                        <h2 className="font-light pt-2">What can we help you with today?</h2>
                     </form>
                  </div>
               )}
               <div className="flex-col text-center lg:px-9 lg:text-left">
                  <h1 className="pb-4 text-5xl text-red-700">
                     50% student loans credit when you apply for a loan with Aztec Credit Union!
                  </h1>
                  <p className="text-gray-500">*Must be a current student at San Diego State University</p>
               </div>
            </div>
         </div>
         <div className="bg-white py-14 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
               <div className="mx-auto max-w-2xl lg:text-center">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Banking made easy.</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                     Banking with Aztec Credit Union is easy. We have a range of products and services to suit your needs. We
                     are a member-owned financial institution, so you can be sure that we have your best interests at heart.
                  </p>
               </div>
               <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                     <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                           <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500">
                              <svg
                                 className="h-6 w-6 text-white"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 aria-hidden="true"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                 />
                              </svg>
                           </div>
                           Online Banking
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">
                           We make online banking easy. You can access your account from anywhere in the world, 24 hours a
                           day,
                        </dd>
                     </div>
                     <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                           <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500">
                              <svg
                                 className="h-6 w-6 text-white"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 aria-hidden="true"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                 />
                              </svg>
                           </div>
                           Secured Banking
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">
                           We take security seriously. We use the latest technology to ensure that your money is safe and
                           secure.
                        </dd>
                     </div>
                     <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                           <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500">
                              <svg
                                 className="h-6 w-6 text-white"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 aria-hidden="true"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                 />
                              </svg>
                           </div>
                           Transactions
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">
                           We make it easy to transfer money to other accounts. You can also pay your bills online.
                        </dd>
                     </div>
                     <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                           <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500">
                              <svg
                                 className="h-6 w-6 text-white"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 aria-hidden="true"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                 />
                              </svg>
                           </div>
                           Bill pay
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">
                           We make it easy to pay your bills online. You can also set up automatic payments for recurring
                           bills.
                        </dd>
                     </div>
                  </dl>
               </div>
            </div>
            <div className="overflow-hidden bg-white py-24 mt-20 sm:py-32">
               <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                     <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                           <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                              An easy way to manage your money.
                           </p>
                           <p className="mt-6 text-lg leading-8 text-gray-600">
                              The dashboard is a great way to manage your money. You can see all of your accounts in one
                              place.
                           </p>
                           <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                              <div className="relative pl-9">
                                 <dt className="inline font-semibold text-gray-900">
                                    <svg
                                       className="absolute left-1 top-1 h-5 w-5 text-red-500"
                                       viewBox="0 0 20 20"
                                       fill="currentColor"
                                       aria-hidden="true"
                                    >
                                       <path
                                          fillRule="evenodd"
                                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                          clipRule="evenodd"
                                       />
                                    </svg>
                                    Account balances.
                                 </dt>
                                 <dd className="inline pl-2">
                                    Check your account balances and transactions. You can also see your credit card balance.
                                 </dd>
                              </div>
                              <div className="relative pl-9">
                                 <dt className="inline font-semibold text-gray-900">
                                    <svg
                                       className="absolute left-1 top-1 h-5 w-5 text-red-500"
                                       viewBox="0 0 20 20"
                                       fill="currentColor"
                                       aria-hidden="true"
                                    >
                                       <path
                                          fillRule="evenodd"
                                          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                          clipRule="evenodd"
                                       />
                                    </svg>
                                    Transfer money.
                                 </dt>
                                 <dd className="inline pl-2">
                                    Secure transfers between your accounts. You can also transfer money to other accounts.
                                 </dd>
                              </div>
                              <div className="relative pl-9">
                                 <dt className="inline font-semibold text-gray-900">
                                    <svg
                                       className="absolute left-1 top-1 h-5 w-5 text-red-500"
                                       viewBox="0 0 20 20"
                                       fill="currentColor"
                                       aria-hidden="true"
                                    >
                                       <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                       <path
                                          fillRule="evenodd"
                                          d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                                          clipRule="evenodd"
                                       />
                                    </svg>
                                    Apply for a loan.
                                 </dt>
                                 <dd className="inline pl-2">
                                    Apply made easy. You can apply for a loan right from your dashboard.
                                 </dd>
                              </div>
                           </div>
                        </div>
                     </div>
                     <img className="self-center pt-6" src={dashboardImage} alt="Dashboard Image" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

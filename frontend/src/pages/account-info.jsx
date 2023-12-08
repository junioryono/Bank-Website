import { useAuth } from "context/auth";
import { useNavigate } from "react-router-dom";

export default function AccountInfoPage() {
   const user = useAuth();
   const navigate = useNavigate();

   return (
      <div className="container max-w-4xl my-4 bg-gray-200 border border-gray-300 rounded-lg px-4">
         {user ? (
            <ul role="list" class="divide-y divide-gray-100 pb-5">
               <li class="flex justify-between gap-x-6 py-5">
                  <div class="flex min-w-0 gap-x-4">
                     <div class="min-w-0 flex-auto">
                        <p class="text-lg font-semibold leading-6 text-gray-900 pb-3">{user.name}</p>
                        <p class="text-lg font-semibold leading-6 text-gray-900">Account Funds: </p>
                     </div>
                  </div>
                  <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                     <p class="text-sm leading-6 text-gray-900">Activity</p>
                     <p class="mt-1 text-xs leading-5 text-gray-500">
                        Last transaction <time datetime="2023-01-23T13:23Z">3h ago</time>
                     </p>
                  </div>
               </li>
               <div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <time class="text-lg font-semibold text-gray-900 dark:text-white">December 6th, 2023</time>
                  <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                     <li>
                        <a href="#" className="items-center block p-3 sm:flex cursor-default">
                           <div>
                              <div className="text-base font-normal text-gray-600 dark:text-gray-400">
                                 <span className="font-medium text-gray-900 dark:text-white">Amount spent</span> at{" "}
                                 <span className="font-medium text-gray-900 dark:text-white">Store</span>
                              </div>
                              <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                 <svg
                                    className="w-2.5 h-2.5 me-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                 >
                                    <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                                 </svg>
                                 Public
                              </span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="items-center block p-3 sm:flex cursor-default">
                           <div>
                              <div className="text-base font-normal text-gray-600 dark:text-gray-400">
                                 <span className="font-medium text-gray-900 dark:text-white">Amount spent</span> at{" "}
                                 <span className="font-medium text-gray-900 dark:text-white">Store</span>
                              </div>
                              <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                 <svg
                                    className="w-2.5 h-2.5 me-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                 >
                                    <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                                 </svg>
                                 Public
                              </span>
                           </div>
                        </a>
                     </li>
                  </ol>
               </div>
               <div className="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <time className="text-lg font-semibold text-gray-900 dark:text-white">December 3rd, 2023</time>
                  <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                     <li>
                        <a href="#" className="items-center block p-3 sm:flex cursor-default">
                           <div>
                              <div className="text-base font-normal text-gray-600 dark:text-gray-400">
                                 <span className="font-medium text-gray-900 dark:text-white">Amount spent</span> at{" "}
                                 <span className="font-medium text-gray-900 dark:text-white">Store</span>
                              </div>
                              <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                 <svg
                                    className="w-2.5 h-2.5 me-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                 >
                                    <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                                 </svg>
                                 Public
                              </span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="items-center block p-3 sm:flex cursor-default">
                           <div>
                              <div className="text-base font-normal text-gray-600 dark:text-gray-400">
                                 <span className="font-medium text-gray-900 dark:text-white">Amount spent</span> at{" "}
                                 <span className="font-medium text-gray-900 dark:text-white">Store</span>
                              </div>
                              <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                 <svg
                                    className="w-2.5 h-2.5 me-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                 >
                                    <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                                 </svg>
                                 Public
                              </span>
                           </div>
                        </a>
                     </li>
                  </ol>
               </div>
            </ul>
         ) : (
            navigate("/")
         )}
      </div>
   );
}

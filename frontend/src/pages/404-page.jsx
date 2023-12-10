import { Link } from "react-router-dom";
import { useAuth } from "context/auth";

export default function NotFound() {
   const user = useAuth();
   return (
      <div className="bg-orange-50 mt-2 px-5 pt-14 pb-16">
         <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full max-w-3xl text-center md:text-left mb-8 md:pr-10">
               <div className="mb-4">
                  <h1 className="text-3xl font-semibold mb-2 text-red-500">We can't find your page</h1>

                  <div className="border-b border-gray-300 mb-4"></div>
               </div>

               <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-full mx-auto flex">
                  <div className="w-2/3 pr-4">
                     <h2 className="text-1xl font-semibold mb-3">What should I do?</h2>
                     <p className="text-gray-700 mb-4">
                        This may have happened due to an incorrect URL, or because a page expired or moved. You can check the
                        spelling and capitalization of your URL or use the search box at the top of the page to try again.
                     </p>

                     <Link to="/about-us" className="text-blue-500 hover:underline font-bold">
                        Click here to learn more
                     </Link>
                  </div>

                  <div className="border-l mx-4 border-gray-300"></div>

                  <div className="w-1/2 pl-4">
                     <h2 className="text-1xl font-semibold mb-3">Helpful Links</h2>
                     <p className="text-gray-700 mb-4">
                        <ul className="list-disc pl-6 text-gray-700">
                           <li>
                              <Link to="/register" className="text-blue-500 hover:underline">
                                 Register for an account
                              </Link>
                           </li>
                           <li>
                              <Link to="/login" className="text-blue-500 hover:underline">
                                 Apply for services
                              </Link>
                           </li>
                           <li>
                              <Link to="/help" className="text-blue-500 hover:underline">
                                 Frequently asked questions
                              </Link>
                           </li>
                        </ul>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

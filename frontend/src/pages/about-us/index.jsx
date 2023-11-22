import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import bankImage from "./SDSU_CAMPUS.jpg";

export default function AboutUs() {
   const user = useAuth();
   return (
      <div className="bg-orange-50 mt-2 p-5">
         <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full max-w-md text-center md:text-left mb-8">
               <h1 className="text-3xl font-semibold mb-4">About Us</h1>
               <p className="text-gray-700 mb-6">
                  At Aztec Credit Union, we are dedicated to providing reliable and convenient banking services to our
                  members. With a rich history spanning over decades, we continue to support our community and help
                  individuals achieve their financial goals.
               </p>
               <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
               <p className="text-gray-700 mb-6">
                  Our mission is to empower members to achieve financial success through personalized banking solutions,
                  offered with exceptional service and integrity. We believe that sound financial management can unlock
                  boundless opportunities and discoveries. At Aztec Credit Union, in collaboration with San Diego State
                  University, we are committed to supporting our members on their journey towards greater financial heights
                  and exciting discoveries.
               </p>
               <h2 className="text-xl font-semibold mb-2">Why Choose Aztec Credit Union?</h2>
               <ul className="list-disc pl-6 text-gray-700">
                  <li>Competitive interest rates on savings and loans</li>
                  <li>Flexible and convenient online banking services</li>
                  <li>Expert financial advice and guidance</li>
                  <li>Community-focused, supporting local initiatives</li>
               </ul>
            </div>
            <div className="w-full md:w-1/2">
               <img src={bankImage} alt="Bank" className="w-full h-auto mb-4 rounded-lg" />
            </div>
         </div>
         <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full md:w-1/2 p-4 bg-white shadow-2xl rounded-lg mb-4 md:mr-4">
               {!user ? (
                  <div>
                     <h2 className="text-2xl font-semibold mb-3">Become a Member</h2>
                     <p className="text-gray-700 mb-4">
                        Join Aztec Credit Union today and experience the benefits of membership. Manage your accounts
                        securely and enjoy exclusive offers tailored just for you.
                     </p>
                     <a
                        href="/register"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full inline-block"
                     >
                        Enroll Now
                     </a>
                  </div>
               ) : (
                  <div>
                     <h2 className="text-2xl font-semibold mb-3">Welcome back, {user.name}!</h2>
                     <p className="text-gray-700 mb-4">
                        We're glad to have you as a member of Aztec Credit Union. If you have any questions or need
                        assistance, feel free to reach out to our support team.
                     </p>
                     <a
                        href="/contact"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full inline-block"
                     >
                        Contact Us
                     </a>
                  </div>
               )}
            </div>
            <div className="w-full md:w-1/2 p-4 bg-white shadow-2xl rounded-lg">
               <h2 className="text-2xl font-semibold mb-3">Special Offer</h2>
               <p className="text-gray-700 mb-4">
                  Get 50% student loans credit when you apply for a loan with Aztec Credit Union! *Must be a current student
                  at San Diego State University.
               </p>
               <p className="text-gray-500">*Terms and conditions apply.</p>
            </div>
         </div>
      </div>
   );
}

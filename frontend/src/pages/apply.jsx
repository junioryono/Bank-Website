import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

// Type would either be "Credit Card" or "Loan"
export default function Apply({ type }) {
   const { user } = useAuth();
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      country: "United States",
      streetAddress: "",
      city: "",
      region: "",
      postalCode: "",
      annualSalary: "",
      ssn: "",
   });

   const [formError, setFormError] = useState(false);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      for (const key in formData) {
         if (formData[key] === "") {
            setFormError(true);
            return;
         }
      }

      const pushNotificationSelected = document.querySelector('input[name="push-notifications"]:checked');
      if (!pushNotificationSelected) {
         setFormError(true);
         return;
      }

      setFormError(false);

      navigate("/form-val-apply");

      console.log("Form submitted:", formData);
   };

   const handleCancel = () => {
      navigate(-1); // Go back to the previous page
   };

   useEffect(() => {
      if (user === null) {
         navigate("/login?redirect=/apply/" + (type === "Credit Card" ? "credit-card" : "loan"));
      }
   }, [user]);

   if (!user) {
      return null;
   }

   return (
      <form onSubmit={handleSubmit}>
         <div className="container max-w-4xl my-10">
            <div className="border-b border-gray-900/10">
               <h1 className="text-3xl font-semibold leading-7 py-6 text-gray-900">Apply for a {type}</h1>
            </div>

            <div className="border-b border-gray-900/10 pb-12 pt-10">
               <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
               <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                     <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Income
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="firstName"
                           id="first-name"
                           autoComplete="given-name"
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                           onChange={handleInputChange}
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-3">
                     <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Credit Limit
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="lastName"
                           id="last-name"
                           autoComplete="family-name"
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                           onChange={handleInputChange}
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-3">
                     <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Social Security Number (SSN)
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="firstName"
                           id="first-name"
                           autoComplete="given-name"
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                           onChange={handleInputChange}
                        />
                     </div>
                  </div>
                  <div className="sm:col-span-3">
                     <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Annual Percentage Rate (APR)
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="firstName"
                           id="first-name"
                           autoComplete="given-name"
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                           onChange={handleInputChange}
                        />
                     </div>
                  </div>
               </div>
            </div>
            {/* Error message for incomplete form */}
            {formError && <p className="text-red-500 text-sm mt-2">Please fill out all fields of information.</p>}

            <div className="mt-6 flex items-center justify-end gap-x-6 pb-7">
               <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleCancel}>
                  Cancel
               </button>
               <button
                  type="submit"
                  className="rounded-md bg-[#D71E28] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
                  Save
               </button>
            </div>
         </div>
      </form>
   );
}

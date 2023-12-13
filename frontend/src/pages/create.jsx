import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Create({ type }) {
   const { user } = useAuth();
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      balance: "",
      overdraftLimit: "",
   });

   const [formError, setFormError] = useState(false);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const id = user.user_id;
   const creatAccount = async (e) => {
      const balance = e.target.balance.value;
      const overdraftLimit = e.target.overdraftLimit.value;
      let interestRate = 0;
      const accountType = type;
      const user = id;

      if (type === "Savings") {
         interestRate = e.target.interestRate.value;
      }

      const response = await fetch("http://127.0.0.1:8000/users/accounts/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            user,
            balance,
            overdraftLimit,
            accountType,
            interestRate,
         }),
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 201) {
         // navigate("/login");
         alert("Account Created Successfully");
         navigate("/form-val-check");
      } else {
         console.log(response.status);
         console.log("there was a server issue");
         alert("An Error Occured");
      }
      return response.status;
   };
   const handleSubmit = (e) => {
      e.preventDefault();

      for (const key in formData) {
         if (formData[key] === "") {
            setFormError(true);
            return;
         }
      }
      creatAccount(e);
      console.log("Form submitted:", formData);
   };

   const handleCancel = () => {
      navigate(-1); // Go back to the previous page
   };

   useEffect(() => {
      if (!user) {
         navigate("/login?redirect=/apply/" + (type === "Checkings" ? "checkings" : "savings"));
      }
   }, [user, navigate]);

   if (!user) {
      return null;
   }

   return (
      <form onSubmit={handleSubmit}>
         <div className="container max-w-4xl my-10">
            <div className="border-b border-gray-900/10">
               <h1 className="text-3xl font-semibold leading-7 py-6 text-gray-900">Create a {type} Account</h1>
            </div>

            <div className="border-b border-gray-900/10 pb-12 pt-10">
               <h2 className="text-base font-semibold leading-7 text-gray-900">Account Information</h2>
               <p className="mt-1 text-sm leading-6 text-gray-600">Initial deposite.</p>

               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                     <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Balance
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="balance"
                           id="balance"
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                           onChange={handleInputChange}
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-3">
                     <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Over Draft Limit
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="overdraftLimit"
                           id="overdraftLimit"
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                           onChange={handleInputChange}
                        />
                     </div>
                  </div>

                  {type === "Savings" ? (
                     <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                           Interest Rate
                        </label>
                        <div className="mt-2">
                           <input
                              type="text"
                              name="interestRate"
                              id="interestRate"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                              onChange={handleInputChange}
                           />
                        </div>
                     </div>
                  ) : (
                     <></>
                  )}
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

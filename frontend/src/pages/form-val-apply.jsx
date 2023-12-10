import React from "react";
import { Link } from "react-router-dom";

export default function FormValidation() {
   return (
      <div className="flex flex-col items-center justify-center h-screen">
         <h1 className="text-3xl font-semibold mb-6">Application successfully submitted!</h1>
         <h2 className="text-l font-semibold mb-6">(Time to process: 8-10 business days)</h2>
         <Link to="/dashboard" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Return to Dashboard
         </Link>
      </div>
   );
}

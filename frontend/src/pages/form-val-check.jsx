import React from "react";
import { Link } from "react-router-dom";

export default function FormValidation() {
   return (
      <div className="flex flex-col items-center justify-center h-screen">
         <h1 className="text-3xl font-semibold mb-6">Account successfully made!</h1>
         <Link to="/dashboard" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Return to Dashboard
         </Link>
      </div>
   );
}

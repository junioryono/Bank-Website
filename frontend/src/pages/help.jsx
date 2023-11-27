import React, { useState } from "react";

// React component for FontAwesome icon
const PlusIcon = () => <span className="mr-2">&#43;</span>; // You can replace this with your actual FontAwesome component
const MinusIcon = () => <span className="mr-2">&#8211;</span>; // You can replace this with your actual FontAwesome component

export default function Help() {
   const [openSection, setOpenSection] = useState(null);

   const toggleSection = (index) => {
      setOpenSection((prevOpenSection) => (prevOpenSection === index ? null : index));
   };

   return (
      <section className="bg-white">
         <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl font-extrabold text-gray-900">Frequently asked questions</h2>
            {faqData.map((faq, index) => (
               <div key={index} className="relative mb-3">
                  <h6 className="mb-0">
                     <button
                        onClick={() => toggleSection(index)}
                        className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
                     >
                        <span>{faq.question}</span>
                        {openSection === index ? <MinusIcon /> : <PlusIcon />}
                     </button>
                  </h6>
                  <div
                     className={`${
                        openSection === index ? "block" : "h-0 overflow-hidden"
                     } transition-all duration-300 ease-in-out`}
                  >
                     <div className="p-4 text-sm leading-normal text-blue-gray-500/80">{faq.answer}</div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}

// Example FAQ data
const faqData = [
   {
      question: "How do I check my bank statement online?",
      answer:
         "You can view your bank statements by clicking on the Dashboard tab on the left side of the screen.",
   },
   {
      question: "How do I create a checking account?",
      answer:
         "You can create a checking account by clicking on the Create Account button on the bottom of the dashboard page.",
   },
   {
      question: "Can I have automatic bank transfers?",
      answer:
         "Yes, you can set up automatic bank transfers by clicking the Transfers button in the dashboard page.",
   },
   {
      question: "How do I apply for a loan?",
      answer:
         "You can apply for a loan by clicking on the Apply for loan button on the bottom of the dashboard.",
   },
   {
      question: "How do I apply for a credit card?",
      answer:
         "You can apply for a credit card by clicking on the Apply for a credit card button on the bottom of dashboard.",
   },
   {
      question: "Why should I use ACU?",
      answer:
         "ACU is a great way to manage your finances and keep track of your money with a simplistic online website and application.",
   },
   {
      question: "What if I want to delete a checkings/savings account?",
      answer:
         "You can delete a checkings/savings account by clicking on the Delete Account button on the bottom of the account information page.",
   },
   {
      question: "How do I create a savings account?",
      answer:
         "You can create a savings account by clicking on the Create Account button on the bottom of the dashboard page.",
   },
];

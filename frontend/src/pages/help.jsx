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
      question: "What is Material Tailwind?",
      answer:
         "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
   },
   {
      question: "How to use Material Tailwind?",
      answer:
         "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
   },
   {
      question: "What can I do with Material Tailwind?",
      answer:
         "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
   },
];

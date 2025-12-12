import YGYP1 from "../../assets/digitalAgency/icons/your-grow-your-plan/YGYP1.png";
import YGYP2 from "../../assets/digitalAgency/icons/your-grow-your-plan/YGYP2.png";

export default function PricingCard({ planName, pricePerMonth, period, features  }) {
  return (
         <div className="border border-[#e3e3e3] shadow-md hover:shadow-lg rounded-xl bg-white p-6 sm:p-8 lg:p-10 hover:-mt-4 sm:hover:-mt-5 lg:hover:-mt-6 group transition-all duration-500 cursor-pointer">
           <p className="text-lg sm:text-xl mb-5 sm:mb-6 lg:mb-7 group-hover:text-primary">
             {planName}
           </p>
           <h2 className="text-3xl sm:text-4xl text-slate-800 lg:text-[2.5rem] pb-6 sm:pb-8 lg:pb-10 mb-6 sm:mb-7 lg:mb-8 border-b border-slate-200  font-medium">
             {pricePerMonth}
             <span className="text-base sm:text-lg lg:text-xl">/ {period}</span>
           </h2>
     
           {/* Features List */}
           <ul className="space-y-3 sm:space-y-4 lg:space-y-5 mb-8 sm:mb-10 lg:mb-12">
             {features.map((feature, index) => (
               <li
                 key={index}
                 className="flex items-start gap-2.5 text-sm sm:text-base"
               >
                 <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                   {/* Default icon */}
                   <img
                     src={YGYP1}
                     className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 opacity-100 group-hover:opacity-0 transition-opacity duration-200"
                   />
                   {/* Hover icon */}
                   <img
                     src={YGYP2}
                     className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                   />
                 </div>
                 <span className="">{feature}</span>
               </li>
             ))}
           </ul>
     
           {/* CTA Button */}
           <button className="w-full sm:w-auto flex items-center justify-center bg-[#19324D] group-hover:bg-primary font-bold py-2.5 px-4 rounded-tl-lg rounded-tr-[2px] rounded-b-[2px]">
             <span className="mr-2.5 font-medium text-sm sm:text-base text-white group-hover:text-[#19324D] transition-colors duration-300">
               Get Started Now
             </span>
             {/* Arrow Icon */}
             <div className="w-6 h-6 bg-white text-[#19324D] rounded-[1px] flex items-center justify-center">
               <svg
                 className="w-4 h-4"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M14 5l7 7m0 0l-7 7m7-7H3"
                 ></path>
               </svg>
             </div>
           </button>
    </div>
  );
}

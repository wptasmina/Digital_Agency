import { ArrowRight } from "lucide-react";
export default function LatestWorkCard({ work }) {
  return (
    <div className="group cursor-pointer">
      <div className="mb-5 sm:mb-6 lg:mb-[30px] h-[250px] sm:h-[300px] lg:h-[354px] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
          src={work.image}
          alt={work.title}
        />
      </div>
      <h2 className="text-lg sm:text-xl lg:text-[24px] font-medium mb-3 sm:mb-4 lg:mb-5">
        {work.title}
      </h2>
      <p className="text-sm sm:text-base mb-2.5 text-gray-600">
        {work.description}
      </p>
      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#19324D] transition-transform group-hover:translate-x-2" />
    </div>
  );
}

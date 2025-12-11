import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PageHeader({ title, subtitle, currentPage, image }) {
    const [isYearly, setIsYearly] = useState(true);
    const navigate = useNavigate();

    const goHome = () => {
    navigate("/");
  };


  return (
    <section className="Container">
      <div className="max-w-6xl mx-auto lg:mt-20 mt-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 md:gap-16 gap-8 mb-8">
          
          {/* Left - Text */}
          <div className="space-y-4">
            <h2 className="text-sm md:text-5xl">{title}</h2>

            <p className="text-[#5F758C] text-base leading-relaxed tracking-[2%]">
              {subtitle}
            </p>
          </div>

          {/* Switch Text *//* Right - Breadcrumb */}
          <div className="flex items-center justify-center sm:justify-end gap-3">
            {/* Home */}
                <span
                  onClick={() => {
                    setIsYearly(false);
                    goHome();
                  }}
                  className={`text-sm font-medium cursor-pointer transition-colors ${
                    !isYearly ? "text-slate-800 font-semibold" : "text-slate-400"
                  }`}
                >
                  Home
                </span>

            <span className="text-slate-400">/</span>

            <span className="text-sm font-medium text-slate-800 font-semibold">
              {currentPage}
            </span>

          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full overflow-hidden">
          <img 
            src={image} 
            alt="banner image" 
            className="w-full lg:h-[500px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}

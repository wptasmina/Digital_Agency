import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PageHeader({ title, subtitle, currentPage = [], image }) {
  const [isYearly, setIsYearly] = useState(true);
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return (
    <section className="Container">
      <div className="max-w-6xl mx-auto lg:mt-20 mt-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 md:gap-16 gap-8 mb-8">

          {/* Left - Text */}
          <div className="space-y-4">
            <h2 className="text-sm md:text-[40px] text-[#19324D] font-medium">{title}</h2>
            <p className="text-[#5F758C] text-base leading-relaxed tracking-[2%]">
              {subtitle}
            </p>
          </div>

          {/* Right - Breadcrumb */}
          <div className="flex items-center justify-center sm:justify-end gap-3 text-sm">

            {/* Home */}
            <span
              onClick={() => {
                setIsYearly(false);
                goHome();
              }}
              className={`cursor-pointer transition-colors ${
                !isYearly ? "text-slate-800 font-semibold" : "text-slate-400 hover:text-primary font-medium"
              }`}
            >
              Home
            </span>

          {/* Dynamic Breadcrumb */}
          {currentPage.map((page, index) => {
            const isLast = index === currentPage.length - 1;

            return (
              <span key={index} className="flex items-center gap-3">
                <span className="text-slate-400">/</span>

                <span
                  onClick={() => !isLast && page.path && navigate(page.path)}
                  className={`${
                    isLast
                      ? "text-slate-800 font-semibold cursor-default"
                      : "cursor-pointer hover:text-primary  text-slate-400 font-medium"
                  }`}
                >
                  {page.name}
                </span>
              </span>
            );
          })}

          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full overflow-hidden">
          <img
            src={image}
            alt="banner"
            className="w-full lg:h-[500px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}

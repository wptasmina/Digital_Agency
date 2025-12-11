import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bgImages from '../../assets/digitalAgency/about/banner.jpg';

export default function AboutBanner() {
  const [isYearly, setIsYearly] = useState(true);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

//   const goAbout = () => {
//     navigate("/about-us");
//   };

  return (
 <section className="relative overflow-hidden Container bg-white">
      <div className="max-w-6xl mx-auto lg:mt-20 mt-10">

        <div className="grid md:grid-cols-2 md:gap-16 gap-8 mb-10">
          <div className="space-y-4">
            <h2 className="text-sm md:text-5xl">About Us</h2>

            <div className="text-left">
              <p className="text-[#5F758C] text-base leading-relaxed tracking-[2%] mb-4">
               We believe great marketing starts with understanding people. Our agency focuses on creating meaningful.
              </p>
            </div>
          </div>

          {/* Switch Text */}
          <div className="flex items-center justify-center sm:justify-end gap-4">
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

            {/* About */}
            <span
              className={`text-sm font-medium cursor-pointer transition-colors ${
                isYearly ? "text-slate-800 font-semibold" : "text-slate-400"
              }`}
            >
              About Us
            </span>
          </div>
        </div>

        <div className="max-w-full">
          <img src={bgImages} alt="image" className="w-full lg:h-[500px] object-cover" />
        </div>
      </div>
    </section>
  )
}

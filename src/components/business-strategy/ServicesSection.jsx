import { useState } from "react";
import hrIcon from "../../assets/business-strategy/service-intro.png";
import  strategyIcon from "../../assets/icons/our-service/service1.png"
import financeIcon from "../../assets/icons/our-service/service4.png"
import startupIcon from "../../assets/icons/our-service/service9.png"
import  digitalIcon from "../../assets/icons/our-service/service7.png"
import  demoImage from "../../assets/icons/our-service/service8.png"
import rightArrow from "../../assets/icons/our-service/left-arrow.png";
import  rightArrowGreen from "../../assets/icons/our-service/up-arrow.png";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const services = [
    {
      title: "Human Resource",
      desc: "Build stronger teams through smart recruitment, talent development, and retention strategies.",
      icon: hrIcon,
    },
    {
      title: "Business Strategy",
      desc: "Build a clear roadmap for growth with data-driven strategies tailored to your goals.",
      icon: strategyIcon,
    },
    {
      title: "Financial Consulting",
      desc: "Optimize your financial performance with expert budgeting, forecasting, and investment advice.",
      icon: financeIcon,
    },
    {
      title: "Startup Consulting",
      desc: "From idea validation to funding strategy — we help startups grow smart and fast.",
      icon: startupIcon,
    },
    {
      title: "Digital Transformation",
      desc: "Integrate modern technology to enhance business performance and customer engagement.",
      icon: digitalIcon,
    },
  ];

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE LIST */}
        <div className="bg-white border border-[#e3e3e3] p-6 rounded-xl">
          {services.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex items-start gap-4 py-6 border-b border-dashed border-[#e3e3e3] last:border-none cursor-pointer group"
            >
              {/* Icon */}
              <img src={item.icon} className="w-10 h-10" alt="icon" />

              {/* Title + Desc */}
              <div className="flex-1">
                <h3
                  className={`text-xl font-semibold transition ${
                    activeIndex === index
                      ? "text-[#C4EE18]"
                      : "text-[#19324D]"
                  } group-hover:text-[#C4EE18]`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>

              {/* Arrow */}
              <span>
                <img
                  src={
                    activeIndex === index ? rightArrowGreen : rightArrow
                  }
                  className="w-5 h-5 transition group-hover:brightness-110"
                />
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE IMAGE + TEXT */}
        <div className="bg-white border border-[#e3e3e3] rounded-xl overflow-hidden">
          <img src={demoImage} className="w-full h-72 object-cover" />

          <div className="p-6 text-gray-600 text-sm leading-relaxed">
            Our strategy consultants help you define a clear vision and develop 
            actionable plans that drive measurable results. We analyze your business 
            model, identify growth opportunities.
          </div>
        </div>

      </div>
    </section>
  );
}

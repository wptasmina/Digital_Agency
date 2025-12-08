import React from "react";

const services = [
  "Development",
  "Business Consulting",
  "Website Design",
  "Brand Strategy",
  "Social Media",
  "Digital Marketing",
  "UI/UX Design",
  "Photography",
];

export default function MarqueeBanner() {
  return (
    <section className="">
      <div className="w-full bg-[#002827] py-10 sm:py-12 lg:py-[76px] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center">
              <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold px-4 sm:px-5 lg:px-6">
                {service}
              </span>
              <span className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
                ✳
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

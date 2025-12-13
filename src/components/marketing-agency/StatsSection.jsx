import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import Button from "../Button";


export default function StatsSection() {
    const [view, setView] = useState(false);
    const sectionRef = useRef(null);

      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => setView(entry.isIntersecting),
          { threshold: 0.4 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
      }, []);
    
  return (
    <section ref={sectionRef} className="w-full bg-[#05292C] text-white py-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left Stats */}
        <div className="flex items-center gap-16">

          {/* Stat - 85% */}
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              {view && <CountUp end={85} duration={3} />}%
            </h2>
            <p className="text-sm mt-2">Cover Marketing</p>
          </div>

          {/* Stat - 98% */}
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              {view && <CountUp end={98} duration={3} />}%
            </h2>
            <p className="text-sm mt-2">Client Review</p>
          </div>

        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-[1px] h-24 bg-[#C4EE18]"></div>

        {/* Right Text */}
        <div className="lg:w-[45%] text-left">
          <p className="text-gray-300 leading-relaxed mb-4">
            We're a full-service digital marketing agency helping brands adapt,
            evolve, and thrive in the modern marketplace. Our team uses data insights,
            cutting-edge tools, and creative strategy to build impactful campaigns
            that drive engagement, growth, and long-term success.
          </p>

          <Button title={<> Explore More</>}/>
           
        </div>

      </div>
    </section>
  );
}

import CountUp from "react-countup";
import { HiArrowUpRight } from "react-icons/hi2";

export default function StatsSection() {
  return (
    <section className="w-full bg-[#05292C] text-white py-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left Stats */}
        <div className="flex items-center gap-16">

          {/* Stat - 85% */}
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              <CountUp end={85} duration={3} />%
            </h2>
            <p className="text-sm mt-2">Cover Marketing</p>
          </div>

          {/* Stat - 98% */}
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              <CountUp end={98} duration={3} />%
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

          <button className="flex items-center gap-2 text-white underline hover:text-[#C4EE18] duration-200">
            Explore More <HiArrowUpRight />
          </button>
        </div>

      </div>
    </section>
  );
}

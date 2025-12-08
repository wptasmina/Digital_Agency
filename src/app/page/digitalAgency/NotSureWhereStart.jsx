import { ArrowRight } from "lucide-react";
import React from "react";
import Button from "../../../components/Button";

export default function NotSureWhereStart() {
  return (
    <section className="Container relative overflow-hidden bg-gradient-to-br from-[#0a2a2a] via-[#0d3535] to-[#051a1a]">
      <div className="relative px-4 sm:px-6 text-center">
        {/* Indicator */}
        <div className="mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center gap-2.5">
          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-primary" />
          <span className="text-[11px] sm:text-xs font-medium tracking-widest text-gray-400">
            NOT SURE WHERE TO START?
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 sm:mb-7 text-3xl sm:text-4xl md:text-5xl lg:text-[65px]  leading-tight">
          <span className="text-gray-400">It's Time </span>
          <span className=" text-primary">To Work</span>
          <br className="hidden sm:block" />
          <span className="text-primary">Differently</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-8 sm:mb-9 lg:mb-10 text-sm sm:text-base text-gray-500 px-4 sm:px-0">
          We offer a full range of digital services designed to help brands grow
          and thrive online.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button title="Get Started Now" />
        </div>
      </div>
    </section>
  );
}

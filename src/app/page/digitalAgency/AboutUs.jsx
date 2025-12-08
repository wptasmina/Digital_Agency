import React from "react";
import A1 from "../../../assets/digitalAgency/about/A1.png";
import Button from "../../../components/Button";
import Abater1 from "../../../assets/digitalAgency/about/Abater1.png";
import Abater2 from "../../../assets/digitalAgency/about/Abater2.png";
import Abater3 from "../../../assets/digitalAgency/about/Abater3.png";

const avatars = [Abater1, Abater2, Abater3];

export default function AboutUs() {
  return (
    <div
      className="Container"
      style={{
        backgroundColor: "rgba(250, 250, 250, 1)",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center  gap-8 lg:gap-11">
        <div className="w-full lg:w-auto order-2 lg:order-1">
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-[30px] mb-6 lg:mb-8">
            <span className="text-5xl sm:text-6xl lg:text-[76px] font-bold">
              17
            </span>
            <span className="text-sm sm:text-base inline-block -rotate-90 origin-bottom-left ml-4 sm:ml-6 lg:ml-[30px] -mb-4 sm:-mb-6 lg:-mb-[30px] whitespace-nowrap">
              Years of working experience
            </span>
          </div>
          <div className="w-full sm:w-auto">
            <div className="flex items-center space-x-[11px]">
              <div className="flex -space-x-4">
                {avatars.map((src, index) => (
                  <img
                    key={index}
                    className={`w-[50px] h-[50px] rounded-full border-2 border-white object-cover 
                        ${
                          index === 2 ? "z-30" : index === 1 ? "z-20" : "z-10"
                        }`}
                    src={src}
                    alt={`Client Avatar ${index + 1}`}
                  />
                ))}
                <div className="w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg z-50">
                  35K+
                </div>
              </div>
              <div className="text-left leading-tight text-gray-800">
                <p className="text-base sm:text-lg lg:text-xl font-semibold">
                  More then 35K
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-semibold">
                  clients reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[350px] lg:w-[416px] h-[400px] sm:h-[450px] lg:h-[530px] order-1 lg:order-2">
          <img className="w-full h-full" src={A1} alt="About us image" />
        </div>
        <div className="w-full lg:w-[504px] order-3">
          <div className="flex items-center gap-2.5 mb-6 lg:mb-[30px]">
            <span className="w-[11px] h-[11px] bg-primary "></span>
            <span className="text-[13px]">About Us</span>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl lg:text-[40px] mb-6 lg:mb-10">
              Our Story Begins
              <span className="font-medium">
                
                with Vision, And Grows Through Collaboration
              </span>
            </p>
            <p className="text-sm sm:text-base mb-8 lg:mb-[50px]">
              We are a forward-thinking digital agency passionate about
              transforming ideas into impactful experiences. Our team works
              together to build powerful brands, engaging websites, and
              data-driven marketing solutions.
            </p>
            <Button title="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
}

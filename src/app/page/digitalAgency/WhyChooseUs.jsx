import React from "react";
import Button from "../../../components/Button";
import WHY from "../../../assets/digitalAgency/image/WhyChooseUs/img.png";

export default function WhyChooseUs() {
  return (
    <section className="Container">
      <div className="">
        <div className="mb-10 sm:mb-12 lg:mb-[60px]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-[11px] h-[11px] bg-primary rounded-full" />
              <span className="text-[13px] text-slate-800 uppercase">
                Why Choose us
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4">
              <h2 className=" mt-6 sm:mt-8 lg:mt-[30px] text-2xl sm:text-3xl lg:text-[40px] text-slate-800 leading-tight">
                <span className="font-light">More Than an Agency — </span>
                <span className="font-medium">We&apos;re</span>
                <br className=" hidden lg:block" />
                <span className="font-medium">Your Growth Partner.</span>
              </h2>
              <div className="w-full sm:w-auto">
                <Button title="Let's Talk " />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-[75px] ">
          <div className=" relative flex flex-col sm:flex-row w-full lg:w-auto order-2 lg:order-1">
            <div className="bg-primary w-full sm:w-[320px] lg:w-[369px] h-auto sm:h-[220px] lg:h-[250px] py-8 sm:py-12 lg:py-[70px] px-6 sm:px-8 lg:px-10 relative z-10 sm:-mr-[100px] lg:-mr-[150px] sm:-bottom-[120px] lg:-bottom-[168px] order-2 sm:order-1">
              <h2 className="text-xl sm:text-2xl lg:text-[24px] font-medium mb-6 sm:mb-7 lg:mb-9 text-gray-800">
                Creative Design
              </h2>
              <p className="text-gray-600">
                We aim to empower businesses with knowledge that drives growth,
                inspires creativity in a fast-paced digital world.
              </p>
            </div>
            <div className="w-full sm:w-[500px] lg:w-[636px] h-[300px] sm:h-[400px] lg:h-[464px] order-1 sm:order-2">
              <img className="w-full h-full" src={WHY} alt="Why Choose Us" />
            </div>
          </div>
          <div className=" text-xl sm:text-2xl md:text-3xl lg:text-[40px] space-y-4 sm:space-y-6 lg:space-y-9 text-gray-600 w-full lg:w-auto order-1 lg:order-2">
            <p>Tips & Tutorials</p>
            <p>Latest Insights</p>
            <p className="text-gray-800 font-medium">Creative Design</p>
            <p>Development</p>
            <p>Expert Opinions</p>
            <p>Perspective</p>
            <p>Social Media</p>
          </div>
        </div>
      </div>
    </section>
  );
}

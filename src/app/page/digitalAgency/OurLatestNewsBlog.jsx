import React from "react";
import Button from "../../../components/Button";
import BlogSection from "../../../components/BlogPost";

export default function OurLatestNewsBlog() {
  return (
    <section className="Container bg-[#FAFAFA]">
      <div className="">
        <div className="mb-10 sm:mb-12 lg:mb-[60px]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-[11px] h-[11px] bg-primary rounded-full" />
              <span className="text-[13px] text-slate-800 uppercase">
                our latest news & blog
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4">
              <h2 className="mt-6 sm:mt-8 lg:mt-[30px] text-2xl sm:text-3xl lg:text-[40px] text-slate-800 leading-tight">
                <span className="font-light">Explore the Latest in </span>{" "}
                <span className="font-medium">Design,</span>
                <br className=" hidden lg:block" />
                <span className="font-medium"> Tech & Strategy</span>
              </h2>
              <div className="w-full sm:w-auto">
                <Button title="View More" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <BlogSection />
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Button from "../../../components/Button";
import YourGrowYourPlanCard from "../../../components/business-strategy/YourGrowYourPlanCard";
import TopHeading from "../../../components/business-strategy/Top_Heading";


const PricingPlans = [
  {
    planName: "Starter Plan",
    pricePerMonth: "$350",
    period: "Month",
    features: [
      "SEO Optimization",
      "Social Media Marketing (2 Platforms)",
      "Pay - Per - Click Ad (Basic)",
      "Email Marketing",
      "Data Recovery",
      "Server Maintenance",
      "24/7 Dedicated Support System",
    ],
  },
  {
    planName: "Platinum Plan",
    pricePerMonth: "$699",
    period: "Month",
    features: [
      "SEO Optimization",
      "Social Media Marketing (2 Platforms)",
      "Pay - Per - Click Ad (Basic)",
      "Email Marketing",
      "Data Recovery",
      "Server Maintenance",
      "24/7 Dedicated Support System",
    ],
  },
  {
    planName: "Premium Plan",
    pricePerMonth: "$999",
    period: "Month",
    features: [
      "SEO Optimization",
      "Social Media Marketing (2 Platforms)",
      "Pay - Per - Click Ad (Basic)",
      "Email Marketing",
      "Data Recovery",
      "Server Maintenance",
      "24/7 Dedicated Support System",
    ],
  },
];

export default function YourGrowYourPlan() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="Container bg-[#FAFAFA]">
      <div className="">
        {/* TOP HEADING */}
                <div className="max-w-6xl mx-auto ">
                  <div className="flex justify-between flex-col md:flex-row gap-6 md:pb-10 pb-6">
                    <TopHeading 
                      title="YOUR GROW, YOUR PLAN"
                      heading="Creative Solution For Every Budget"
                      highlight={
                        <> Every <br/> Budget </>
                      }      
                      />
                <div className="flex  items-end">
                  <Button title="View More" />
                </div>
              </div>
              </div>
        {/* <div className="">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-[11px] h-[11px] bg-primary rounded-full" />
              <span className="text-[13px] text-slate-800 uppercase">
                YOUR GROW, YOUR PLAN
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4">
              <h2 className=" mt-6 sm:mt-8 lg:mt-[30px] text-2xl sm:text-3xl lg:text-[40px] text-slate-800 leading-tight">
                <span className="font-light">Creative Solution </span>{" "}
                <span className="font-medium">Every</span>
                <br className=" hidden lg:block" />
                <span className="font-medium">Budget</span>
              </h2>
              <div className="w-full sm:w-auto">
                <Button title="View More" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex items-center justify-center sm:justify-end gap-4 mt-6 sm:mt-8 lg:mt-[30px]">
          <span
            className={`text-sm font-medium transition-colors ${
              !isYearly ? "text-slate-800" : "text-slate-400"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-12 h-6 sm:w-14 sm:h-7 rounded-full bg-white border border-primary transition-colors duration-300"
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full shadow-sm transition-transform duration-300 flex items-center justify-center ${
                isYearly ? "translate-x-6 sm:translate-x-8" : "translate-x-1"
              }`}
            >
              <ChevronRight
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-300 ${
                  isYearly ? "rotate-0" : "rotate-180"
                }`}
              />
            </span>
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              isYearly ? "text-slate-800" : "text-slate-400"
            }`}
          >
            Yearly
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-10 sm:mt-12 lg:mt-[60px]">
          {PricingPlans?.map((plan) => (
            <YourGrowYourPlanCard key={plan.planName} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

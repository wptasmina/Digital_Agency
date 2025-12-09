import Button from "../Button";
import serviceIntorImage from "../../assets/business-strategy/service-intro.png";
import Servicse1 from "../../assets/icons/our-service/service1.png"
import Servicse2 from "../../assets/icons/our-service/service4.png"
import Servicse3 from "../../assets/icons/our-service/service9.png"
import Servicse4 from "../../assets/icons/our-service/service7.png"
import Servicse5 from "../../assets/icons/our-service/service8.png"
import leftArrow from "../../assets/icons/our-service/left-arrow.png";
import upArrow from "../../assets/icons/our-service/up-arrow.png";
import TopHeading from "./Top_Heading";



export default function ServiceIntro() {
  const services = [
    {
      title: "Human Resource",
      desc: "Build stronger teams through smart recruitment, talent development, and retention strategies.",
      icon: Servicse1,
      active: false,
    },
    {
      title: "Business Strategy",
      desc: "Build a clear roadmap for growth with data-driven strategies tailored to your goals.",
      icon: Servicse2,
      active: true,
    },
    {
      title: "Financial Consulting",
      desc: "Optimize financial performance with expert budgeting, forecasting, and investment advice.",
      icon: Servicse3,
    },
    {
      title: "Startup Consulting",
      desc: "From idea validation to funding strategy — we help startups grow smart and fast.",
      icon: Servicse4,
    },
    {
      title: "Digital Transformation",
      desc: "Integrate modern technology to enhance business performance and customer engagement.",
      icon: Servicse5,
    },
  ];

  return (
   <section className="bg-[#fafafa] pb-20 Container overflow-hidden">   {/* add relative here */}

      {/* Top Heading */}
        <div className="max-w-6xl mx-auto ">
          <div className="flex justify-between flex-col md:flex-row gap-6 md:pb-10 pb-6">
            <TopHeading 
              title="OUR SERVICES"
              heading={<> Empowering Businesses <br/> Through </>}
              highlight={
                <> Insight and Innovation </>
              }      
              />
        <div className="flex  items-end">
          <Button title="Read More" />
        </div>
      </div>
      </div>

    {/* card list and image */}
  <div className="max-w-6xl mx-auto pr-8 grid grid-cols-1 md:grid-cols-2 gap-10 border border-dashed border-[#e3e3e3] ">
       {/* LEFT SIDE LIST */}
     <div className=" border border-transparent border-r-[#e3e3e3] border-dashed ">
      {/* LEFT SIDE */}
       <div className="">
        {services.map((item, idx) => (
          <div
            key={idx}
            className={`bg-[#fafafa] py-10 pr-8 flex items-start gap-4 transition cursor-pointer group border border-transparent border-b-[#e3e3e3] border-dashed last:border-none `}
          >
              {/* IMAGE  Icon */}
        <div className=" pl-6">
           <img 
          src={item.icon} 
          className="w-10 h-10 object-contain" 
          alt={item.title}
        />
        </div>
              {/* Title + Desc */}
            <div className="flex-1">
              <h3 className={`text-3xl font-semibold ${
                      item.active ? "text-[#C4EE18]" : "text-[#19324D]"
                    } group-hover:text-[#C4EE18]`} >
                    {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>

        <span className="text-xl relative group">
         {/* Default Image */}
          <img
            src={item.active ? leftArrow : upArrow} 
            className="w-6 h-6 transition-opacity duration-200 
                      opacity-100 group-hover:opacity-0"
            alt="Default Arrow"
              />

        {/* Hover Image */}
          <img
            src={leftArrow}
            className="w-6 h-6 transition-opacity duration-200 
                      absolute top-0 left-0 opacity-0 group-hover:opacity-100"
            alt="Hover Arrow"
          />
        </span>

        </div>
        ))}
      </div>
     </div>

      {/* RIGHT SIDE */}
      <div className="bg-[#fafafa] p-4 flex flex-col md:mt-10">
        <img
          src={serviceIntorImage}
          alt="Business Strategy"
          className="w-full h-[550px] object-cover"
        />

        <p className="text-gray-600 mt-4 text-sm leading-relaxed">
          Our strategy consultants help you define a clear vision and develop 
          actionable plans that drive measurable results. We analyze your business 
          model and identify growth opportunities.
        </p>

        <div className="mt-5">
            <Button title=" Explore More" />
        </div>

        {/* Indicator dot */}
        <div className="mt-6">
          <span className="block w-3 h-3 bg-[#C4EE18 ] rounded-full"></span>
        </div>
      </div>
    </div>
   </section>
  );
}

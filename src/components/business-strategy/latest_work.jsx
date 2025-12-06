import Top_Heading from "./Top_Heading";
import bgImg from "../../assets/service/bg-pattern.png";
import img1 from "../../assets/service/img-1.png";
import img2 from "../../assets/service/img-2.png";
import img3 from "../../assets/service/img-3.png";
import img4 from "../../assets/service/img-4.png";
import img5 from "../../assets/service/img-5.png";
import img6 from "../../assets/service/img-6.png";

const services = [
  {
    title: "Global Expansion Strategy",
    desc: "We analyze your logistics network, identify bottlenecks, and implement cost-effective solutions that enhance reliability and performance.",
    img: img1,
  },
  {
    title: "Business Model Innovation",
    desc: "We analyze your logistics network, identify bottlenecks, and implement cost-effective solutions that enhance reliability and performance.",
    img: img4,
  },
  {
    title: "Sustainability & ESG",
    desc: "We analyze your logistics network, identify bottlenecks, and implement cost-effective solutions that enhance reliability and performance.",
    img: img2,
  },
  {
    title: "Change Management",
    desc: "We analyze your logistics network, identify bottlenecks, and implement cost-effective solutions that enhance reliability and performance.",
    img: img5,
  },
  {
    title: "Performance Improvement",
    desc: "We analyze your logistics network, identify bottlenecks, and implement cost-effective solutions that enhance reliability and performance.",
    img: img3,
  },
  {
    title: "Logistics Optimization",
    desc: "We analyze your logistics network, identify bottlenecks, and implement cost-effective solutions that enhance reliability and performance.",
    img: img6,
  },
];

export default function Latest_Work() {
  return (
    <section className=" bg-[#fafafa] pb-20">
      <div className="max-w-6xl mx-auto">
         <div className="relative">
        {/* Background Image */}
        <img
            src={bgImg}
            alt="Background image"
            className="absolute right-0 top-0 w-[300px] pointer-events-none select-none"
        />

        {/* TOP HEADING */}

        <div className="flex justify-between relative z-10 bg-[#fafafa]">
            <Top_Heading />
        </div>

        </div>


        <div className="grid md:grid-cols-2 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="border border-[#e3e3e3] border-dashed p-6 bg-[#fefff9] transition duration-300"
            >
           <div className="flex justify-center items-center gap-6">

            {/* IMAGE SECTION */}
            <div className="flex-1">
                <img
                src={service.img}
                alt={service.title}
                className="w-full object-cover block items-center"
                />
            </div>

            {/* TEXT SECTION */}
            <div className="flex-1"> 
                <h3 className="text-2xl font-medium mb-2 text-gray-900">
                {service.title}
                </h3>

                <p className="text-gray-600 font-normal text-sm leading-relaxed">
                {service.desc}
                </p>
            </div>
            </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

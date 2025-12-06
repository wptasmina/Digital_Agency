import Top_Heading from "./Top_Heading";
import bgImg from "../../assets/service/bg-pattern.png";
import img1 from "../../assets/service/img-1.png";
import img2 from "../../assets/service/img-2.png";
import img3 from "../../assets/service/img-3.png";
import img4 from "../../assets/service/img-4.png";
import img5 from "../../assets/service/img-5.png";
import img6 from "../../assets/service/img-6.png";
import Button from "../Button";

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
  <section className="bg-[#fafafa] pb-20">   {/* add relative here */}
  <div className="max-w-6xl mx-auto relative">

    {/* Background Image */}
    <img
      src={bgImg}
      alt="Background image"
      className="absolute right-20 top-10 w-[300px] h-72 z-10"
    />

    {/* TOP HEADING */}
    <div className="flex justify-between md:pb-10 pb-6">
      <Top_Heading />
      <div className="flex justify-between items-center">
        <Button title="View All Work" />
    </div>
    </div>

    {/* CARD GRID */}
    <div className="grid md:grid-cols-2 gap-6 mt-4">
      {services.map((service, index) => (
        <div key={index} className="border border-[#e3e3e3] border-dashed bg-[#fefff9] p-6">
          <div className="flex gap-6">

            <div className="flex-1">
              <img src={service.img} alt={service.title} className="w-full object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>

  );
}

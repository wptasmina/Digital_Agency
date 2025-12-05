import Button from "../Button";
import serviceIntorImage from "../../assets/business-strategy/service-intro.png";
import Servicse1 from "../../assets/icons/our-service/service1.png"
import Servicse2 from "../../assets/icons/our-service/service4.png"
import Servicse3 from "../../assets/icons/our-service/service9.png"
import Servicse4 from "../../assets/icons/our-service/service7.png"
import Servicse5 from "../../assets/icons/our-service/service8.png"


export default function ServiceIntro() {
  const services = [
    {
      title: "Human Resource",
      desc: "Build stronger teams through smart recruitment, talent development, and retention strategies.",
      icon: Servicse1,
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
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT SIDE */}
      <div className="space-y-8">
        {services.map((item, idx) => (
          <div
            key={idx}
            className={`border-b pb-6 flex items-start gap-4 transition cursor-pointer group`}
          >
            {/* <div className="text-3xl">{item.icon}</div>
             */}
              {/* IMAGE */}
    <img 
      src={item.icon} 
      className="w-10 h-10 object-contain" 
      alt={item.title}
    />


            <div className="flex-1">
              <h3
                className={`text-xl font-semibold ${
                  item.active ? "text-lime-500" : "text-gray-800"
                } group-hover:text-lime-500`}
              >
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>

            <span className="text-xl text-gray-400 group-hover:text-lime-500">
              →
            </span>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div>
        <img
          src={serviceIntorImage}
          alt="Business Strategy"
          className="w-full h-[645px] object-cover rounded-xl shadow"
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
    </section>
  );
}

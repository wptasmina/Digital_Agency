import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import serviceIcon from "../../assets/digitalAgency/icons/our-service/service4.png"

const OurMarketServicesCard = () => {
  
const services = [
  {
    id: 1,
    title: "Search Engine Optimization",
    desc: "Improve visibility and rankings organic traffic tailored to you",
    link: "Explore More",
    rotate: "-180deg", // rotate left card
    bg: "bg-[#f5f5f5]"
  },
  {
    id: 2,
    title: "Marketing Strategy & Consulting",
    desc: "Improve visibility and rankings organic traffic tailored to you",
    link: "Explore More",
    rotate: "0deg", // normal center
    bg: "bg-[#C4EE18]"
  },
  {
    id: 3,
    title: "Performance Marketing",
    desc: "Improve visibility and rankings organic traffic tailored to you",
    link: "Explore More",
    rotate: "-180deg", // rotate right card
    bg: "bg-[#f5f5f5]"
  },
];

  return (
<section className="py-16 w-full flex justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">

        {services.map((item, index) => (
          <div 
            key={item.id}
            className={`px-4 py-8 rounded-xl bg-white hover:shadow-md transition duration-300 text-center relative`}
          > 

        <div className="flex gap-6">
            <div  className={`w-20 h-40 rounded-full overflow-hidden flex justify-center items-start
              ${item.bg}`}>
                <img 
                src={serviceIcon} 
                alt="service Icon" 
                className="w-10 h-10 object-contain mt-4 p-2"
                />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center items-start">
                <h3 className="md:text-2xl text-lg font-normal text-left mb-2 text-[#19324D]">
                    {item.title}
                </h3>
                <p className="text-sm md:text-base text-left text-[#5F758C]">
                    {item.desc}
                </p>

                {/* Link */}
                <Link
                    href="#"
                    className={`mt-4 text-left font-semibold gap-2
                    ${index === 1 ? "text-primary" : "text-secondary hover:text-primary"} 
                    `}
                    >
                    <div className="flex gap-2 text-base font-semibold">
                        <p className="underline text-left">{item.link}</p> 
                        <BsArrowUpRight />
                    </div>
                </Link>
            </div>

        </div>
        </div>
        ))}

    </div>
    </section>
  );
};

export default OurMarketServicesCard;
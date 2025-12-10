


// const ServiceIcon = ({ isHighlighted }) => (
//   <div
//     className={`
//       w-16 h-16 rounded-full flex items-center justify-center 
//       ${isHighlighted ? 'bg-white' : 'bg-gray-100'}
//     `}
//   >
//     {/* Placeholder for the Icon/SVG */}
//     <svg 
//       className={`w-8 h-8 ${isHighlighted ? 'text-lime-400' : 'text-blue-900'}`} 
//       fill="currentColor" 
//       viewBox="0 0 24 24"
//     >
//       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.17l-3.58-3.58L9.83 12 11 13.17l4.17-4.17L16.34 10.34 11 15.68V17.17z"/>
//     </svg>
//   </div>
// );

import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";


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
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">

        {services.map((item, index) => (
          <div 
            key={item.id}
            className={`p-4 rounded-xl bg-white hover:shadow-md transition duration-300 text-center relative`}
          >

            {/* Pill Shape with rotation */}
            {/* <div 
              className={`
                w-16 h-32 rounded-full mx-auto mb-6 
                flex items-center justify-center
              ${item.bg}
              `}
              style={{ transform: `rotate(${item.rotate})` }}
            >
              🔆 {/* Replace with icon image */}
            {/* </div> */} 

        <div className="flex gap-6">
            <div  className={`w-[80px] h-[200px] rounded-full flex items-center justify-center
              ${item.bg}`}>🔆</div>

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
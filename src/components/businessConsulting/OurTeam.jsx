import Button from "../Button";

import img1 from "../../assets/ourTeam/team1.png";
import img2 from "../../assets/ourTeam/team2.png";
import img3 from "../../assets/ourTeam/team3.png";
import img4 from "../../assets/ourTeam/team4.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import TopHeading from "../shear/TopHeading";


const teamService = [
  {
    title: "Danial Alvez",
    author: "Founder & CEO",
    desc: "We analyze your logistics network, identify bottlenecks...",
    img: img1,
    icon: [
    <FaFacebookF />,
    <FaInstagram />,
    <FaTwitter />,
    <FaLinkedinIn />,
    <FaWhatsapp />
  ]
  },
  {
    title: "Jenny Wilson",
    author: "Founder & CEO",
    desc: "We analyze your logistics network, identify bottlenecks...",
    img: img4,
    icon: [
    <FaFacebookF />,
    <FaInstagram />,
    <FaTwitter />,
    <FaLinkedinIn />,
    <FaWhatsapp />
  ]
  },
  {
    title: "Sustainability & ESG",
    author: "Founder & CEO",
    desc: "We analyze your logistics network, identify bottlenecks...",
    img: img2,
    icon: [
    <FaFacebookF />,
    <FaInstagram />,
    <FaTwitter />,
    <FaLinkedinIn />,
    <FaWhatsapp />
  ]
  },
  {
    title: "Change Management",
    author: "Founder & CEO",
    desc: "We analyze your logistics network, identify bottlenecks...",
    img: img3,
    icon: [
    <FaFacebookF />,
    <FaInstagram />,
    <FaTwitter />,
    <FaLinkedinIn />,
    <FaWhatsapp />
  ]
  },
];

export default function OurTeam() {
  return (
    <section className="Container bg-[#FAFAFA] overflow-hidden relative">
    
        {/* Top Heading */}
    <div className="max-w-6xl mx-auto">
        <div className="flex justify-between flex-col md:flex-row gap-6 md:pb-10 pb-6">
           <TopHeading 
             title="our Team"
             heading={<>Together, We Make  <br/> Great  </>}
             highlight={
               <>hings Happen</>
             }      
             />
          <div className="flex  items-end">
            <Button title="View More" />
          </div>
       </div>
    </div>
    
    {/* CARD GRID */}
    <div className="grid md:grid-cols-2 gap-6 mt-4 max-w-6xl mx-auto">
      {teamService.map((teamService, index) => (
        <div key={index} className="border border-[#e3e3e3] border-dashed bg-[#fefff9] p-6">
          <div className="flex md:flex-row flex-col gap-6">

            <div className="flex-1">
              <img src={teamService.img} alt={teamService.title} className="w-[200px] h-auto object-cover" />
            </div>

            <div className="flex-1 justify-between flex flex-col">
                <div>
                    <h2 className="md:text-2xl text-xl font-medium mb-2">{teamService.title}</h2>
                    <p className="text-sm font-light text-[#19324D] mb-2">{teamService.author}</p>
                    <p className="text-gray-600 text-base font-medium">{teamService.desc}</p>
                </div>

              <div className="flex items-center gap-3 mt-3 text-[#19324D] text-xl cursor-pointer">
                {teamService.icon?.map((icon, i) => (
                    <span key={i} className="hover:text-[#C4EE18] hover:font-bold transition">
                    {icon}
                    </span>
                ))}
                </div> 
            </div>
            

          </div>
        </div>
      ))}
    </div>

        </section>
  )
}

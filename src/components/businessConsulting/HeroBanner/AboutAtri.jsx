
import { Phone } from "lucide-react"; // icon library (optional)
import handsomeBusinessm from '../../../assets/businessConsulting/handsome-businessman.png'; 

import Button from "../../Button";
import heroIcon from '../../../assets/icons/heroIcons.png'
import TopHeading from "../../shear/TopHeading";


export default function AboutAtri() {
  return (
    <section className="w-full bg-[#f8f9fa] py-16">
      <div className="Container max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT IMAGE AREA */}
      <div className="relative flex justify-center items-center">
        <img
          src={handsomeBusinessm}
          alt="business-man"
          className="w-full  h-auto object-cover"
        />

        {/* Call Us Box */}
        <div className="absolute hidden top-1/2 right-0 bg-white shadow-md px-5 py-3 lg:flex items-center gap-3 rounded-mdbg-[#C4EE18]">
          <span className=" p-2 rounded-full">
            <Phone size={18} className="text-[#19324D]"/>
          </span>
          <div className="text-sm">
            <p className="font-semibold">Call Us</p>
            <p>012 4657 999</p>
          </div>
        </div>

        {/* Specialist Card */}
        <div className="absolute w-[248px] bottom-10 -left-10 hidden lg:block bg-white shadow-md px-4 py-4 rounded-md space-y-2">
          <h3 className="font-bold text-[#C4EE18] text-xl">150+</h3>
          <p className="text-base text-[#19324D] leading-5 font-medium">
            Specialist
          </p>
          <p className="font-normal text-[#B6BCC6]">
            A dedicated team of business experts at your service.
          </p>
        </div>
      </div>


        {/* RIGHT CONTENT AREA */}
      <div className="space-y-6">
          <div className="flex flex-col md:gap-5 md:pb-10 pb-6">
            <TopHeading 
              title="About atri"
              heading={<>Empowering Businesses <br/> Through </>}
              highlight={
                <> Insight and Innovation </>
              }      
            />

          {/* Two small line points */}
          <div className="flex md:flex-row flex-col md:gap-6 gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#C4EE18] p-2 rounded-full">
                <img 
                  src={heroIcon} 
                  alt="Background icon" 
                  className=""
                />
              </span>
              <p className="font-medium text-base text-[#19324D]">We're Global Brand Agency</p>
            </div>
            <p className="text-[#5F758C] text-base font-normal">
              We help businesses grow confidently in the digital world
            </p>
            
          </div>
          <p className="text-[#5F758C] text-base font-normal leading-relaxed max-w-[500px]"> We blend innovation with practical strategy to create meaningful solutions that adapt to your needs, simplify complexity, and unlock new opportunities for success. </p>
        </div>
          {/* Button */}
          <div className="flex  ">
            <Button title="Read More" />
          </div>

        </div>

      </div>
    </section>
  );
}

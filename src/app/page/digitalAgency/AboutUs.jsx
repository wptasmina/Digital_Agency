import A1 from "../../../assets/digitalAgency/about/A1.png";
import Abater1 from "../../../assets/digitalAgency/about/Abater1.png";
import Abater2 from "../../../assets/digitalAgency/about/Abater2.png";
import Abater3 from "../../../assets/digitalAgency/about/Abater3.png";
import FeaturesList from "../../../components/businessConsulting/Why-ChooseUs/features_List";
import heroIcon from '../../../assets/icons/heroIcons.png'

const avatars = [Abater1, Abater2, Abater3];

export default function AboutUs() {
  return (
    <div
      className="Container bg-white"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center  gap-8 lg:gap-11">
        <div className="w-full lg:w-auto order-2 lg:order-1">
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-[30px] mb-6 lg:mb-8">
            <span className="text-5xl sm:text-6xl lg:text-[76px] font-bold">
              17
            </span>
            <span className="text-sm sm:text-base inline-block -rotate-90 origin-bottom-left ml-4 sm:ml-6 lg:ml-[30px] -mb-4 sm:-mb-6 lg:-mb-[30px] whitespace-nowrap">
              Years of working experience
            </span>
          </div>
          <div className="w-full sm:w-auto">
            <div className="flex items-center space-x-[11px]">
              <div className="flex -space-x-4">
                {avatars.map((src, index) => (
                  <img
                    key={index}
                    className={`w-[50px] h-[50px] rounded-full border-2 border-white object-cover 
                        ${
                          index === 2 ? "z-30" : index === 1 ? "z-20" : "z-10"
                        }`}
                    src={src}
                    alt={`Client Avatar ${index + 1}`}
                  />
                ))}
                <div className="w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg z-50">
                  35K+
                </div>
              </div>
              <div className="text-left leading-tight text-gray-800">
                <p className="text-base sm:text-lg lg:text-xl font-semibold">
                  More then 35K
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-semibold">
                  clients reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[350px] lg:w-[416px] h-[400px] sm:h-[450px] lg:h-[530px] order-1 lg:order-2">
          <img className="w-full h-full" src={A1} alt="About us image" />
        </div>

        <div className="w-full lg:w-[504px] order-3">
            {/* Right Content *//* TOP HEADING */}
          <div className="flex flex-col space-y-4">
          <div className="flex gap-2 items-center">
            <span className="w-3 h-3 bg-[#C4EE18] rounded-full"></span>
            <h3>About Us</h3>
          </div>
                {/* About Us Text" */}
              <FeaturesList 
                title={
                  <> Our Story Begins with <br className="hidden md:block"/> Vision, And Grows Through Collaboration</>
                  }    
                  subtitle='We believe great marketing starts with understanding people. Our agency focuses on creating meaningful connections between brands and audiences through creativity, design, and authentic storytelling. Every idea we bring to life is driven by passion, purpose, and a desire to make brands truly unforgettable.'                          
          
                  subItem={[
                          "Fast documentation and a quick and easy service",
                          "Fast documentation and a quick and easy service",
                          "Customer service that is second-to-none",
                          "Customer service that is second-to-none"
                          ]}
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
            </div>                
        </div>

      </div>
    </div>
  );
}

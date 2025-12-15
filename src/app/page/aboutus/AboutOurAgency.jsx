import aboutImage from "../../../assets/about/aboutUs.jpg"
import FeaturesList from "../../../components/businessConsulting/Why-ChooseUs/featuresList";
import heroIcon from '../../../assets/icons/heroIcons.png'
import InfoPoint from "../../../components/shear/InfoPoint";

export default function AboutOurAgency() {
  return (
    <>
 <section className="py-16 Container bg-[#fefff9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center ">
          
          {/* Left Image */}
        <div>
             <img 
              src={aboutImage} 
              alt="Feature marketing work" 
              className="w-full"
            />
        </div>
                            
          {/* Right Content *//* TOP HEADING */}
        <div className="flex flex-col space-y-4">

             {/* About Us" */}
            <FeaturesList 
                badge="About Us"
                title={
                    <> Crafting Meaningful Connections <br className="hidden md:block"/> Through Creativity </>
                  }    
                subtitle='We believe great marketing starts with understanding people. Our agency focuses on creating meaningful connections between brands and audiences through creativity, design, and authentic storytelling. Every idea we bring to life is driven by passion, purpose, and a desire to make brands truly unforgettable.'

                subItem={[
                    "Fast documentation and a quick and easy service",
                    "Fast documentation and a quick and easy service",
                    "Customer service that is second-to-none",
                    "Customer service that is second-to-none"
                ]}
            />

            <InfoPoint
              icon={heroIcon}
              title={<>We&apos;re Global <br className="hidden md:block" /> Brand  Agency </>}
              description={<>We help businesses grow <br className="hidden md:block" />
                            confidently in the digital world</>}
            />

        </div>
    </div>
    </section>
    </>
  );
}

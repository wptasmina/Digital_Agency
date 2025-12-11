
import ButtonGray from '../shear/ButtonGray'
import Button from '../Button'
import FeatureBgImg from "../../assets/marketing/aboutUs.png"
import TopHeading from '../business-strategy/Top_Heading';
import FeaturesList from '../business-strategy/Why-ChooseUs/features_List';

export default function MarketAboutUs() {
  return (
    <>

     <section className="py-16 Container bg-[#fefff9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center ">
          
                  {/* Left Image */}
                <div>
                    <img 
                      src={FeatureBgImg} 
                      alt="Feature marketing work" 
                      className="w-full"
                    />
                </div>
                            
            {/* Right Content *//* TOP HEADING */}
            <div className="flex flex-col space-y-4">
                <ButtonGray title='our services' />

             {/* About Us" */}
            <FeaturesList 
                title={
                    <> Crafting Meaningful Connections <br className="hidden md:block"/> Through Creativity </>
                  }    
                subtitle='We believe great marketing starts with understanding people. Our agency focuses on creating meaningful connections between brands and audiences through creativity, design, and authentic storytelling. Every idea we bring to life is driven by passion, purpose, and a desire to make brands truly unforgettable.'

                subItem={[
                    "Fast documentation and a quick and easy service",
                    "Customer service that is second-to-none"
                ]}
            />


            <div className="flex mt-8">
              <Button title="Explore More" className="" />
          </div>

        </div>
    </div>
    </section>
  </>
  )
}

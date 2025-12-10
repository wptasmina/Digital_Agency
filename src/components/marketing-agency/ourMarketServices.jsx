import TopHeading from "../business-strategy/Top_Heading";
import Button from "../Button";
import ButtonGray from "../shear/ButtonGray";
import OurMarketServicesCard from "./OurMarketServicesCard";


export default function OurMarketServices() {
  return (
  <section className="bg-[#f5f5f5] md:py-14 py-8 px-6 md:px-20 overflow-hidden">

         {/* TOP HEADING */}
            <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
              <div>
                <ButtonGray title='our services' />
                <TopHeading 
                  heading=""
                  highlight={
                    <> Empowering Businesses <br className="hidden md:block"/> Through Insight and Innovation</>
                  }    
                  subtitle=''  
                  />
              </div>

             <div className="">
               <OurMarketServicesCard />
            </div>  

            <div className="flex items-center">
              <Button title="Discover More" className="" />
          </div>
          </div>
  </section>
  )
}

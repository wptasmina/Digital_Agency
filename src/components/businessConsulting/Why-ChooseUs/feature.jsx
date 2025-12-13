import Button from "../../Button";
import TopHeading from "../../shear/TopHeading";
import FeatureAboutUs from "./featureAboutUs";
import FeatureButtons from "./featureButtons";



export default function FeatureSection() {
  return (
    <section className="bg-[#fefff9] py-16 px-6 md:px-20 overflow-hidden">
     {/* TOP HEADING */}
        <div className="max-w-6xl mx-auto ">
          <div className="flex justify-between flex-col md:flex-row gap-6 md:pb-10 pb-6">
            <TopHeading 
              title="Why Choose Us"
              heading="More Than an Agency "
              highlight={
                <> — We&apos;re <br/> Your Growth Partner.</>
              }      
              />
        <div className="flex  items-center">
          <Button title="Read More" />
        </div>
      </div>
      </div>
      

        {/* Feature Button & Image  */}
    <div className="border border-[#e3e3e3] border-dashed">
      {/* Feature Tab Button  */}
      <FeatureButtons />
      {/* Feature AboutUs */}
        <FeatureAboutUs />
    </div>


    </section>
  )
}

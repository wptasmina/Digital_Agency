import Button from "../../Button";
import Top_Heading from "../Top_Heading";
import Feature_Buttons from "./feature_buttons";


export default function FeatureSection() {
  return (
    <section className="bg-[#fefff9] py-16 px-6 md:px-20 overflow-hidden">
     {/* TOP HEADING */}
      <div className="flex justify-between max-w-6xl mx-auto py-8">
          <Top_Heading />
    
        {/* Button  */}
        <div className="flex justify-between items-center">  
          <Button title="Call Us Now" />
        </div>                      
      </div>            
         
      <Feature_Buttons />
    
    </section>
  )
}

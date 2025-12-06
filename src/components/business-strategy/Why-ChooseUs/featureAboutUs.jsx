
import FeatureBgImg from "../../../assets/business-strategy/feature-bg.png";
import FeaturesList from "./features_List";

export default function FeatureAboutUs() {
  return (
    <section className="py-16 bg-[#fefff9]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center md:px-6 px-2">

        {/* Left Image */}
        <div>
          <img 
            src={FeatureBgImg} 
            alt="Team work" 
            className="w-full"
          />
        </div>

        {/* Right Content */}
       
          <FeaturesList />

      </div>
    </section>
  )
}

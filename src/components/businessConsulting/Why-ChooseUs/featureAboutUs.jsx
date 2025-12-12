
import FeatureBgImg from "../../../assets/businessConsulting/feature-bg.png";
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
        <FeaturesList 
            title="Features Coverage For Every Aspect Of Your Life"
            subtitle="Whether you are a business owner, a landlord, or a property owner, Falcon Insurance is able to help to protect you and your assets from the worst possible eventualities.And because the team at Falcon insurance are so experienced and are fully trained, they will find the right cover for you.They will never try to sell you an insurance policy you do not need or will not cover you and they will make sure your insurance policy covers you completely in the event of something happening.Giving you the peace of mind that you are being protected by a professional company that puts your best interests first."
            subItem={[
              "Flexible payment options",
              "24/7 Support Available",
              "Fast documentation process",
              "Friendly customer management",
              "Highly trusted service globally"
            ]}
          />


      </div>
    </section>
  )
}

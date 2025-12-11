import AboutBanner from "../../../components/aboutSection/aboutBanner";
import Our_Expertise from "../../../components/business-strategy/Expertise-Section/Our_Expertise";
import Testimonial from "../../../components/shear/Testimonial";
import AboutUs from "../digitalAgency/AboutUs";
import GlimpseOurExpertise from "../digitalAgency/GlimpseOurExpertise";
import MarqueeBanner from "../digitalAgency/MarqueeBanner";
import NotSureWhereStart from "../digitalAgency/NotSureWhereStart";
import WhyChooseUs from "../digitalAgency/WhyChooseUs";
// import Testimonial from "../../../components/shear/Testimonial";
import Faq from "./Faq";
// 

export default function AboutUsPage() {
  return (
    <div>
      <AboutBanner/>
      <AboutUs />
      <NotSureWhereStart />
      <WhyChooseUs />
      <GlimpseOurExpertise />
      <MarqueeBanner />
      {/* <YourGrowYourPlan /> */}
      <Testimonial bgColor="bg-white" />
      <Faq />
      {/* <OurService /> */}
    </div>
  );
}

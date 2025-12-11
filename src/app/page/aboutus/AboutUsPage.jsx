import AboutBanner from "../../../components/aboutSection/aboutBanner";
import Testimonial from "../../../components/shear/Testimonial";
import ContactUsPage from "../contact-us/contactUsPage";
import AboutUs from "../digitalAgency/AboutUs";
import GlimpseOurExpertise from "../digitalAgency/GlimpseOurExpertise";
import MarqueeBanner from "../digitalAgency/MarqueeBanner";
import NotSureWhereStart from "../digitalAgency/NotSureWhereStart";
import WhyChooseUs from "../digitalAgency/WhyChooseUs";
import Faq from "./Faq";


export default function AboutUsPage() {
  return (
    <div>
      <AboutBanner/>
      <AboutUs />
      <NotSureWhereStart />
      <WhyChooseUs />
      <GlimpseOurExpertise />
      <MarqueeBanner />
      <Testimonial bgColor="bg-white" />
      <Faq />
      {/* <OurService /> */}
      <ContactUsPage /> 
    </div>
  );
}

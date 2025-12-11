import OurServiceBanner from "../../../components/Our-Service-page/OurServiceBanner";
import Testimonial from "../../../components/shear/Testimonial";
import Faq from "../aboutus/Faq";
import AboutUs from "../digitalAgency/AboutUs";
import GlimpseOurExpertise from "../digitalAgency/GlimpseOurExpertise";
import MarqueeBanner from "../digitalAgency/MarqueeBanner";
import NotSureWhereStart from "../digitalAgency/NotSureWhereStart";
import OurService from "../digitalAgency/OurService";
import WhyChooseUs from "../digitalAgency/WhyChooseUs";


export default function OurServicePage() {
  return (
    <>
        <OurServiceBanner />
        <OurService />
        <NotSureWhereStart />
        <WhyChooseUs />
        <GlimpseOurExpertise />
        <Testimonial bgColor="bg-white" />
    </>
  )
}

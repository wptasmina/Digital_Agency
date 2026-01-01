/* 01_Digital Agency */

import HeroBanner from "../../../components/digitalAgency/HeroBanner";
import Service from "./Service";
import AboutUs from "./AboutUs";
import OurService from "./OurService";
// import LatestWork from "./LatestWork";
import DreamersAndDoers from "../../../components/shear/DreamersAndDoers";
import Highlight from "../../../components/shear/Highlight";
import NotSureWhereStart from "./NotSureWhereStart";
import GlimpseOurExpertise from "./GlimpseOurExpertise";
import WhyChooseUs from "./WhyChooseUs";
import MarqueeBanner from "./MarqueeBanner";
import YourGrowYourPlan from "./YourGrowYourPlan";
import Testimonial from "../../../components/shear/Testimonial";
import OurLatestNewsBlog from "./OurLatestNewsBlog";
import ContactUsPage from "../contact-us/ContactUsPage";
import LatestWork from './LatestWork';


export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <Service />
      {/* <DreamersAndDoers /> */}
       <DreamersAndDoers
          title={
          <>A Team of 
          <Highlight className="text-[#19324D]"> Dreamers and Doers,</Highlight>
          
          </>}
          subtitle={
          <>
          Designing for the Future.Blending Creativity with Strategy,<br className="hidden lg:block"/>To Shape Digital Success.
          </>
          }
          noBorder={true} 
        />
      <AboutUs />
      <OurService />
      <NotSureWhereStart />
      <GlimpseOurExpertise />
      <WhyChooseUs />
      <LatestWork />
      <MarqueeBanner />
      <YourGrowYourPlan />
      <Testimonial bgColor="bg-white" />
      <OurLatestNewsBlog />
      {/* <ContactUs />  */}
      <ContactUsPage /> 
    </div>
  );
}

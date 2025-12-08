import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Service from "./Service";
import DreamersAndDoers from "./DreamersAndDoers";
import AboutUs from "./AboutUs";
import OurService from "./OurService";
import NotSureWhereStart from "./NotSureWhereStart";
import GlimpseOurExpertise from "./GlimpseOurExpertise";
import WhyChooseUs from "./WhyChooseUs";
import LatestWork from "./LatestWork";
import MarqueeBanner from "./MarqueeBanner";
import YourGrowYourPlan from "./YourGrowYourPlan";
import Footer from "../../../components/Footer";
import OurLatestNewsBlog from "./OurLatestNewsBlog";
import Testimonial from "../../../components/shear/Testimonial";
import ContactUs from "../../../components/shear/ContactUs";

export default function DigitalAgency() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Service />
      <DreamersAndDoers />
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
      <ContactUs />
      <Footer />
    </div>
  );
}

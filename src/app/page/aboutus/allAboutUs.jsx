
import AboutBanner from '../../../components/aboutSection/aboutBanner'
import NotSureWhereStart from '../digitalAgency/NotSureWhereStart'
import WhyChooseUs from '../digitalAgency/WhyChooseUs'
import GlimpseOurExpertise from '../digitalAgency/GlimpseOurExpertise'
import MarqueeBanner from '../digitalAgency/MarqueeBanner'
import AboutOurAgency from './AboutOurAgency'
import Testimonial from '../../../components/shear/Testimonial'

import ContactUsPage from '../contact-us/contactUsPage'
import Faq from './Faq'
import OurService from '../digitalAgency/OurService'

export default function AllAboutUs() {
  return (
     <>
          <AboutBanner/>
          <AboutOurAgency />
          <NotSureWhereStart />
          <WhyChooseUs />
          <GlimpseOurExpertise />
          <MarqueeBanner />
          <Testimonial bgColor="bg-white" />
          <Faq />
          <OurService />
          <ContactUsPage /> 
        </>
  )
}

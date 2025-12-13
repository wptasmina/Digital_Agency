import OurServiceBanner from '../../../components/Our-Service-page/OurServiceBanner'
import Testimonial from '../../../components/shear/Testimonial'
import ContactUsPage from '../contact-us/contactUsPage'
import NotSureWhereStart from '../digitalAgency/NotSureWhereStart'
import OurService from '../digitalAgency/OurService'

export default function Services() {
  return (
    <>
      <OurServiceBanner />
      <OurService />
      <NotSureWhereStart />
      <Testimonial bgColor="bg-white" />
      <ContactUsPage /> 
    </>
  )
}

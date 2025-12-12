import OurNewsBlog from "../../../../components/blog/OurNewsBlog";
import BlogSection from "../../../../components/BlogSection";
import Testimonial from "../../../../components/shear/Testimonial";
import Faq from "../../aboutus/Faq";
import ContactUsPage from "../../contact-us/contactUsPage";
import NotSureWhereStart from "../../digitalAgency/NotSureWhereStart";
import OurLatestNewsBlog from "../../digitalAgency/OurLatestNewsBlog";


export default function Blog() {
  return (
    <div>
        <OurNewsBlog />
        <OurLatestNewsBlog />
        <BlogSection />

        {/* It'sTime To Work  */}
        <NotSureWhereStart />
      
        <Faq />
        <Testimonial bgColor="bg-white" />
        <ContactUsPage /> 
    </div>
  )
}

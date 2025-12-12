import BlogSection from "../../../components/BlogSection";
import PageHeader from "../../../components/shear/PageHeader/PageHeader";
import Testimonial from "../../../components/shear/Testimonial";
import Faq from "../aboutus/Faq";
import ContactUsPage from "../contact-us/contactUsPage";
import NotSureWhereStart from "../digitalAgency/NotSureWhereStart";
import blogBgImage from '../../../assets/digitalAgency/image/our-service/blog-banner.jpg';


export default function BlogPage() {
  return (
    <div>

        <PageHeader
            title="Our News & Blog"
            subtitle="We believe great marketing starts with understanding people. Our agency focuses on creating meaningful."
              currentPage={[
              { name: "Pages", path: "/pages" },
              { name: "Blog", path: "/blog" }
              ]}
            image={blogBgImage}
            />

        <BlogSection />

        {/* It'sTime To Work  */}
        <NotSureWhereStart />
      
        <Faq />
        <Testimonial bgColor="bg-white" />
        <ContactUsPage /> 
    </div>
  )
}

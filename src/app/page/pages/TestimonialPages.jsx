import PageHeader from "../../../components/shear/PageHeader/PageHeader";
import testimonialImage from '../../../assets/pages/testimonial/testimonialBg.jpg';
import OurTeamMember from "../../../components/AllPages/Testimonials/ourTeamMember";
import ContactUsPage from "../contact-us/contactUsPage";


export default function TestimonialPages() {
  return (
    <div>
        <PageHeader
          title="Our Testimonial"
          subtitle="We believe great marketing starts with understanding people. Our agency focuses on creating meaningful."
          currentPage={[
              { name: "Pages", path: "/pages" },
              { name: "Testimonial", path: "/testimonial" }
            ]}
          image={testimonialImage}
        />

        {/* Testimonial Top Banner 
        <TopBanner
          badge = "our Team Member"
          title={
            <> 
              <Highlight className="text-[#19324D] font-medium">Meet the People Who Make  <br className='hidden lg:block'/>It Happen
              </Highlight>
            </>
          }
          subtitle="You are a startup looking to launch with impact or an established brand aiming to scale, our packages are designed to deliver creativity"
          className = ""
        /> */}


      {/*  Our Team Member */}
      <OurTeamMember />

      <ContactUsPage /> 

    </div>
  )
}

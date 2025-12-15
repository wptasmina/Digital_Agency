import Highlight from "../../../components/shear/Highlight";
import PageHeader from "../../../components/shear/PageHeader/PageHeader";
import TopBanner from "../../../components/shear/TopBanner";
import ContactUsPage from "../contact-us/contactUsPage";
import teamBg from '../../../assets/pages/team/teamBg.jpg';
import TeamSection from "../../../components/AllPages/team/TeamSection";
import Testimonial from "../../../components/shear/Testimonial";
import NotSureWhereStart from "../digitalAgency/NotSureWhereStart";

export default function Team() {
  return (
     <div>
            <PageHeader
              title="Our Team"
              subtitle="We believe great marketing starts with understanding people. Our agency focuses on creating meaningful."
              currentPage={[
                  { name: "Pages", path: "/pages" },
                  { name: "Team", path: "/team" }
                ]}
              image={teamBg}
            />
    
            {/* Testimonial Top Banner  */}
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
            />
    
           <TeamSection />
          {/* It'sTime To Work  */}
          <NotSureWhereStart />
          <Testimonial bgColor="bg-white" />
          <ContactUsPage /> 
    
        </div>
  )
}

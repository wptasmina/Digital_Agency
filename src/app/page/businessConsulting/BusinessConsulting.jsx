// 02_Business Consulting

import LatestWork from '../../../components/businessConsulting/ourLatestWork'
import OurCard from '../../../components/businessConsulting/ourCard'
import ServiceIntro from '../../../components/businessConsulting/ServiceIntro'
import NotSureWhereStart from '../digitalAgency/NotSureWhereStart'

import bgImages from '../../../assets/businessConsulting/bgImage.png';
import YourGrowYourPlan from '../digitalAgency/YourGrowYourPlan'
import OurLatestNewsBlog from '../digitalAgency/OurLatestNewsBlog'
import Testimonial from '../../../components/shear/Testimonial'
import OurTeam from '../../../components/businessConsulting/OurTeam'
import MarqueeBanner from '../digitalAgency/MarqueeBanner'
import AboutAtri from '../../../components/businessConsulting/AboutAtri'
import ContactUsPage from '../contact-us/contactUsPage'
import OurExpertise from '../../../components/businessConsulting/Expertise-Section/OurExpertise'
import DreamersAndDoers from './../../../components/shear/DreamersAndDoers';
import Highlight from './../../../components/shear/Highlight';
import News from '../../../components/businessConsulting/news';
import FeatureSection from './../../../components/businessConsulting/Why-ChooseUs/feature';


export default function BusinessConsulting() {
  return (
    <>
      <OurCard />
      <DreamersAndDoers
        title="A Team of Dreamers and Doers, Designing for the Future."
        subtitle={
        <>
          Blending Creativity with Strategy, <br className="hidden lg:block font-normal" />
          <Highlight> To Shape Digital Success.</Highlight>
        </>
        }
        bgImage={bgImages}   // ← background image
        noBorder={true} 
      />

 {/* MAIN CONTENT GRID */}
      <AboutAtri/>
      <ServiceIntro />
      <LatestWork />
      <News />
      <OurExpertise />
      <FeatureSection />
      <NotSureWhereStart />
      <Testimonial /> 
      <YourGrowYourPlan />     
      <OurLatestNewsBlog />
      <OurTeam />
      <MarqueeBanner />
      <ContactUsPage /> 
    </>
  )
}

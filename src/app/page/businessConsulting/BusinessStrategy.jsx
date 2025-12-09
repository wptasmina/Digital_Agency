// 02_Business Consulting

import Our_Expertise from '../../../components/business-strategy/Expertise-Section/Our_Expertise'
import Latest_Work from '../../../components/business-strategy/ourLatestWork'
import NewsSection from '../../../components/business-strategy/news_Section'
import OurCard from '../../../components/business-strategy/ourCard'
import ServiceIntro from '../../../components/business-strategy/ServiceIntro'
import FeatureSection from '../../../components/business-strategy/Why-ChooseUs/feature'
import DreamersAndDoers from '../../../components/shear/DreamersAndDoers'
import NotSureWhereStart from '../digitalAgency/NotSureWhereStart'


import Highlight from '../../../components/shear/Highlight'
import bgImages from '../../../assets/business-strategy/bgImage.png';
import YourGrowYourPlan from '../digitalAgency/YourGrowYourPlan'
import OurLatestNewsBlog from '../digitalAgency/OurLatestNewsBlog'
import Testimonial from '../../../components/shear/Testimonial'
import OurTeam from '../../../components/business-strategy/OurTeam'
import MarqueeBanner from '../digitalAgency/MarqueeBanner'
import HeroSection from '../../../components/business-strategy/HeroBanner/heroSection'


export default function BusinessStrategy() {
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
      {/* <HeroSection />
      <ServiceIntro />
      <Latest_Work />
      <NewsSection />
      <Our_Expertise />
      <FeatureSection />
      <NotSureWhereStart />
      <Testimonial /> 
      <YourGrowYourPlan />     
      <OurLatestNewsBlog />
      <OurTeam />
     <MarqueeBanner /> */}
    </>
  )
}

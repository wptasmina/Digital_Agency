import Our_Expertise from '../../../components/business-strategy/Expertise-Section/Our_Expertise'
import Latest_Work from '../../../components/business-strategy/latest_work'
import NewsSection from '../../../components/business-strategy/news_Section'
import OurServices from '../../../components/business-strategy/ourServices'
import ServiceIntro from '../../../components/business-strategy/ServiceIntro'
import Testimonial from '../../../components/business-strategy/Swipers/testimonial'
import Time_Work from '../../../components/business-strategy/Time_Work'
import FeatureSection from '../../../components/business-strategy/Why-ChooseUs/feature'
import DreamersAndDoers from '../digitalAgency/DreamersAndDoers'

import bgImages from '../../../assets/business-strategy/bgImage.png';

export default function BusinessStrategy() {
  return (
    <>

      {/* <Services /> */}
      <OurServices />
      <DreamersAndDoers
      title="A Team of Dreamers and Doers, Designing for the Future."
      subtitle="Blending Creativity with Strategy, To Shape Digital Success."
      bgImage={bgImages}   // ← background image
      noBorder={true} 
      />


 {/* MAIN CONTENT GRID */}
      <ServiceIntro />
      <Latest_Work />
      <NewsSection />
      <Our_Expertise />
      <FeatureSection />
      <Time_Work />
      <Testimonial />      
    
    </>
  )
}

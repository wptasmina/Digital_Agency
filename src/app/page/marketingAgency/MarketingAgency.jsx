// _3 marketing-Agency 

import HeroBanner from "../../../components/marketing-agency/heroBanner";
import LatestWorkSlider from "../../../components/marketing-agency/LatestWorkSlider";
import MarketAboutUs from "../../../components/marketing-agency/marketAboutUs";
import OurMarketServices from "../../../components/marketing-agency/ourMarketServices";
import StatsSection from "../../../components/marketing-agency/StatsSection";


export default function MarketingAgency() {
  return (
    <>
      <HeroBanner/>
      <OurMarketServices />
      <MarketAboutUs />
      <StatsSection />
      <LatestWorkSlider />
      {/* <RotatImg /> */}
      {/* <FeatureSection /> */}
      {/* <ButtonGray /> */}
    </>
  )
}

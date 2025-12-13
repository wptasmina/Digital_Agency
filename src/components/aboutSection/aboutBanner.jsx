import aboutImage from '../../assets/digitalAgency/about/banner.jpg';
import PageHeader from '../shear/PageHeader/PageHeader';


export default function AboutBanner() {

  return (

    <div>
      {/* (common) component grid class*/}
          <PageHeader 
            title="About Us" 
            subtitle="We believe great marketing starts with understanding people. Our agency focuses on creating meaningful." 
            currentPage={[
                { name: "About Us", path: "/about-us" }
            ]}
            image={aboutImage}
          /> 
      </div>
  )
}

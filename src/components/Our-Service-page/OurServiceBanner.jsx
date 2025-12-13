import serviceBgImage from '../../assets/digitalAgency/image/our-service/service-banner.jpg';
import PageHeader from "../shear/PageHeader/PageHeader";


export default function OurServiceBanner() {

  return (
    <PageHeader
      title="Our Services"
      subtitle="We're a full-service digital marketing agency helping brands adapt, evolve, and thrive."
      currentPage={[
                { name: "Services", path: "/services" }
            ]}
      image={serviceBgImage}
    />
  )
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import serviceBgImage from '../../assets/digitalAgency/image/our-service/service-banner.jpg';
import PageHeader from "../shear/PageHeader/PageHeader";


export default function OurServiceBanner() {
    const [isYearly, setIsYearly] = useState(true);
    const navigate = useNavigate();
    
    const goHome = () => {
        navigate("/");
      };
    

  return (
    <PageHeader
      title="Our Services"
      subtitle="We're a full-service digital marketing agency helping brands adapt, evolve, and thrive."
      currentPage="Services"
      image={serviceBgImage}
    />
  )
}

import { FaPhone } from "react-icons/fa6";

import PageHeader from "./PageHeader/PageHeader";
import { Outlet, useLocation } from "react-router-dom";
import contactImage from '../../assets/digitalAgency/about/contact.jpeg';
import ContactUsPage from "../../app/page/contact-us/contactUsPage";


export default function ContactUs() {
  const location = useLocation();

  const isContactPage = location.pathname === "/contact-us";

  return (
    <div>
      {isContactPage && (
        <>
          <PageHeader
            title="Contact Us"
            subtitle="We believe great marketing starts with understanding people. Our agency focuses on creating meaningful."
            currentPage="Contact Us"
            image={contactImage}
          />
          <ContactUsPage />
        </>
      )}

      <Outlet />
      
    </div>
  );
}

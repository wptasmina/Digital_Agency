import pricingBgImage from '../../assets/digitalAgency/image/our-service/pricingBg.jpg';
import NotSureWhereStart from '../../app/page/digitalAgency/NotSureWhereStart';
import PricingCardList from './PricingCardList';
import Highlight from '../shear/Highlight';
import Faq from '../../app/page/aboutus/Faq';
import ContactUsPage from '../../app/page/contact-us/contactUsPage';
import Testimonial from '../shear/Testimonial';
import PageHeader from '../shear/PageHeader/PageHeader';
import TopBanner from '../shear/TopBanner';


const plans = [
  {
    planName: "Starter Plan",
    pricePerMonth: "$350",
    period: "Month",
    features: [
      "SEO Optimization",
      "Social Media Marketing (2 Platforms)",
      "Pay - Per - Click Ad (Basic)",
      "Email Marketing",
      "Data Recovery",
      "Server Maintenance",
      "24/7 Dedicated Support System",
    ],
  },
  {
    planName: "Platinum Plan",
    pricePerMonth: "$699",
    period: "Month",
    features: [
      "SEO Optimization",
      "Social Media Marketing (2 Platforms)",
      "Pay - Per - Click Ad (Basic)",
      "Email Marketing",
      "Data Recovery",
      "Server Maintenance",
      "24/7 Dedicated Support System",
    ],
  },
  {
    planName: "Premium Plan",
    pricePerMonth: "$999",
    period: "Month",
    features: [
      "SEO Optimization",
      "Social Media Marketing (2 Platforms)",
      "Pay - Per - Click Ad (Basic)",
      "Email Marketing",
      "Data Recovery",
      "Server Maintenance",
      "24/7 Dedicated Support System",
    ],
  },
  {
    planName: "Premium Plan",
    pricePerMonth: "$2699",
    period: "Year",
    features: [
      "SEO Optimization",
      "Social Media Marketing (2 Platforms)",
      "Pay - Per - Click Ad (Basic)",
      "Email Marketing",
      "Data Recovery",
      "Server Maintenance",
      "24/7 Dedicated Support System",
    ],
  },
  {
    planName: "Premium Plan",
    pricePerMonth: "$3699",
    period: "Year",
    features: [
      "SEO Optimization",
      "Social Media Marketing (2 Platforms)",
      "Pay - Per - Click Ad (Basic)",
      "Email Marketing",
      "Data Recovery",
      "Server Maintenance",
      "24/7 Dedicated Support System",
    ],
  },
  {
    planName: "Premium Plan",
    pricePerMonth: "$4999",
    period: "Year",
    features: [
      "SEO Optimization",
      "Social Media Marketing (2 Platforms)",
      "Pay - Per - Click Ad (Basic)",
      "Email Marketing",
      "Data Recovery",
      "Server Maintenance",
      "24/7 Dedicated Support System",
    ],
  },
];


export default function PricingSection() {
  return (
    <div>
      <PageHeader
           title="Our Pricing Plan"
           subtitle="We're a full-service digital marketing agency helping brands adapt, evolve, and thrive."
           currentPage="Pricing"
           image={pricingBgImage}
         />

          {/* PRICING  */}
          <TopBanner
            badge = "YOUR GROW, YOUR PLAN"
            title={
              <>Creative Solution For 
              <Highlight className="text-slate-800 font-medium">Every Budget
              </Highlight></>
            }
            subtitle="You are a startup looking to launch with impact or an established brand aiming to scale, our packages are designed to deliver creativity"
            className = ""
          />

          {/* Pricing Cards List ⬇ */}
           <div className="Container py-10 ">
            <PricingCardList plans={plans} />
          </div>

          {/* It'sTime To Work  */}
          <NotSureWhereStart />

          <Faq />
          <Testimonial bgColor="bg-white" />
          <ContactUsPage /> 
    </div>
  )
}

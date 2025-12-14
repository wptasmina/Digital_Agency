import Faq from '../aboutUs/Faq'
import faqBgImage from '../../../assets/pages/faq/faqBanner.jpg';
import PageHeader from '../../../components/shear/PageHeader/PageHeader';


export default function FAQPage() {
  return (
    <div>
        <PageHeader
            title="Frequently Ask Question"
            subtitle="Our FAQ section is designed to answer the most common questions our users have. Whether you&apos;re exploring our services, need support, or want to learn more about how Atri works, you&apos;ll find clear and helpful information here."
            currentPage={[
                { name: "Pages", path: "/pages" },
                { name: "FAQ", path: "/faq" }
            ]}
            image={faqBgImage}
            />
      <Faq />
    </div>
  )
}

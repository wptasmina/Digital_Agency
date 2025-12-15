import PageHeader from "../../components/shear/PageHeader/PageHeader";
import TermsCondition from "../../components/shear/TermsConditions/TermsCondition";
import privacyBgImage from "../../assets/privacyPolicy/privacyBg.png"

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader
              title="Our Privacy Policy"
              subtitle="Please review our terms carefully before using our website and services."
              currentPage={[
                      { name: "Pages", path: "/pages" },
                      { name: "Privacy Policy", path: "/privacy-policy" },
                  ]}
                 image={privacyBgImage}
            />
    <TermsCondition title={`Our Privacy Policy`} />
    </>
  )
}

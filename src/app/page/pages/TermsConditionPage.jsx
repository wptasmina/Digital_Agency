
import PageHeader from '../../../components/shear/PageHeader/PageHeader'
import TermsCondition from '../../../components/shear/TermsConditions/TermsCondition'
import termsBgImage from "../../../assets/termsCondition/termsBg.jpg"

export default function TermsConditionPage() {
  return (
    <>
    <PageHeader
        title="Our Terms & Condition"
        subtitle="Please review our terms carefully before using our website and services."
        currentPage={[
                { name: "Pages", path: "/pages" },
                { name: "Terms & Condition", path: "/terms & condition" },
            ]}
           image={termsBgImage}
      />
      <TermsCondition title={`Our Privacy Policy`} />
    </>
  )
}

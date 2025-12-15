// import { Helmet } from "react-helmet";


export default function TermsCondition({title}) {
  const downloadPDF = () => {
    window.print();
  };

  return (
    <>
      {/* SEO */}
      {/* <Helmet>
        <title>Terms & Conditions | Digital Agency</title>
        <meta
          name="description"
          content="Read our Terms & Conditions to understand your rights and responsibilities."
        />
      </Helmet> */}

      {/* Header */}
      

      {/* Content */}
      <section className="Container bg-white">
        <div className="max-w-6xl mx-auto space-y-10 text-sm leading-relaxed text-[#5F758C] dark:text-slate-400">

          {/* Download */}
          {/* <div className="flex justify-end">
            <button
              onClick={downloadPDF}
              className="px-4 py-2 text-sm bg-primary text-[#19324D] font-medium rounded hover:opacity-90"
            >
              Download PDF
            </button>
          </div> */}


            {/* Title text  */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-[40px] font-medium text-[#19324D]">{title}</h2>

          <p className="text-base font-normal text-[#19324D] pb-6">
            Welcome to Atri. By accessing or using our website, you agree to comply with the following Terms & Conditions. Please read them carefully before using our services.By using Atri, you accept these Terms & Conditions and our Privacy Policy. If you do not agree, please discontinue using the website.
          </p>
          <p className="text-base font-normal text-[#19324D]">
            Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
          </p>
          <div>

          <h3 className="font-normal text-2xl text-[#19324D] tracking-[2%] mb-6">
            1. Use of the Website
          </h3>
          <p className="font-normal md:text-base text-xs text-[#19324D] tracking-[2%] pb-1">
            You agree to use the website for lawful purposes only and not engage
            in activities that may harm or disrupt our services.
          </p>

            <ul className="list-disc pl-5 space-y-2">
              <li className="font-normal md:text-base text-xs text-[#5F758C] tracking-[2%]">
                Violates applicable laws or regulations.
              </li>
              <li className="font-normal md:text-base text-xs text-[#5F758C] tracking-[2%]">
                Harms, disrupts, or interferes with the website&apos;s functionality.
              </li>
              <li className="font-normal md:text-base text-xs text-[#5F758C] tracking-[2%]">
                Attempts to gain unauthorized access to any part of the system.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-normal text-2xl text-[#19324D] tracking-[2%] mb-6">
              2. User Accounts (If Applicable)
            </h3>
            <p className="font-normal md:text-base text-xs text-[#19324D] tracking-[2%] pb-1">
              If you create an account on Atri, you are responsible for:
            </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="font-normal md:text-base text-xs text-[#5F758C] tracking-[2%]">
              Maintaining the confidentiality of your login details
            </li>
            <li className="font-normal md:text-base text-xs text-[#5F758C] tracking-[2%]">
              All activities that occur under your account
            </li>
            <li className="font-normal md:text-base text-xs text-[#5F758C] tracking-[2%]">
              Atri reserves the right to suspend or terminate accounts that violate our policies.
            </li>
          </ul>
          </div>

          <div>
            <h3 className="font-normal text-2xl text-[#19324D] tracking-[2%] mb-6">
               3. Intellectual Property
            </h3>
            <p className="font-normal md:text-base text-xs text-[#5F758C] tracking-[2%]">
              All content on Atri, including text, images, graphics, logos, and design, is owned by Atri or licensed to us. You may not copy, reproduce, modify, or distribute any content without written permission.
            </p>
          </div>

          <div>
            <h3 className="font-normal text-2xl text-[#19324D] tracking-[2%] mb-6">
              4. Modification of Terms
            </h3>
            <p className="font-normal md:text-base text-xs text-[#5F758C] tracking-[2%]">
             By accessing or using the Atri website, you agree to be bound by our Terms & Conditions. These terms outline the rules, responsibilities, and guidelines that govern your use of our platform. If you do not agree with any part of these terms, you should discontinue using the website immediately. Atri reserves the right to update or modify these terms at any time, and your continued use of the site will signify your acceptance of any changes.
            </p>
          </div>

          <div>
            <h3 className="font-normal text-2xl text-[#19324D] tracking-[2%] mb-6">
              5. Privacy
            </h3>
            <p className="font-normal md:text-base text-xs text-[#5F758C] tracking-[2%]">
              Your privacy matters to us. Atri collects only the information needed to improve your experience and deliver our services effectively. We do not share your data with third parties without your permission, except when required by law. By using our website, you agree to the way we collect and use your information as outlined in this Privacy Policy.
            </p>
          </div>

          <div>
            <h3 className="font-normal text-2xl text-[#19324D] tracking-[2%] mb-6">
              6. Governing Law
            </h3>
            <p className="font-normal md:text-base text-xs text-[#5F758C] tracking-[2%]">
              At Atri, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard the data you share with us while using our website. We only collect information that is necessary to provide a smooth and secure user experience. By accessing or using Atri, you consent to the practices described in this policy.
            </p>
          </div>

          <div>
            <h3 className="font-normal text-2xl text-[#19324D] tracking-[2%] mb-6">
              7. Contact Us
            </h3>
            <p className="font-normal md:text-base text-xs text-[#19324D] tracking-[2%] pb-1">
              For questions or concerns regarding these Terms & Conditions, please contact us at:
            </p>
            <p>Email:  <span className="text-primary font-medium">
                info@atridemo.com
              </span></p>
            <p>Phone:  <span className="text-primary font-medium">
                +121-951-2065
              </span></p>
          </div>

          <div>
            <p className="text-xs font-normal lg:text-base sm:text-xs text-[#19324D] tracking-[2%] pb-6">
            By using the Atri website, you agree to follow the Terms & Conditions that help keep our platform secure and reliable for everyone. These terms explain what you can expect from us and what we expect from you as a user. We may update these guidelines occasionally, and your continued use of the site means you accept those updates. If at any point you disagree with our terms, you should stop using the website.
          </p>
          <p className="text-xs font-normal lg:text-base sm:text-xs text-[#19324D] tracking-[2%]">
            Using the Atri website means you accept our Terms & Conditions. These terms guide how you interact with our platform and help ensure a safe, fair experience. If you do not agree with our terms, please stop using the website.
          </p>
          </div>
        </div>
      </section>
    </>
  );
}

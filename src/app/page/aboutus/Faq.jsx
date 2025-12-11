import { useState } from "react";
import Button from "../../../components/Button";
import A1 from "../../../assets/digitalAgency/icons/faq/Arrow1.png";
import A2 from "../../../assets/digitalAgency/icons/faq/Arrow2.png";

const faqs = [
  {
    question: "What makes your agency different from others?",
    answer:
      "You need to know about how we create, deliver, and measure success. Dive in and see why brands trust us to make marketing simple, smart, and effective.",
  },
  {
    question: "What industries or businesses do you specialize in?",
    answer:
      "We specialize in a wide range of industries including technology, healthcare, e-commerce, finance, and professional services. Our diverse experience allows us to bring fresh perspectives to any sector.",
  },
  {
    question: "Can I schedule consultation before starting a project?",
    answer:
      "We offer free initial consultations to understand your needs, discuss your goals, and determine how we can best help you achieve success.",
  },
  {
    question: "What marketing services do you offer?",
    answer:
      "We offer comprehensive marketing services including brand strategy, digital marketing, content creation, social media management, SEO, PPC advertising, and web development.",
  },
  {
    question: "How do you develop a marketing strategy for a new client?",
    answer:
      "We start with a thorough discovery phase to understand your business, target audience, and goals. Then we create a customized strategy that aligns with your objectives and budget.",
  },
  {
    question: "Do you handle both online and offline marketing?",
    answer:
      "Yes, we provide integrated marketing solutions that cover both digital and traditional channels to ensure maximum reach and impact for your brand.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="Container py-16">
      <div className="px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="">
            <div className="flex items-center gap-2 mb-7">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-[13px] text-slate-800 uppercase">
                Frequently Ask Question
              </span>
            </div>

            <h2 className="text-[2.5rem] text-slate-400 leading-tight mb-10">
              Answers to Common
              <br />
              Questions{" "}
              <span className="font-semibold text-slate-800">
                About Our
                <br />
                Services
              </span>
            </h2>

            <p className="text-slate-500 leading-relaxed mb-10">
              Have questions about how we work, our process, or what to expect?
              We've got you covered. This section answers the most common
              questions our clients ask — from project timelines and pricing to
              strategy and results — so you can feel confident before we begin
              your journey toward growth.
            </p>
            <Button title="Read More" />
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200  overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-10 px-[30px] text-left transition-colors cursor-pointer"
                >
                  <span className="font-medium text-slate-800">
                    {faq.question}
                  </span>
                  <img src={openIndex === index ? A2 : A1} alt="Arrow" />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-[30px] pb-10 text-slate-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import T1 from "../../assets/digitalAgency/icons/testimonial/T1.png";
import Abater1 from "../../assets/digitalAgency/icons/testimonial/Abater1.png";
import Abater2 from "../../assets/digitalAgency/icons/testimonial/Abater2.png";
import Abater3 from "../../assets/digitalAgency/icons/testimonial/Abater3.png";

const testimonials = [
  {
    quote:
      "Their team completely transformed our online presence. From design to development, everything was seamless and results-driven. We finally have a website that truly reflects our brand identity.",
    name: "James Carter",
    title: "CEO at NovaTech",
    avatar: Abater1,
  },
  {
    quote:
      "Working with this team was an absolute pleasure. They understood our vision from day one and delivered beyond our expectations. Highly recommend their services!",
    name: "Sarah Mitchell",
    title: "Founder at DesignHub",
    avatar: Abater2,
  },
  {
    quote:
      "The attention to detail and commitment to excellence is unmatched. Our conversion rates have increased by 150% since launching the new website.",
    name: "Michael Chen",
    title: "CTO at StartupX",
    avatar: Abater3,
  },
];

export default function Testimonial({ bgColor }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="Container"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {/* Decorative lime element at top center */}
      <div className="flex justify-center mb-6 sm:mb-8 lg:mb-[35px]">
        <img src={T1} alt="Customer Review" />
      </div>

      <div className="max-w-4xl mx-auto relative px-4 sm:px-6">
        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 sm:left-4 lg:left-0 -translate-x-0 sm:-translate-x-4 lg:-translate-x-16 w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px] z-10  top-1/2 -translate-y-1/2  rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-400 hover:border-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 sm:right-4 lg:right-0 translate-x-0 sm:translate-x-4 lg:translate-x-16 w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px] cursor-pointer z-10  top-1/2 -translate-y-1/2  rounded-full bg-primary flex items-center justify-center text-slate-800 hover:bg-primary transition-colors"
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Testimonial content */}
        <div className="text-center px-4 sm:px-8 lg:px-20">
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] mb-8 sm:mb-10 lg:mb-12 text-slate-800 font-medium leading-relaxed">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Author info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <img
              src={currentTestimonial.avatar || "/placeholder.svg"}
              alt={currentTestimonial.name}
              className="w-14 h-14 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div className="text-center sm:text-left">
              <p className="text-slate-800 font-semibold text-lg sm:text-[20px] mb-1 sm:mb-2 lg:mb-5">
                {currentTestimonial.name}
              </p>
              <p className="text-slate-500 text-xs sm:text-sm">
                {currentTestimonial.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import quoteImg from "../../../assets/testimonials/icons/quote.png";
import iconImg from "../../../assets/testimonials/icons/icon.png";
import Highlight from "../../shear/Highlight";
import TopBanner from "../../shear/TopBanner";
import Button from "../../Button";

const testimonials = [
  {
    text: `Their team completely transformed our online presence. 
    From design to development, everything was seamless and results-driven.
    We finally have a website that truly reflects our brand identity.`,
    name: "James Carter",
    role: "CEO at NovaTech",
  },
  {
    text: `Their team completely transformed our online presence. 
    From design to development, everything was seamless and results-driven.
    We finally have a website that truly reflects our brand identity.`,
    name: "James Carter",
    role: "CEO at NovaTech",
  },
  {
    text: `Their team completely transformed our online presence. 
    From design to development, everything was seamless and results-driven.
    We finally have a website that truly reflects our brand identity.`,
    name: "James Carter",
    role: "CEO at NovaTech",
  },
  {
    text: `Their team completely transformed our online presence. 
    From design to development, everything was seamless and results-driven.
    We finally have a website that truly reflects our brand identity.`,
    name: "James Carter",
    role: "CEO at NovaTech",
  },
  {
    text: `Their team completely transformed our online presence. 
    From design to development, everything was seamless and results-driven.
    We finally have a website that truly reflects our brand identity.`,
    name: "James Carter",
    role: "CEO at NovaTech",
  },
  {
    text: `Their team completely transformed our online presence. 
    From design to development, everything was seamless and results-driven.
    We finally have a website that truly reflects our brand identity.`,
    name: "James Carter",
    role: "CEO at NovaTech",
  },
  {
    text: `Their team completely transformed our online presence. 
    From design to development, everything was seamless and results-driven.
    We finally have a website that truly reflects our brand identity.`,
    name: "James Carter",
    role: "CEO at NovaTech",
  },
  {
    text: `Their team completely transformed our online presence. 
    From design to development, everything was seamless and results-driven.
    We finally have a website that truly reflects our brand identity.`,
    name: "James Carter",
    role: "CEO at NovaTech",
  },
];

export default function OurTeamMember() {
  return (
    <section className="Container py-20 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">

        {/* Top Banner */}
        <TopBanner
          badge="OUR TEAM MEMBER"
          title={
            <Highlight className="text-[#19324D] font-medium">
              Meet the People Who Make <br className="hidden lg:block" /> It Happen
            </Highlight>
          }
          subtitle="You are a startup looking to launch with impact or an established brand aiming to scale, our packages are designed to deliver creativity"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pt-15 pt-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              {/* Quote Image */}
              <img
                src={quoteImg}
                alt="quote icon"
                className="absolute top-5 left-5 w-8 h-8 opacity-70"
              />

              {/* Title Text */}
              <p className="text-[#5F758C] text-sm md:text-base leading-relaxed pt-[30px]">
                {item.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-[40px]">
                <img
                  src={iconImg}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-[#19324D]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#5F758C]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

       <div className="flex items-center justify-center pt-[50px]">
          <Button title="View More" />
      </div>

      </div>
    </section>
  );
}


const services = [
  "Development",
  "Business Consulting",
  "Website Design",
  "Brand Strategy",
  "Social Media",
  "Digital Marketing",
  "Social Media Marketing",
  "UI/UX Design",
  "Photography",
];

export default function MarqueeBanner({ transparent = false }) {
  return (
    <section className="overflow-hidden">
      <div
        className={`w-full py-10 sm:py-12 lg:py-[76px] overflow-hidden ${
          transparent ? "bg-transparent" : "bg-[#002827]"
        }`}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center">
              <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold px-4 sm:px-5 lg:px-6">
                {service}
              </span>
              <span className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
                ✳
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

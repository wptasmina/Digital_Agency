import Button from "../../../components/Button";

const stats = [
  {
    id: 1,
    title: "Website Launched",
    value: 28,
    suffix: "+",
    description: "Helping brands make their mark online",
  },
  {
    id: 2,
    title: "Total Project",
    value: 1300,
    suffix: "K",
    description: "Helping brands make their mark online",
  },
  {
    id: 3,
    title: "Client Satisfaction",
    value: 98,
    suffix: "%",
    description: "Helping brands make their mark online",
  },
  {
    id: 4,
    title: "Year Running",
    value: 1,
    suffix: "+",
    description: "Helping brands make their mark online",
  },
];

export default function GlimpseOurExpertise() {
  return (
    <section className="Container">
      <div className="">
        <div className="mb-10 sm:mb-12 lg:mb-[60px]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-[11px] h-[11px] bg-primary rounded-full" />
              <span className="text-[13px] text-slate-800 uppercase">
                A Glimpse of Our Expertise
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4">
              <h2 className="mt-6 sm:mt-8 lg:mt-[30px] text-2xl sm:text-3xl lg:text-[40px] text-slate-800 leading-tight">
                <span className="font-light">Transforming Businesses </span>{" "}
                <span className="font-medium">With</span>
                <br className="hidden lg:block" />
                <span className="font-medium">Powerful Digital Solutions</span>
              </h2>
              <div className="w-full sm:w-auto">
                <Button title="Call Us Now" />
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6">
          {stats?.map((service) => (
            <div key={service.title} className="">
              <div className="flex items-center gap-1">
                <p className="text-4xl sm:text-5xl lg:text-6xl text-[#19324D] font-bold mb-2">
                  {service.value}
                </p>
                <p className="text-2xl sm:text-3xl lg:text-4xl text-[#19324D] font-bold">
                  {service.suffix}
                </p>
              </div>
              <h6 className=" text-lg sm:text-xl text-[#19324D] font-medium mb-3">
                {service.title}
              </h6>
              <p className="text-sm sm:text-base text-[#5F758C]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

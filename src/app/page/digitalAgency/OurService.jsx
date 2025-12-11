import {
  ArrowRight,
  ArrowUpRight,
  Paintbrush,
  Share2,
  Globe,
  LineChart,
  Layout,
  Camera,
} from "lucide-react";

import S1 from "../../../assets/digitalAgency/icons/our-service/Service1.png";
import S2 from "../../../assets/digitalAgency/icons/our-service/Service2.png";
import S3 from "../../../assets/digitalAgency/icons/our-service/Service3.png";
import S4 from "../../../assets/digitalAgency/icons/our-service/Service4.png";
import S5 from "../../../assets/digitalAgency/icons/our-service/Service5.png";
import S6 from "../../../assets/digitalAgency/icons/our-service/Service6.png";
import ArtisticDesignersModernWorkspace from "../../../assets/digitalAgency/image/our-service/ArtisticDesignersModernWorkspace.png";
import Button from "../../../components/Button";

const services = [
  {
    id: 1,
    icon: S1,
    title: "Branding",
    description:
      "From brand identity and logo design to web development, digital marketing, and content creation",
    hasImage: true,
  },
  {
    id: 2,
    icon: S2,
    title: "Social Media",
    description:
      "From brand identity and logo design to web development, digital marketing, and content creation",
  },
  {
    id: 3,
    icon: S3,
    title: "Web Development",
    description:
      "From brand identity and logo design to web development, digital marketing, and content creation",
  },
  {
    id: 4,
    icon: S4,
    title: "Digital Strategy",
    description:
      "From brand identity and logo design to web development, digital marketing, and content creation",
  },
  {
    id: 5,
    icon: S5,
    title: "UI / UX Design",
    description:
      "From brand identity and logo design to web development, digital marketing, and content creation",
  },
  {
    id: 6,
    icon: S6,
    title: "Photography",
    description:
      "From brand identity and logo design to web development, digital marketing, and content creation",
  },
  {
    id: 7,
    icon: S5,
    title: "SEO",
    description:
      "From brand identity and logo design to web development, digital marketing, and content creation",
  },
  {
    id: 7,
    icon: S6,
    title: "Media Marketing",
    description:
      "From brand identity and logo design to web development, digital marketing, and content creation",
  },
];

export default function OurService() {
  return (
    <section className="Container overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 sm:mb-6 lg:mb-2.5">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-[11px] h-[11px] bg-primary rounded-full" />
              <span className="text-[13px] text-slate-800 uppercase">
                OUR SERVICES
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4">
              <h2 className="mt-6 sm:mt-8 lg:mt-[30px] text-2xl sm:text-3xl lg:text-[40px] text-slate-800 leading-tight">
                <span className="font-light">Transforming Businesses </span>
                <span className="font-medium">With</span>
                <br className=" hidden lg:block" />
                <span className="font-medium">Powerful Digital Solutions</span>
              </h2>
              <div className="w-full sm:w-auto">
                <Button title="View More" />
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="pt-8 sm:pt-10 lg:pt-[50px] pb-6 sm:pb-8 lg:pb-10 group border-b border-slate-200 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0">
                <div className="flex-1">
                  <div className="flex items-center gap-4 sm:gap-6 lg:gap-[34px] mb-8 sm:mb-10 lg:mb-[52px]">
                    <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] lg:w-[52px] lg:h-[52px] flex-shrink-0">
                      <img src={service?.icon} alt={service?.title} />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-[40px] font-medium text-slate-800">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-[35px]">
                    <p className="text-sm sm:text-base">
                      {service.description}
                    </p>
                    {service.hasImage && (
                      <div className="w-full sm:w-[120px] lg:w-[146px] h-[90px] sm:h-[95px] lg:h-[111px] flex-shrink-0">
                        <img
                          src={ArtisticDesignersModernWorkspace}
                          alt="Branding workspace"
                          className=" w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0 mt-2 sm:mt-0">
                  {service.hasImage ? (
                    <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#19324D]" />
                  ) : (
                    <ArrowUpRight className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#19324D]" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

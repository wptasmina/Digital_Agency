
import S1 from "../../../assets/digitalAgency/icons/service/S1.png";
import S2 from "../../../assets/digitalAgency/icons/service/S2.png";
import S3 from "../../../assets/digitalAgency/icons/service/S3.png";
import S4 from "../../../assets/digitalAgency/icons/service/S4.png";
import ServiceCard from "../../../components/shear/ServiceCard";


const serviceData = [
  {
    id: 1,
    icon: S1,
    title: "Full-Service Digital Solutions",
    description:
      "From branding to web design, development, and marketing of your digital presence.",
  },
  {
    id: 2,
    icon: S2,
    title: "Custom Web Development",
    description:
      "From branding to web design, development, and marketing of your digital presence.",
  },
  {
    id: 3,
    icon: S3,
    title: "Reliable Support & Maintenance",
    description:
      "From branding to web design, development, and marketing of your digital presence.",
  },
  {
    id: 4,
    icon: S4,
    title: "Data-Driven Strategy",
    description:
      "From branding to web design, development, and marketing  of your digital presence.",
  },
];

export default function Service() {
  return (
    <div
      className="Container"
      style={{
        backgroundColor: "rgba(245, 245, 245, 1)",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 place-items-center">
        {serviceData?.map((item) => (
          <ServiceCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
}

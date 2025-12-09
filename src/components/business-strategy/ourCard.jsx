import icons1 from "../../assets/icons/icons-1.png";
import icons2 from "../../assets/icons/icons-2.png";
import icons3 from "../../assets/icons/icons-3.png";
import icons4 from "../../assets/icons/icons-4.png";
import OurServiceCard from "./OurServiceCard";



const serviceData = [
  {
    id: 1,
    icon: icons1,
    title: "Innovation",
    description:
      "Our smart tools and expert insights help your business stay ahead in a rapidly changing world.",
  },
  {
    id: 2,
    icon: icons2,
    title: "Advantage",
    description:
      "Our smart tools and expert insights help your business stay ahead in a rapidly changing world.",
  },
  {
    id: 3,
    icon: icons3,
    title: "Growth",
    description:
      "Our smart tools and expert insights help your business stay ahead in a rapidly changing world.",
  },
  {
    id: 4,
    icon: icons4,
    title: "Perspective",
    description:
      "Our smart tools and expert insights help your business stay ahead in a rapidly changing world.",
  },
];

export default function OurCard() {
  return (
    <div
      className="Container bg-[#fafafa]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
        {serviceData?.map((item) => (
          <OurServiceCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
}

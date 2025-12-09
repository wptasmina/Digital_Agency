import Button from "../../../components/Button";
import T1 from "../../../assets/digitalAgency/image/LatestWork/T1.png";
import T2 from "../../../assets/digitalAgency/image/LatestWork/T2.png";
import T3 from "../../../assets/digitalAgency/image/LatestWork/T3.png";
import T4 from "../../../assets/digitalAgency/image/LatestWork/T4.png";
import T5 from "../../../assets/digitalAgency/image/LatestWork/T5.png";
import T6 from "../../../assets/digitalAgency/image/LatestWork/T6.png";
import LatestWorkCard from "../../../components/LatestWorkCard";



const LatestWorkData = [
  {
    id: 1,
    image: T1,
    title: "Innovation in Action",
    description:
      "Powering innovation with cutting-edge creativity, we transform platforms",
  },
  {
    id: 2,
    image: T2,
    title: "Showcase of Our Work",
    description:
      "We help you scale by offering a robust marketing and sales platform",
  },
  {
    id: 3,
    image: T3,
    title: "Featured Case Studies",
    description:
      "Platform innovation is delivering system availability and time-to-market",
  },
  {
    id: 4,
    image: T4,
    title: "Transforming Ideas Into Reality",
    description:
      "Discover what we are delivering with our commerce and loyalty platforms",
  },
  {
    id: 5,
    image: T5,
    title: "Our Portfolio",
    description:
      "Platform innovation is driving high-speed, instantly updated platforms",
  },
  {
    id: 6,
    image: T6,
    title: "Creative Highlights",
    description:
      "Platform innovation is offering a user-centric, unified platform",
  },
];

export default function LatestWork() {
  return (
    <section className="Container">
      <div className="">
        <div className=" mb-10 sm:mb-12 lg:mb-[60px]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-[11px] h-[11px] bg-primary rounded-full" />
              <span className="text-[13px] text-slate-800 uppercase">
                our latest work
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4">
              <h2 className="  mt-6 sm:mt-8 lg:mt-[30px] text-2xl sm:text-3xl lg:text-[40px] text-slate-800 leading-tight">
                <span className="font-light">Transforming Businesses </span>{" "}
                <span className="font-medium">With</span>
                <br className=" hidden lg:block" />
                <span className="font-medium">Powerful Digital Solutions</span>
              </h2>
              <div className="w-full sm:w-auto">
                <Button title="View All Work" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {LatestWorkData?.map((work) => (
            <LatestWorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

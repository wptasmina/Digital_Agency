
import Video from "../../../assets/digitalAgency/icons/Video.png";

export default function Banner() {
  return (
    <div className="py-[100px]">
      <div>
        <h1 className="text-secondary text-[65px] font-bold text-center">
          Powering Brands Through <br className=" hidden md:block" /> Smart
          <span className="text-primary"> Digital Solutions</span>
        </h1>
        <p className="my-10 text-center">
          We are a results-driven digital agency dedicated to helping brands
          grow in today&apos;s fast-changing world.
        </p>
        <div className="flex justify-center items-center gap-[27px]">
          <button className="flex items-center bg-[#C4EE18] font-bold py-2.5 px-4 rounded-tl-lg rounded-tr-[2px] rounded-b-[2px]">
            <span className="mr-2.5 font-medium">Discover More</span>
            {/* Arrow Icon */}
            <div className="w-6 h-6 bg-white text-[#C4EE18] rounded-[1px] flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </button>
          <div className="flex items-center gap-4">
            <img src={Video} alt="Video" />
            <h2 className="font-medium">How It’s Work</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

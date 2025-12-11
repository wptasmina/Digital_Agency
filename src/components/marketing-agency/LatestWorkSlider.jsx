import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import img1 from "../../assets/marketing/networking-team/img-1.jpg";
import img2 from "../../assets/marketing/networking-team/img-2.png";
import img3 from "../../assets/marketing/networking-team/img-3.png";

const sliderData = [
  {
    img: img1,
    title: "Analytics & Marketing Intelligence",
    category: "Marketing Strategy",
  },
  {
    img: img2,
    title: "Creative Branding",
    category: "Brand Identity",
  },
  {
    img: img3,
    title: "SEO Optimization",
    category: "SEO",
  },
];

const LatestWorkSlider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4">
      {/* Section Title */}
      <p className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 inline-block rounded">
        LATEST WORK
      </p>
      <h2 className="text-3xl font-bold mt-3 mb-8">
        Our Latest Work: Where Strategy Meets Success
      </h2>

      {/* Slider */}
      <Splide
        options={{
          perPage: 3,
          gap: "1.5rem",
          arrows: true,
          pagination: false,
          autoplay: true,
          interval: 3000,
          type: "loop",
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
        aria-label="Latest Work Slider"
      >
        {sliderData.map((item, index) => (
          <SplideSlide key={index}>
            <div className="relative group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover rounded-xl"
              />

              {/* Overlay Card */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-xl"></div>

              <div className="absolute bottom-5 left-5 text-white z-10">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm opacity-80">{item.category}</p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute bottom-5 right-5">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/40 transition rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">↗</span>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default LatestWorkSlider;

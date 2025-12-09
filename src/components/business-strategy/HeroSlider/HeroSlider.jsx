import Slider from "react-slick";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function HeroSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  const slides = [
    {
      img: "https://i.ibb.co/HPTHj8Z/business-man.png", // replace with your image
      title: "Empowering Businesses",
      highlight: "Through Insight and Innovation",
      desc: "We blend innovation with practical strategy to create meaningful solutions that adapt to your needs.",
      phone: "012 4657 999",
      about: "We're Global Brand Agency",
      about2: "We help businesses grow confidently in the digital world",
      stats: "150+ Specialist",
      statsDesc: "A dedicated team of business experts at your service."
    }
  ];

  return (
    <section className="bg-[#fbfbf6] py-12">
      <div className="max-w-7xl mx-auto overflow-hidden px-6">

        <Slider {...settings}>
          {slides.map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 items-center gap-12">

              {/* IMAGE */}
              <div className="relative flex justify-center">
                <img src={item.img} alt="hero" className="w-[420px] object-contain" />

                {/* Floating Contact Card */}
                <div className="absolute top-6 right-6 bg-white shadow-lg px-5 py-3 rounded-md flex items-center gap-3">
                  <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
                    <FaPhoneAlt size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Call Us</p>
                    <p className="font-medium">{item.phone}</p>
                  </div>
                </div>

                {/* Specialist Card */}
                <div className="absolute bottom-4 left-2 bg-white shadow px-5 py-4 rounded-md">
                  <p className="text-[#9acd32] font-bold text-lg">{item.stats}</p>
                  <p className="text-gray-500 text-sm">{item.statsDesc}</p>
                </div>
              </div>

              {/* CONTENT TEXT */}
              <div>
                <p className="uppercase text-sm tracking-wide font-semibold text-lime-500 mb-2">About Atri</p>
                <h2 className="text-4xl font-semibold text-gray-900 leading-snug">
                  {item.title} <br />
                  <span className="text-lime-500">{item.highlight}</span>
                </h2>

                <div className="flex items-center gap-3 mt-6 text-gray-600 text-sm border-l-2 pl-4 border-lime-500">
                  <p className="font-bold text-gray-700">{item.about}</p>
                  <span>|</span>
                  <p>{item.about2}</p>
                </div>

                <p className="mt-5 text-gray-500 leading-relaxed">{item.desc}</p>

                {/* Button */}
                <button className="mt-6 bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2">
                  Read More <IoIosArrowRoundForward size={22} />
                </button>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

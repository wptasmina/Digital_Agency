import { useState } from "react";
import Video from "../../assets/digitalAgency/icons/Video.png";

// import HeroBanner from "./HeroBanner";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ImageBanner from "./ImageBanner";
import Button from './../Button';
import CircleBlob from "../common/CircleBlob";
import DotBlob from "../common/DotBlob";

export default function HeroBanner() {
  const [openVideo, setOpenVideo] = useState(false);

  // Animation variants
  const imageVariants = {
    hiddenTop: { y: -200, opacity: 0 },
    hiddenBottom: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>-
      <section className="relative py-16 flex justify-center items-center overflow-hidden">
      
            {/* Background dots (CLICK SAFE) */}
            <div className="absolute inset-0 pointer-events-none 
              bg-[radial-gradient(#d1d5db_2px,transparent_1px)]
              [background-size:24px_24px] opacity-40 z-0" />
      
            {/* Decorative Blobs */}
            <CircleBlob top="68px" left="100px" />
            <DotBlob top="300px" left="212px" />
            <DotBlob top="309px" right="200px" />
            <CircleBlob bottom="2%" centered />
      
            {/* Social Icons */}
            <div className="absolute left-14 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20">
              <RiFacebookCircleLine className="text-[#19324D] textslate-400 hover:text-primary cursor-pointer transition-all duration-300 ease-in-out" />
              <FaTwitter className="text-[#19324D] hover:text-primary cursor-pointer transition-all duration-300 ease-in-out" />
              <FaInstagram className="text-[#19324D] hover:text-primary cursor-pointer transition-all duration-300 ease-in-out" />
              <FaLinkedinIn className="text-[#19324D] hover:text-primary cursor-pointer transition-all duration-300 ease-in-out" />
      
              <h6
                className="font-medium text-[#5F758C] text-sm md:text-base"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  letterSpacing: "0.3em",
                }}
              >
                Follow Us:
              </h6>
            </div>
      
            {/* Main Content */}
            <div className="container mx-auto px-5 relative z-10 text-center">
              <h1 className="text-secondary text-[24px] md:text-[48px] lg:text-[52px] 2xl:text-[65px]
                font-bold leading-[34px] md:leading-[62px] lg:leading-[78px]">
                Powering Brands Through <br className="hidden md:block" />
                Smart <span className="text-primary">Digital Solutions</span>
              </h1>
      
              <p className="mx-auto my-6 md:w-[480px] text-sm sm:text-base leading-[24px] text-[#5F758C]">
                We are a results-driven digital agency dedicated to helping
                brands grow in today&apos;s fast-changing world.
              </p>
      
              {/* Buttons */}
              <div className="flex justify-center md:gap-5 gap-4">
                {/* <Button title="Discover More" /> */}

                  {/* Discover More → Link */}
                <Link to="/about-us">
                  <Button title="Discover More" />
                </Link>
      
                <div
                  onClick={() => setOpenVideo(true)}
                  className="flex items-center md:gap-3 gap-1.5 cursor-pointer group"
                >
                  <img src={Video} alt="Video" className="md:w-5 md:h-5 w-4 h-4" />
                  <span className="font-medium md:text-base text-sm group-hover:text-primary transition-all duration-300 ease-in-out">
                    How It&apos;s Work
                  </span>
                </div>
              </div>
      
              {/* Video Modal */}
              {openVideo && (
                <div
                  className="fixed inset-0 md:items-start lg:items-start md:pt-36 lg:pt-36  bg-black/70 flex items-center justify-center z-50"
                  onClick={() => setOpenVideo(false)}
                >
                  <div
                    className="bg-white rounded-lg w-[90%] md:w-[80%] lg:w-[800px] p-4 relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setOpenVideo(false)}
                      className="absolute -top-3 -right-3 bg-black text-white w-8 h-8 rounded-full cursor-pointer"
                    >
                      ✕
                    </button>
      
                    {/* YouTube Video */}
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full rounded-md"
                        src="https://www.youtube.com/embed/vquNo3S5eYI"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
      
          {/* Image Frame */}
          <ImageBanner />

        </div>
      </section>
    </>
  );
}

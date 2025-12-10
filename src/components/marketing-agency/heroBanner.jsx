import bannerImg from '../../assets/marketing/networking-team/banner-1.png';
import bannerImg2 from '../../assets/marketing/networking-team/banner-2.jpg';
import bannerImg3 from '../../assets/marketing/networking-team/banner-3.jpg';

import cercleImg from '../../assets/marketing/networking-team/circle.png';
import Button from '../Button';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import RatingSection from '../shear/RatingSection';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

    {/* <div className='max-w-6xl mx-auto'> */}
          {/* Swiper Container */}
      <Swiper
        className="h-full"
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={0}
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[90vh]">

            {/* BG Image */}
            <img src={bannerImg} className="w-full h-full object-cover" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-[rgba(25,50,77,0)] to-[rgba(25,50,77,1)]"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-16 max-w-6xl mx-auto text-white z-20">

              <div className=''>
                <h2 className="text-[12px] bg-[#19324D] p-4 tracking-widest font-semibold uppercase text-gray-300 rounded-lg  w-1/4">
                Stand Out. Stay Ahead
              </h2>
              </div>

              <h1 className="mt-3 text-4xl lg:text-6xl font-bold leading-tight">
                Crafting Growth for <br /> the Bold and the Brave
              </h1>

              <p className="mt-6 text-gray-300 max-w-xl">
                We help businesses thrive in the digital era through smart marketing
                solutions that deliver measurable impact.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Button title="Discover More" />
                <Button title="Contact Us" className="bg-transparent text-white border border-[#19324D]" />
              </div>

              {/* Play Button */}
              <div className="absolute right-20 top-1/2 -translate-y-1/2">
                <div className="relative">
                  <img src={cercleImg} alt="circle" />
                  <button className="absolute -right-10 top-3/4 w-14 h-14 rounded-full bg-white text-[#C4EE18] text-xl flex items-center justify-center">
                    ▶
                  </button>
                </div>
              </div>

              {/* Bottom row */}
              <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between text-white">

                {/* Social Icons */}
                <div className="flex items-center gap-4 text-lg opacity-75">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaWhatsapp />
                </div>

                {/* Rating */}
                <RatingSection />
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[90vh]">

            {/* BG Image */}
            <img src={bannerImg2} className="w-full h-full object-cover" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-[rgba(25,50,77,0)] to-[rgba(25,50,77,1)]"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-16 max-w-6xl mx-auto text-white z-20">

              <div className=''>
                <h2 className="text-[12px] bg-[#19324D] p-4 tracking-widest font-semibold uppercase text-gray-300 rounded-lg  w-1/4">
                Stand Out. Stay Ahead
              </h2>
              </div>

              <h1 className="mt-3 text-4xl lg:text-6xl font-bold leading-tight">
                Crafting Growth for <br /> the Bold and the Brave
              </h1>

              <p className="mt-6 text-gray-300 max-w-xl">
                We help businesses thrive in the digital era through smart marketing
                solutions that deliver measurable impact.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Button title="Discover More" />
                <Button title="Contact Us" className="bg-transparent text-white border border-[#19324D]" />
              </div>

              {/* Play Button */}
              <div className="absolute right-20 top-1/2 -translate-y-1/2">
                <div className="relative">
                  <img src={cercleImg} alt="circle" />
                  <button className="absolute -right-10 top-3/4 w-14 h-14 rounded-full bg-white text-[#C4EE18] text-xl flex items-center justify-center">
                    ▶
                  </button>
                </div>
              </div>

              {/* Bottom row */}
              <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between text-white">

                {/* Social Icons */}
                <div className="flex items-center gap-4 text-lg opacity-75">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaWhatsapp />
                </div>

                {/* Rating */}
                <RatingSection />
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[90vh]">

            {/* BG Image */}
            <img src={bannerImg3} className="w-full h-full object-cover" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-[rgba(25,50,77,0)] to-[rgba(25,50,77,1)]"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-16 max-w-6xl mx-auto text-white z-20">

              <div className=''>
                <h2 className="text-[12px] bg-[#19324D] p-4 tracking-widest font-semibold uppercase text-gray-300 rounded-lg  w-1/4">
                Stand Out. Stay Ahead
              </h2>
              </div>

              <h1 className="mt-3 text-4xl lg:text-6xl font-bold leading-tight">
                Crafting Growth for <br /> the Bold and the Brave
              </h1>

              <p className="mt-6 text-gray-300 max-w-xl">
                We help businesses thrive in the digital era through smart marketing
                solutions that deliver measurable impact.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Button title="Discover More" />
                <Button title="Contact Us" className="bg-transparent text-white border border-[#19324D]" />
              </div>

              {/* Play Button */}
              <div className="absolute right-20 top-1/2 -translate-y-1/2">
                <div className="relative">
                  <img src={cercleImg} alt="circle" />
                  <button className="absolute -right-10 top-3/4 w-14 h-14 rounded-full bg-white text-[#C4EE18] text-xl flex items-center justify-center">
                    ▶
                  </button>
                </div>
              </div>

              {/* Bottom row */}
              <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between text-white">

                {/* Social Icons */}
                <div className="flex items-center gap-4 text-lg opacity-75">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaWhatsapp />
                </div>

                {/* Rating */}
                <RatingSection />
              </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    {/* </div> */}
    </section>
  );
}

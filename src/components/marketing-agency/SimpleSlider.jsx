import '../../index.css'
import bannerImg from '../../assets/marketing/networking-team/banner-1.png';
import bannerImg2 from '../../assets/marketing/networking-team/banner-2.jpg';
import bannerImg3 from '../../assets/marketing/networking-team/banner-3.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import Button from '../Button';
import HeroBanner from './heroBanner';


export default function SimpleSlider() {
  return (
    <Swiper
        className="h-full my-swiper"
        spaceBetween={50}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={true}
        slidesPerView={1}
    >
    <SwiperSlide className="relative h-full">
      <HeroBanner/>
    </SwiperSlide>


  </Swiper>

);
}

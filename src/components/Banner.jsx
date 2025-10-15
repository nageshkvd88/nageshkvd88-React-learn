import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {  Pagination} from 'swiper/modules';

const Banner = () => {
  return (
    <>
    <Swiper pagination={{ clickable: true}} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src='./images/banner/banner-1.webp' /></SwiperSlide>
        <SwiperSlide><img src='./images/banner/banner.webp' /></SwiperSlide>
        <SwiperSlide><img src='./images/banner/banner-2.webp' /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner 
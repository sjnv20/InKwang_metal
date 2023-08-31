import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_home.scss'
import "swiper/swiper.scss";

import h_img1 from '../images/inkwang_img/inkwang_1.jpeg';
import h_img2 from '../images/inkwang_img/inkwang_img01.jpeg';
import h_img3 from '../images/inkwang_img/inkwang_img07.jpeg';
import h_img4 from '../images/inkwang_img/inkwang_img02.jpeg';

import swiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  swiperCore.use([Autoplay]);
  return (
    <div className='content'>
      <Swiper
        className='swiper-container'
        effect={'slide'}
        loop={true}
        speed={1200}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={h_img1} alt="h_img1"/>
          <div className='img_text'>
            <h1>인산염피막, 알카리착색 전문<br/><span><span id='sp'>|</span> 인광금속</span></h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={h_img2} alt="h_img2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={h_img3} alt="h_img3"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={h_img4} alt="h_img4"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
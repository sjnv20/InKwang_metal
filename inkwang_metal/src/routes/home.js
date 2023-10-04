import React from 'react';
import '../scss/_home_header.scss'
import '../scss/_footer.scss'
import '../scss/_home.scss'
import "swiper/swiper.scss";

import Logo from '../images/inkwang_logo.png';
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
    <header className="h_navigation">
        <div className="h_logo">
          <img src={Logo} alt="logo"/>
          <a href='/'>인광금속</a>
        </div>
        <nav className="h_nav">
          <a href="/">HOME</a>
          <a href="/company">회사소개</a>
          <a href="/product">제품소개</a>
          <a href="/gallery">Gallery</a>
          <div className="dot"></div>
        </nav>
    </header>

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
        style={{height:"100vh"}}
      >
        <SwiperSlide>
          <div className='swiper_img1'>
            <img className='img1' src={h_img1} alt="h_img1"/>
            <div className='img_text'>
              <h1>인산염피막, 알카리착색 전문<br/><span><span id='sp'>|</span> 인광금속</span></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper_img1'>
          <img src={h_img2} alt="h_img2"/>
          <div className='img_text1'>
              <h1>높은 기술력으로 만드는<br/><span> 인광금속</span> 의 미래</h1>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper_img1'>
          <img src={h_img3} alt="h_img3"/>
          <div className='img_text2'>
              <h1>뛰어난 기술로 더 나은 <br/>미래를 만들어가는 <span>인광금속</span></h1>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper_img1'>
          <img src={h_img4} alt="h_img4"/>
          <div className='img_text3'>
              <h1>파트너와 함께 성장하는 <span>인광금속</span>이<br/> 미래를 창조합니다</h1>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
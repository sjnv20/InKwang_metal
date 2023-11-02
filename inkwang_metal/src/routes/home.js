import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_home.scss'
import "swiper/swiper.scss";
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

import { Parallax, Pagination, EffectFade } from 'swiper';
import swiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const Home = () => {
  
  swiperCore.use([Autoplay, Pagination, EffectFade ]);
  return (
  <div className='content_h'>
      <Swiper
        className='swiper-container'
        effect={'fade'}
        loop={true}
        speed={1200}
        modules={[Parallax, Autoplay, Pagination, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        fadeEffect={{crossFade: true}}
        pagination={{ clickable: true }}
        style={{height:"100vh"}}
      >
        <SwiperSlide>
          <div className='swiper_img1 slide-1'></div>
          <pre class="slider-sub-title t_1">인산염피막, 알카리착색 전문<br/><span>인광금속</span></pre>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper_img1 slide-2'></div>
          <pre class="slider-sub-title t_2">높은 기술력으로 만드는<br/><span>인광금속</span>의 미래</pre>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper_img1 slide-3'></div>
          <pre class="slider-sub-title t_3">뛰어난 기술로 더 나은 <br/>미래를 만들어가는 <span>인광금속</span></pre>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper_img1 slide-4'></div>
          <div id='t_4'>
            <pre class="slider-sub-title t_4">파트너와 함께 성장하는<br/><span>인광금속</span>이<br/>미래를 창조합니다</pre>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
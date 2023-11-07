import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_gallery.scss'

import Back from '../images/back.jpg'
import pm_1 from '../images/pm1.jpeg'
import pm_2 from '../images/pm2.jpeg'
import pm_3 from '../images/pm3.jpeg'
import pm_4 from '../images/pm4.jpeg'
import rc_1 from '../images/rc1.jpeg'
import rc_2 from '../images/rc2.jpeg'
import rc_3 from '../images/rc3.jpeg'
import inKwang from '../images/inkwang_img/inkwang_door.jpeg';
import ik from '../images/inkwang_img/inkwang_img07.jpeg'
import ik1 from '../images/inkwang_img/inkwang_img06.jpeg'
import ik2 from '../images/inkwang_img/inkwang_img02.jpeg'
import ik3 from '../images/inkwang_img/inkwang_img03.jpeg'
import ik4 from '../images/inkwang_img/inkwang_5.jpeg'
import ik5 from '../images/inkwang_img/inkwang_img01.jpeg'
import ik6 from '../images/inkwang_img/inkwang_1.jpeg'
import Logo from '../images/ik_logo_s.png';


import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";



const Gallery = () => {

  Fancybox.bind('[data-fancybox="gallery"]', {
    contentClick: "iterateZoom",
    Images: {
      Panzoom: {
        maxScale: 2,
      }
    }
  });

  return (
    <div className='content'>
      <div className='back_img'>
        <img src={Back} alt='#'/>
        <h3>Gallery</h3>
      </div>
      <div className='contact'>
        <div className='title'>
          <h2>회사 전경</h2>
        </div>
        <div className='factory'>
          <div id='logo_title'>
            <img id="logo_s" src={Logo} alt='#'/><h3>공장 전경</h3>
          </div>
          <div className='fac'>
            <a href='!#'
                data-fancybox="gallery"
                data-src={inKwang}
                data-caption="인광금속 전경">
                <img src={inKwang} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={ik5} data-caption="인광금속 내부" href='!#'>
                <img src={ik5} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={ik6} data-caption="인광금속 내부" href='!#'>
                <img src={ik6} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={ik2} data-caption="인광금속 내부" href='!#'>
                <img src={ik2} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={ik} data-caption="인광금속 내부" href='!#'>
                <img src={ik} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={ik3} data-caption="인광금속 내부" href='!#'>
                <img src={ik3} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={ik4} data-caption="인광금속 내부" href='!#'>
                <img src={ik4} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={ik1} data-caption="인광금속 내부" href='!#'>
                <img src={ik1} width="245" height="220" alt="#" />
              </a>
              
          </div>
        </div>
        <div className='title'>
          <h2>제품 사진</h2>
        </div>
        <div className='product_1'>
          <div id='logo_title'>
            <img id="logo_s" src={Logo} alt='#'/><h3>피막 제품</h3>
          </div>
          <div className='prod'>
            <a href='!#'
                data-fancybox="gallery"
                data-src={pm_1}
                data-caption="인산염 피막">
                <img src={pm_1} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={pm_2} data-caption="인산염 피막" href='!#'>
                <img src={pm_2} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={pm_3} data-caption="인산염 피막" href='!#'>
                <img src={pm_3} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={pm_4} data-caption="인산염 피막" href='!#'>
                <img src={pm_4} width="245" height="220" alt="#" />
              </a>
          </div>
        </div>
        <div className='product_2'>
          <div id='logo_title'>
            <img id="logo_s" src={Logo} alt='#'/><h3>착색 제품</h3>
          </div>
          <div className='prod'>
            <a href='!#'
                data-fancybox="gallery"
                data-src={rc_1}
                data-caption="알카리 착색">
                <img src={rc_1} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={rc_2} data-caption="알카리 착색" href='!#'>
                <img src={rc_2} width="245" height="220" alt="#" />
              </a>
              <a data-fancybox="gallery" data-src={rc_3} data-caption="알카리 착색" href='!#'>
                <img src={rc_3} width="245" height="220" alt="#" />
              </a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Gallery;
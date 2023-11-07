import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_gallery.scss'

import Back from '../images/back.jpg'


const Gallery = () => {
  return (
    <div className='content'>
      <div className='back_img'>
        <img src={Back} alt='#'/>
        <h3>Gallery</h3>
      </div>
      <div className='contact'>
        <div className='factory'>
          <h3>공장 전경</h3>
        </div>
        <div className='prod'>
          <h3>제품 사진</h3>
        </div>
      </div>
    </div>

  );
};

export default Gallery;
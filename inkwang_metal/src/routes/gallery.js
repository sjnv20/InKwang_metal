import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_page_ing.scss'

const Gallery = () => {
  return (
    <div className='page'>
      <div className='display'>
        <div className='container'>
          <h3>페이지 준비중</h3>
          <div id='spc'>[ Gallery ]</div>
          <div id='form'>
            현재 페이지 준비중입니다.<br/>
          </div>
          <div id='spc'></div>
          <a id='home_btn' href='/'>Home</a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
/* footer.js */
import React from 'react';
import "../plugins/themify-icons/themify-icons.css"
import Phone from '../images/icons8-phone-50.png'

const Footer = () => {
  return (
    <footer>
      <div className="f_logo">
       <a href='/'>인광금속</a>
       <div>
          <img src={Phone} alt="phone"/>
          <p id="tel">051.324.5051</p>
        </div>
      </div>
      <div className="content">
        <p> <b>Tel</b> &nbsp;: &nbsp;051-324-5051  &nbsp;&nbsp;|&nbsp;&nbsp;<b>E-mail</b> &nbsp;: &nbsp;cc707200@hanmail.net</p>
        <p> (47029) 부산광역시 사상구 감전천로 33 </p>
      </div>
      <p id="copyright">copyright © inkwangmetal. & sjnv20. All Rights Reserved.</p>
      
    </footer>
  );
};

export default Footer;
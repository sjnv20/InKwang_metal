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
        <p> <b>대표명</b> &nbsp;: &nbsp;이순수 & 최지연 &nbsp;&nbsp;|&nbsp;&nbsp;<b>사업자번호</b>&nbsp;: &nbsp;606-32-69680</p>
        <p> <b>Fax</b> &nbsp;: &nbsp;324 . 5053 &nbsp;&nbsp;|&nbsp;&nbsp;<b>E-mail</b> &nbsp;: &nbsp;cc707200@hanmail.net</p>
        <p> (46910) 부산광역시 사상구 낙동대로1338번길 68 </p>
      </div>
      <p id="copyright">copyright © inkwangmetal. & sjnv20. All Rights Reserved.</p>
      
    </footer>
  );
};

export default Footer;
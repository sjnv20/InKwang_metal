/* copyright.js */
import React from 'react';
import "../plugins/themify-icons/themify-icons.css"
import '../scss/_copyright.scss'

const Copy = () => {
  if (window.location.pathname === '/') return null;
  if (window.location.pathname === '/gallery') return null;
  return (
    <div>
      <div className="f">
        <p> <b>대표명</b> &nbsp;: &nbsp;이순수 & 최지연 &nbsp;&nbsp;|&nbsp;&nbsp;<b>사업자번호</b>&nbsp;: &nbsp;606-32-69680</p>
        <p> <b>Fax</b> &nbsp;: &nbsp;051 . 324 . 5053 &nbsp;&nbsp;|&nbsp;&nbsp;<b>E-mail</b> &nbsp;: &nbsp;cc707200@hanmail.net</p>
        <p> (46910) 부산광역시 사상구 낙동대로1338번길 68 </p><br/>
        <p id="copyright">copyright © inkwangmetal. & sjnv20. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Copy;
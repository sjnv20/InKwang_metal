import React from 'react';
import { useState, useEffect } from "react";
import Logo from '../images/ik_logo.png';

const Header = () => {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    if (ScrollY > 40) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <header className={ScrollActive ? "navigation nav-bg" : "navigation nav-bg"}>
        <div className={ScrollActive ? "logo logo-pd" : "logo logo-pd"}>
          <a href='/'><img src={Logo} alt="/"/></a>
        </div>
        <nav className={ScrollActive ? "nav nav-pd" : "nav nav-pd"}>
          <a href="/">HOME</a>
          <a href="/company">
            <div className="linkwrap">
              회사소개
              <div className="sublink">
                <a href="/company">인사말</a>
                <a href="/cmap">오시는길</a>
              </div>
            </div>
          </a>
          <a href="/product">
            <div className="linkwrap"> 
              제품소개
              <div className="sublink">
                <a href='/product' style={{width:"160px", padding:"10px 35px"}}>인산염 피막</a>
                <a href='/product_r' style={{width:"160px", padding:"10px 35px"}}>알카리 착색</a>
              </div>
            </div>
          </a>
          <a href="/gallery">Gallery</a>
          <div className="dot"></div>
        </nav>
    </header>
  );
};

export default Header;
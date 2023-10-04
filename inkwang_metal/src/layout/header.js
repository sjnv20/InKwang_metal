import React from 'react';
import { useState, useEffect } from "react";
import Logo from '../images/inkwang_logo.png';

const Header = () => {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    if (ScrollY > 100) {
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

  if (window.location.pathname === '/') return null;

  return (
    <header className={ScrollActive ? "navigation nav-bg" : "navigation"}>
        <div className={ScrollActive ? "logo logo-pd" : "logo"}>
          <img src={Logo} alt="logo"/>
          <a href='/'>인광금속</a>
        </div>
        <nav className={ScrollActive ? "nav nav-pd" : "nav"}>
          <a href="/">HOME</a>
          <a href="/company">회사소개</a>
          <a href="/product">제품소개</a>
          <a href="/gallery">Gallery</a>
          <div className="dot"></div>
        </nav>
    </header>
  );
};

export default Header;
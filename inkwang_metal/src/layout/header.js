import React from 'react';
import Logo from '../images/inkwang_logo.png'

const Header = () => {
  return (
    <header>
      <div class="logo">
        <img src={Logo} alt="logo"/>
        <a href='/'>인광금속</a>
      </div>
      <nav class="nav">
        <a href="/company">회사소개</a>
        <a href="/product">제품소개</a>
        <a href="/gallery">Gallery</a>
        <div class="dot"></div>
      </nav>
    </header>
  );
};

export default Header;
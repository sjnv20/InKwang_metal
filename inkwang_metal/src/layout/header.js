import React from 'react';
import Logo from '../images/inkwang_logo.png'

const Header = () => {
  return (
    <header>
      <div class="logo">
        <img src={Logo} alt="logo"/>
        <a href='/'>인광금속</a>
      </div>
      <div class="list">
        <a href="/company">회사소개</a>
        <a href="/product">제품소개</a>
        <a href="/gallery">Gallery</a>
      </div>
    </header>
  );
};

export default Header;
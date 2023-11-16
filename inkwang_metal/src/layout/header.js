import React from 'react';
import Logo from '../images/ik_logo.png';
import { useState } from 'react'

const Header = () => {
  
  const [showNavbar, setShowNavbar] = useState(false)
  
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <header className="navigation">
        <div className= "logo">
          <a href='/'><img src={Logo} alt="/"/></a>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <i class="ti-align-justify"></i>
        </div>
        <div className={`divback ${showNavbar && "active"}`}>
          <nav className="nav nav-pd">
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
        </div>
    </header>
  );
};

export default Header;
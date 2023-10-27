import React from 'react';
import '../scss/_product_header.scss'
import '../scss/_footer.scss'
import '../scss/_product.scss'

import P_img from '../images/inkwang_img/inkwang_img02.jpeg'
import Logo from '../images/inkwang_logo.png';

import { useState, useEffect } from "react";

const Product = () => {
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
    <div className='content'>
      <header className={ScrollActive ? "p_navigation nav-bg" : "p_navigation"}>
        <div className={ScrollActive ? "p_logo logo-pd" : "p_logo"}>
          <img src={Logo} alt="logo"/>
          <a href='/'>인광금속</a>
        </div>
        <nav className={ScrollActive ? "p_nav nav-pd" : "p_nav"}>
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
          <a href="/product">제품소개</a>
          <a href="/gallery">Gallery</a>
          <div className="dot"></div>
        </nav>
    </header>
      <div className="p_title_back">
              <div className="p_img"><img src={P_img} alt="p_img1"/></div>
              <div className="p_text"><p class="p_title">Product<br/><p id="p_p">- 제품 소개 -</p></p></div>
      </div>
      <div className='prd'>
        <div class="tabs">
          <div class="tab-header">
            <div class="active">
              <i class="fa fa-code"></i> Code
            </div>
            <div>
              <i class="fa fa-pencil-square"></i> About
            </div>
            <div>
              <i class="fa fa-bar-chart"></i> Services
            </div>
            <div>
              <i class="fa fa-envelope"></i> Contact
            </div>
          </div>
          <div class="tab-indicator"></div>
          <div class="tab-content">
            
            <div class="active">
              <i class="fa fa-code"></i>
              <h2>This is code section</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
            </div>
            
            <div>
              <i class="fa fa-pencil-square"></i>
              <h2>This is about section</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
            </div>
            
            <div>
              <i class="fa fa-bar-chart"></i>
              <h2>This is services section</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
            </div>
            
            <div>
              <i class="fa fa-envelope"></i>
              <h2>This is contact section</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
};

export default Product;
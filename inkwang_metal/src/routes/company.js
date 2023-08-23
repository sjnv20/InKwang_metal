import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_company.scss'
import '../scss/_SidebarItem.scss'

import C_img from '../images/inkwang_img/inkwang_7.jpeg'
import inKwang from '../images/inkwang_img/inkwangdoor.jpeg';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarItem from '../SidebarItem';
import { useState, useEffect } from "react";

const Company = () => {
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
    
    
    const pathName = useLocation().pathname;

    const menus = [
        { name: "회사소개", path: "/company" },
        { name: "인사말", path: "/company" },
        { name: "오시는 길", path: "/cmap" },
    ];


    return (
        <div className="content">
            <div className="c_title_back">
                <div className="c_img"><img src={C_img} alt="c_img1"/></div>
                <div className="c_text"><p class="c_title">About Us</p></div>
            </div>
            <div className='side_com'>
                <div className={ScrollActive ? "Side" : "side_no"}>
                    {menus.map((menu, index) => {
                        return(
                            <NavLink to={menu.path} key={index}>
                                <SidebarItem className="sidemenu"
                                    menu={menu}
                                    isActive={pathName === menu.path ? true : false}
                                />
                            </NavLink>
                        );
                    })}
                </div>
                <div className="company">
                    <div id="con1">
                        <span className="ti-medall"></span><p id="tit">인 사 말</p>
                    </div>
                    <div className='con_img'>
                        <div id="con2">
                        안녕하십니까.<br/>
                        인산염피막 전문업체 인광금속입니다.<br/>
                        금속 표면처리후 결함이 발생되지 않게 작업하는것이 가장 중요한 노하우입니다.<br/>
                        저희 인광금속의 기술력은 금속 표면처리 후 벗겨짐 현상이 발생되지 않으며,<br/>
                        금액 납기 또한 신속하며 저렴한 가격으로 고객의 경재력을 확보해 드립니다.<br/>
                        항상 고객의 만족을 위해 최선을 다하겠습니다. <br/>
                        감사합니다.
                        <p id='sign'><span>대표</span> 이순수 & 최지연</p>
                        </div>
                        <div>
                            <img src={inKwang} alt="door"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
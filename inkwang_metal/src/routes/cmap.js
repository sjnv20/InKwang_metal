import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_cmap.scss'
import '../scss/_SidebarItem.scss'
import './kakao'

import C_img from '../images/inkwang_img/inkwangdoor.jpeg'
import { NavLink, useLocation } from 'react-router-dom';
import SidebarItem from '../SidebarItem';
import { useState, useEffect } from "react";

const { kakao } = window;

const CMap = () => {

    useEffect(() => {
        const container = document.getElementById('maps');
        const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
        };
        const map = new kakao.maps.Map(container, options);
        }, [])


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
            <div className='side_map'>
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
                <div>
                    <div id="maps" style={{ width: '500px', height: '500px'}}></div>
                </div>
            </div>
        </div>
    );
  };
  
  export default CMap;
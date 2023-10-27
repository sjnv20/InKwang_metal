import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_cmap.scss'
import '../scss/_SidebarItem.scss'
import './kakao'

import { NavLink, useLocation } from 'react-router-dom';
import SidebarItem from '../SidebarItem';
import { useState, useEffect } from "react";

const { kakao } = window;

const CMap = () => {

    useEffect(() => {
        const container = document.getElementById('maps');
        const options = {
        center: new kakao.maps.LatLng(35.178773, 128.9797885),
        level: 1
        };

        const map = new kakao.maps.Map(container, options);

        const markerPosition = new kakao.maps.LatLng(35.178773, 128.979788); 

        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);
        }, [])

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
        
    const pathName = useLocation().pathname;

    const menus = [
        { name: "회사소개", path: "/company" },
        { name: "인사말", path: "/company" },
        { name: "오시는 길", path: "/cmap" },
    ];

    return (
        <div className="content">
            {/* <div className="c_title_back">
                <div className="c_img"><img src={C_img} alt="c_img1"/></div>
                <div className="c_text"><p class="c_title">About Us<br/><p id="c_p">- 오시는 길 -</p></p></div>
            </div> */}
            <div className='side_map'>
                <div className={ScrollActive ? "Side" : "Side"}>
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
                <div className='kmap'>
                    <div id="con1">
                        <span className="ti-map-alt"></span><p id="tit">오시는 길</p>
                    </div>
                    <div style={{display:"flex"}}>
                        <div id='maps'></div>
                        <div className='address'> 
                            <div>
                                <div style={{display:"flex"}}>
                                    <p>
                                        <span className="ti-location-pin title"><sapn id='title'> Location</sapn></span>
                                    </p>
                                    <div id='line'></div>
                                </div>
                                <div style={{paddingLeft:"25px", marginTop:"30px"}} >
                                    <p>
                                        <span id='fill'>부산광역시 사상구 낙동대로1338번길 68 (삼락동, 인광금속)<br/><br/>68, Nakdong-daero 1338beon-gil, Sasang-gu, Busan, <br/>Republic of Korea</span>
                                        
                                    </p>
                                </div>
                            </div>
                            <div style={{marginTop:"60px"}}>
                                <div style={{display:"flex"}}>
                                    <p>
                                        <span className="ti-comments title"><sapn id='title'> Contact&nbsp;&nbsp;</sapn></span>
                                    </p>
                                    <div id='line'></div>
                                </div>
                                <div style={{paddingLeft:"25px", marginTop:"30px"}} >
                                    <p>
                                        <span id='fill'>Tel. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 051) 324 . 5051</span><br/><br/>
                                        <span id='fill'>Fax. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 051) 324 . 5053</span><br/><br/>
                                        <span id='fill'>E-mail. &nbsp;&nbsp;cc707200@hanmail.net</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default CMap;
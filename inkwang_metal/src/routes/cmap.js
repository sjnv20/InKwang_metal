import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_cmap.scss'
import '../scss/_SidebarItem.scss'
import './kakao'

import C_img from '../images/inkwang_img/inkwang_door.jpeg'
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
                <div className="c_text"><p class="c_title">About Us<br/><p id="c_p">- 오시는 길 -</p></p></div>
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
                <div className='kmap'>
                    <div id='maps'></div>
                    <div id='address'> 
                        <table className='tab'>
                            <tbody>
                                <tr>
                                    <th>주소</th>
                                    <td id='t_bg'>본사</td> 
                                    <td id='t_form'>(46910) 부산광역시 사상구 낙동대로1338번길 68</td>
                                </tr>
                                <tr>
                                    <th rowSpan={3}>전화<br/>&<br/>E-mail</th>
                                    <td id='t_bg'>전화</td> 
                                    <td id='t_form'>051 . 324 . 5051</td>
                                </tr>
                                <tr>
                                    <td id='t_bg'>Fax</td>
                                    <td id='t_form'>324 . 5053</td>	
                                </tr>
                                <tr>
                                    <td id='t_bg'>E-mail</td>
                                    <td id='t_form'>cc707200@hanmail.net</td>	
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default CMap;
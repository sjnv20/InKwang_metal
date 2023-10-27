import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_company.scss'
import '../scss/_SidebarItem.scss'

// import C_img from '../images/inkwang_img/inkwang_img05.jpeg'
import inKwang from '../images/inkwang_img/inkwang_door.jpeg';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarItem from '../SidebarItem';
import { useState, useEffect } from "react";

const Company = () => {
  const [ScrollY, setScrollY] = useState(0);
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
    }
    scrollListener(); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
                <div className="c_text"><p class="c_title">About Us<br/><p id="c_p">- 인사말 -</p></p></div>
            </div> */}
            <div className='side_com'>
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
                <div className="company">
                    <div id="con1">
                        <span className="ti-medall"></span><p id="tit">인 사 말</p>
                    </div>
                    <div className='con_img'>
                        <div id="con2">
                        <pre style={{fontFamily:"NanumSquare"}}>
                            환영합니다.<br/>
                            인산염피막, 알카리 착색을 전문으로 하는 <b>인광금속</b> 입니다.<br/>
                            인광금속은 10년 이상 차곡차곡 쌓은 실력과 성실함으로 <br/>당사를 찾아 주시는 고객분들에게 꼭 필요한 파트너가 되고 싶습니다.<br/>
                            최신 설비와 축적된 기술로 더욱 신속하고 <br/>품질이 우수한 제품을 생산하며 고객만족에 힘쓰겠습니다.<br/>
                            인광금속을 찾아주시는 모든 분들의 사업 번창을 기원하며<br/>
                            당사도 함께 성장하고자 합니다.<br/>
                            감사합니다.
                        </pre>
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
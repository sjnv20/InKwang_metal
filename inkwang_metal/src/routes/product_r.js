import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_product.scss'

import R_product from '../images/inkwang_img/r_product.jpeg'
import rc_1 from '../images/rc1.jpeg'
import rc_2 from '../images/rc2.jpeg'
import rc_3 from '../images/rc3.jpeg'
import Back from '../images/back11.jpg'

import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { NavLink, useLocation } from 'react-router-dom';
import SidebarItem from '../SidebarItem';
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

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
    };
  }


  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const pathName = useLocation().pathname;

    const menus = [
        { name: "제품소개", path: "/product" },
        { name: "인산염 피막", path: "/product" },
        { name: "알카리 착색", path: "/product_r" },
    ];

  return (
    <div className='content'>
      <div className='back_img'>
        <img src={Back} alt='#'/>
        <h3>Product</h3>
      </div>
      <div className='side_come'>
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
        <div className='product'>
          <div className="box">
            <Box sx={{ width: 700 }}>
              <AppBar position="static" style={{backgroundColor:'#fff',  boxShadow:"none"}}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="gray"
                  textColor="inherit"
                  variant="scrollable"
                  aria-label="full width tabs example"
                  sx={{ borderBottom: 1, borderColor: '#d4d4d4'}}
                >
                  <Tab id="p_tab1" sx={{backgroundColor:"#15137C", fontSize:"18px", fontFamily:"NanumSquareBold", width:'25%', borderStartEndRadius:'80px 80px;', opacity:'1', zIndex:"20"}} label="알카리 착색" {...a11yProps(0)} />
                  <Tab id="p_tab2" sx={{backgroundColor:"#7e7ccf", fontSize:"18px", fontFamily:"NanumSquareBold", width:'25%', borderStartEndRadius:'80px 80px;', left:'-7%', zIndex:"10"}} label="상세 제품" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <div className='pr_fill'>
                    <img className="pr_img_r" src={R_product} alt='/'/>
                    <pre>
                      - 목적 :  금속 제품을 화학 약품 탱크에 일정 시간 동안 담그어 표면 처리하여 부식을 방지하는<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;과정<br/>
                      - 특징 : <div id='pr_div'>• 유광<br/>• 흑색  -  소재의 특성에 따라 색의 차이는 있음<br/>• 두께 변화 없음  -  정밀가공품에 사용<br/>• 내식성이 약하다</div>
                      - 용도 :  자동차부품 / 산업기계 / 정밀가공품 등
                    </pre>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <div className='pr_fill2'>
                    <img className="rc_1" src={rc_1} alt='/'/>
                    <img className="rc_2" src={rc_2} alt='/'/>
                    <img className="rc_3" src={rc_3} alt='/'/>
                  </div>
                </TabPanel>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
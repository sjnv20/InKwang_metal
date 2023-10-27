import React from 'react';
import '../scss/_product_header.scss'
import '../scss/_footer.scss'
import '../scss/_product.scss'

import P_img from '../images/inkwang_img/inkwang_img02.jpeg'
import Logo from '../images/inkwang_logo.png';
import P_product from '../images/inkwang_img/p_product.jpeg'
import R_product from '../images/inkwang_img/r_product.jpeg'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <div className="box">
        <Box  sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', marginTop:"50px", height: 500 }}
        >
            <Tabs 
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                sx : { background: "#372aca"}
              }}
              aria-label="Vertical tabs example"  
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
            <Tab style={{color:"#372aca"}} label="인산염 피막" {...a11yProps(0)} />
            <Tab style={{color:"#372aca"}} label="알카리 착색" {...a11yProps(1)} />
            </Tabs>
          <TabPanel value={value} index={0}>
            <div className='pr_img'>
              <img src={P_product} alt='p' className='pr_img'></img>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className='pr_img'>
            <img src={R_product} alt='p' className='pr_img'></img>
          </div>
        </TabPanel>
        </Box>
    </div>
    </div>
  );
};

export default Product;
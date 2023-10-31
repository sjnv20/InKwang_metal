import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_product.scss'

import P_img from '../images/inkwang_img/inkwang_img02.jpeg'
import P_product from '../images/inkwang_img/p_product.jpeg'
import R_product from '../images/inkwang_img/r_product.jpeg'

import PropTypes from 'prop-types';
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

  const pathName = useLocation().pathname;

    const menus = [
        { name: "제품소개", path: "/product" },
        { name: "피막 제품", path: "/product" },
        { name: "착색 제품", path: "/product" },
    ];

  return (
    <div className='content'>
      {/* <div className="p_title_back">
              <div className="p_img"><img src={P_img} alt="p_img1"/></div>
              <div className="p_text"><p class="p_title">Product<br/><p id="p_p">- 제품 소개 -</p></p></div>
      </div> */}
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
      </div>
    </div>
  );
};

export default Product;
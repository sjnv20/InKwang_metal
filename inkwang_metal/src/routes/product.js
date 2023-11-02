import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_product.scss'

import P_product from '../images/inkwang_img/p_product.jpeg'
import pm_1 from '../images/pm1.jpeg'
import pm_2 from '../images/pm2.jpeg'
import pm_3 from '../images/pm3.jpeg'
import pm_4 from '../images/pm4.jpeg'

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
            <Box sx={{ width: 870 }}>
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
                  <Tab id="p_tab1" sx={{backgroundColor:"#15137C", fontSize:"18px", fontFamily:"NanumSquareBold", width:'20%', borderStartEndRadius:'80px 80px;', opacity:'1', zIndex:"20"}} label="인산염 피막" {...a11yProps(0)} />
                  <Tab id="p_tab2" sx={{backgroundColor:"#7e7ccf", fontSize:"18px", fontFamily:"NanumSquareBold", width:'20%', borderStartEndRadius:'80px 80px;', left:'-5%', zIndex:"10"}} label="상세 제품" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <div className='pr_fill'>
                    <img className="pr_img" src={P_product} alt='/'/>
                    <pre>
                      - 목적 : 금속 제품을 화학약품 탱크에 담그어 피막을 형성시켜, 금속 제품의 부식을 방지하고 녹을 방지하는 표면 처리 과정 <br/>
                      - 특징 : <div id='pr_div'>• 무광<br/>• 망간계에 비해 색이 엷음<br/>• 미세두께 오름<br/>• 내식성이 있음<br/></div>
                      - 용도 : 도장하지용 / 자동차부품 / 산업기계 / 선박용품 등
                    </pre>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <div className='pr_fill2' style={{flexFlow:"column wrap"}}>
                    <img className="pm_4" src={pm_4} alt='/'/>
                    <img className="pm_2" src={pm_2} alt='/'/>
                    <img className="pm_1" src={pm_1} alt='/'/>
                    <img className="pm_3" src={pm_3} alt='/'/>
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
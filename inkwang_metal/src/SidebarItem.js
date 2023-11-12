import React from "react";
// import { useState, useEffect } from "react";

function SidebarItem({ menu, isActive }) {
  // const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  // const [ScrollActive, setScrollActive] = useState(false);
  // function handleScroll() {
  //   if (ScrollY > 40) {
  //     setScrollY(window.pageYOffset);
  //     setScrollActive(true);
  //   } else {
  //     setScrollY(window.pageYOffset);
  //     setScrollActive(false);
  //   }
  // }
  // useEffect(() => {
  //   function scrollListener() {
  //     window.addEventListener("scroll", handleScroll);
  //   } //  window 에서 스크롤을 감시 시작
  //   scrollListener(); // window 에서 스크롤을 감시
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }; //  window 에서 스크롤을 감시를 종료
  // });
  
  return isActive === true ? (
    <div className="sidebar-item">
      <p>{menu.name}</p>
    </div>
  ) : (
    <div className="sidebar-item">
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem;
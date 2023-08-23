import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_company.scss'
import '../scss/_SidebarItem.scss'

import React from 'react';
import { useEffect } from "react";

const { kakao } = window;

function Kakao() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
    }, [])

    return (
      <div>
        <div id="map" style={{ width: '500px', height: '500px'}}></div>
      </div>
    )
}

export default Kakao;
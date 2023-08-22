import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_company.scss'
import '../scss/_home.scss'
import C_img from '../images/inkwang_img/inkwang_7.jpeg'
import inKwang from '../images/inkwang_img/inkwangdoor.jpeg';

const Company = () => {
    return (
        <div class="content">
            <div class="c_title_back">
                <div class="c_img"><img src={C_img} alt="c_img1"/></div>
                <div class="c_text"><p class="c_title">About Us</p></div>
            </div>
            <div class="company">
                <div id="con1">
                    <span class="ti-user"></span><p id="tit">인 사 말</p>
                </div>
                <div className='con_img'>
                    <div id="con2">
                    안녕하십니까.<br/>
                    인산염피막 전문업체 인광금속입니다.<br/>
                    금속 표면처리후 결함이 발생되지 않게 작업하는것이 가장 중요한 노하우입니다.<br/>
                    저희 인광금속의 기술력은 금속 표면처리 후 산화 발생 벗겨짐 현상이 발생되지 않으며,<br/>
                    금액 납기 또한 신속하며 저렴한 가격으로 고객의 경재력을 확보해 드립니다.<br/>
                    항상 고객의 만족을 위해 최선을 다하겠습니다. <br/>
                    감사합니다.
                    </div>
                    <div>
                        <img src={inKwang} alt="door"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
import React from 'react';
import '../scss/_header.scss'
import '../scss/_footer.scss'
import '../scss/_product.scss'

import P_img from '../images/inkwang_img/inkwang_img02.jpeg'

const Product = () => {
  return (
    <div className='content'>
      <div className="p_title_back">
              <div className="p_img"><img src={P_img} alt="p_img1"/></div>
              <div className="p_text"><p class="p_title">Product<br/><p id="p_p">- 제품 소개 -</p></p></div>
      </div>
      <div className='prd'>
        <div class="tabs">
          <div class="tab-header">
            <div class="active">
              <i class="fa fa-code"></i> Code
            </div>
            <div>
              <i class="fa fa-pencil-square"></i> About
            </div>
            <div>
              <i class="fa fa-bar-chart"></i> Services
            </div>
            <div>
              <i class="fa fa-envelope"></i> Contact
            </div>
          </div>
          <div class="tab-indicator"></div>
          <div class="tab-content">
            
            <div class="active">
              <i class="fa fa-code"></i>
              <h2>This is code section</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
            </div>
            
            <div>
              <i class="fa fa-pencil-square"></i>
              <h2>This is about section</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
            </div>
            
            <div>
              <i class="fa fa-bar-chart"></i>
              <h2>This is services section</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
            </div>
            
            <div>
              <i class="fa fa-envelope"></i>
              <h2>This is contact section</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
};

export default Product;
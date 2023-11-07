/* footer.js */
import React from 'react';
import "../plugins/themify-icons/themify-icons.css"
import Logo_f from '../images/ik_logo_f.png'

const Footer = () => {
  if (window.location.pathname === '/') return null;
  // if (window.location.pathname === '/gallery') return null;
  return (
    <footer>
      <div className="f_logo">
       <a href='/'><img className="f_img" src={Logo_f} alt='logo_f'/></a>
       <div>
          <p id="tel">051.324.5051</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
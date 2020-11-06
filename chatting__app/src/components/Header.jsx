import React from 'react';
import '../css/ChattingBox.css';
import LogoIcon from '../img/logo.jpg'
 
function Header() {
    return (
      <>
      <div className="header">
          <div className="logo">
              <div className="img_container">
                  <img src={LogoIcon} alt="Not Found"/> 
              </div>
              <div className="logo_name">
                  SR Boyz 
              </div>
          </div>
          <div className="active_status">
              Active People
              <span>5</span>
          </div>
      </div>
      </>  
    );
}

export default Header

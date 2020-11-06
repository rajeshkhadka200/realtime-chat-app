import React from 'react';
import '../css/ChattingBox.css'

function Header() {
    return (
      <>
      <div className="header">
          <div className="logo">
              <div className="img">
                  {/* <img src={} alt="Not Found"/> */}
              </div>
              <div className="logo_name">
                  SR clan
              </div>
          </div>
          <div className="active_status">
              <h3>Active Status</h3>
              <span></span>
          </div>
      </div>
      </>  
    );
}

export default Header

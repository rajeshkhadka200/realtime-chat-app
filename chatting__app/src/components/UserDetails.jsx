import React, { useState, useContext } from "react";
import "../css/ChattingBox.css";
import { Messages } from "../Context";

function UserDetails() {
  const { USERNAME, USERLOGO } = useContext(Messages);
  
  const [ USER , SUSER]  = useState();
  const [ USERLOGOS , SUSERLOGOS]  = useState();

  const [ user , setUserC]  = USERNAME;
  const [ userLogo , setUserLogoC]  = USERLOGO;
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserC(USER);
    setUserLogoC(USERLOGOS);
    SUSER("");
    SUSERLOGOS("");
  };
  return (
    <>
      <div className="user_details_mainbox">
        <div className="input_feild">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={USER}
              placeholder="Enter Your Username"
              onChange={(e) => SUSER(e.target.value)}
            />
            <input
              type="text"
              value={USERLOGOS}
              placeholder="Enter your profile URL"
              onChange={(e) => SUSERLOGOS(e.target.value)}
            />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default UserDetails;

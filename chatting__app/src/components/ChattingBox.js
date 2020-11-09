import React, { useContext } from "react";
import FotterComponent from "./FotterComponent";
import MessageDisplayArea from "./MessageDisplayArea";
import "../css/ChattingBox.css";
import Header from "./Header";
import {Messages} from "../Context";
import UserDetails from "./UserDetails";

const ChattingBox = () => {
    const { USERNAME, USERLOGO } = useContext(Messages);
    const [ user ]  = USERNAME;
    const [ userLogo ]  = USERLOGO;
  return (
    <>
      {user === "" && userLogo === "" ? (
        <div className="main__box">
          <UserDetails />
        </div>
      ) : (
        <div className="main__box">
          <Header />
          <MessageDisplayArea /> <FotterComponent />
        </div>
      )}
    </>
  );
};

export default ChattingBox;

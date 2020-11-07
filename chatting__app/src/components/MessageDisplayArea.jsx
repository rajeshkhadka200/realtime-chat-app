import React, { useContext } from "react";
import Logo from "../img/logo.jpg";
import { Messages } from "../Context";

const MessageDisplayArea = () => {
  const [message] = useContext(Messages);
  const { user, messageA } = message;
  return (
    <div className="messageArea">
      <div className="user1">
        <img
          alt=""
          className="user__logo"
          src="https://avatars2.githubusercontent.com/u/55448895?s=400&u=7dc0dcebbea6d8a1e5b3b088fa4678de3064ff98&v=4"
        />
        <div className="message__container">
          {messageA.map((data, index) => (
            <div className="message__row" key={index}>
              <div className="message">{data.data}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageDisplayArea;

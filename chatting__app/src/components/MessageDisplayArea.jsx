import React, { useContext, useEffect } from "react";
import { Messages } from "../Context";
import { db } from "../firebase/Firebase"; 
const MessageDisplayArea = () => {
  const [message, setMessage, user] = useContext(Messages);
  useEffect(() => {
    db.on("value", (dataToGet) => {
      const messageArray = [];
      const messages = dataToGet.val();
      for (let id in messages) {
        messageArray.push(messages[id]);
      }
      setMessage(messageArray);
    });
  }, []);
  return (
    <div className="messageArea">
      {message
        ? message.map((data, index) => (
            <div className={data.user !==user ? "user2" : "user1"}>
              {data.user !==user ? "" : <img
                alt=""
                className="user__logo"
                src={data.userLogo}
              />}
              
              
              <div className="message__container">
                <div className="message__row" key={index}>
                  <div className="message">{data.data}</div>
                </div>
              </div>

              {data.user !==user ?  <img
                alt=""
                className="user__logo"
                src={data.userLogo}
              />: ""}
            </div>
          ))
        : ""}
    </div>
  );
};

export default MessageDisplayArea;

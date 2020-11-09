import React, { useContext, useEffect } from "react";
import { Messages } from "../Context";
import { db } from "../firebase/Firebase";

const MessageDisplayArea = () => {
  const { MESSAGE, USERNAME } = useContext(Messages);
  const [user] = USERNAME;
  const [message, setMessage] = MESSAGE;

  // Using a react hook to make the data load after
  useEffect(() => {
    db.on("value", (dataToGet) => {
      let messageArray = [];
      const messages = dataToGet.val();
      for (let id in messages) {
        let data = messages[id];
        messageArray.push(data);
      }
      let currentUser = "";
      const output = [];
      let el = "";
      for (el of messageArray) {
        if (el.user !== currentUser) {
          output.push(el);
          currentUser = el.user;
        } else {
          const last = output[output.length - 1];
          if (typeof last.data === "string") {
            last.data = [last.data];
          }
          last.data.push(el.data);
        }
      }
      setMessage(output);
    });
  }, []);

  const mapDataMessage = (e) => {
    if (typeof e === "string") {
      return (
        <div className="message__row">
          <div className="message">{e}</div>
        </div>
      );
    } else {
      return(
        e.map((mapMessage, index) => (
          <div className="message__row">
          <div className="message" key={index}>
            {mapMessage}
          </div>
          </div>
        ))
      );
    }
  };

  return (
    <div className="messageArea">
      {message
        ? message.map((data, index) => (
          <>
            <div className={data.user === user ? "user2" : "user1"} key={index}>
              {/* comparing if this is the repeated message of the user  */}
              {/* checking the user to display the image at first or at last */}
              {data.user === user ? (
                ""
              ) : (
                <img alt="" className="user__logo" src={data.userLogo} />
              )}
              {/* rendering the message container with the message in it */}

              <div className="message__container">
                <div className="rows">
                {mapDataMessage(data.data)}
                </div>
                <div className="userName">
                  {data.user}
                </div>
              </div>

              {/* checking the user to display the image at first or at last */}
                
              {data.user === user ? (
                <img alt="" className="user__logo" src={data.userLogo} />
              ) : (
                ""
              )}
            </div> 
            </>
          ))
        : ""}
 
    </div>
  );
};

export default MessageDisplayArea;

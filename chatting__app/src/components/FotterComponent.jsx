import React, { useContext, useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import { Messages } from "../Context";
import { db } from "../firebase/Firebase.js";

// const msg  = "hello is this working";
// function handleSubmit(e) {
//   e.preventDefault();

// }
const FotterComponent = () => {
  const [message, setMessage, user] = useContext(Messages);
  const [typeMessage, setTypeMessage] = useState();
  const { messageA } = message;

  const generateId = () => {
    var n = (new Date()). getTime();
    return n;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeMessage === "") {
      return;
    } else {
      setMessage({
        user,
        messageA: [...messageA, { id: "1", data: typeMessage }],
      });
      db.collection("chatApp")
        .add({
          messsage: { id: generateId(), user,  data: typeMessage },
        }) 
        .catch((error) => {
          console.log(error);
        });
      setTypeMessage("");
    }
  };
  return (
    <div className="fotter">
      <form className="typingContainer" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message"
          className="typingContainer__box"
          value={typeMessage}
          onChange={(e) => {
            setTypeMessage(e.target.value);
          }}
        />
        <SendIcon className="send__icon" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default FotterComponent;

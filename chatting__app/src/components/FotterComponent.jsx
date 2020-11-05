import React from "react";
import SendIcon from '@material-ui/icons/Send';

const FotterComponent = () => {
  return (
    <div className="fotter">
      <form className="typingContainer">
        <input type="text" placeholder="Type a message" className="typingContainer__box" />
        <SendIcon className="send__icon" />
      </form>
    </div>
  );
};

export default FotterComponent;

import React from "react";
import SendIcon from '@material-ui/icons/Send';

const FotterComponent = () => {
  return (
    <div className="fotter">
      <form className="typingContainer">
        <input type="text" className="typingContainer__box" />
        <SendIcon />
      </form>
    </div>
  );
};

export default FotterComponent;

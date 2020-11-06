import React from "react";

const MessageDisplayArea = () => {
  return (
    <div className="messageArea">
      <div className="user1">
        <img className="user__logo"src="https://avatars2.githubusercontent.com/u/55448895?s=400&u=7dc0dcebbea6d8a1e5b3b088fa4678de3064ff98&v=4" />
       <div className="message__container">
       <div className="message__row">
          <div className="message">Hello</div>
        </div>
        <div className="message__row">
          <div className="message">Hi</div>
        </div>
        <div className="message__row">
          <div className="message">How are you</div>
        </div>
        <div className="message__row">
          <div className="message">Me too.</div>
        </div>
       </div>
      </div>


      <div className="user2">
       <div className="message__container">
       <div className="message__row">
          <div className="message">Hello</div>
        </div>
        <div className="message__row">
          <div className="message">Hi</div>
        </div>
        <div className="message__row">
          <div className="message">How are you</div>
        </div>
        <div className="message__row">
          <div className="message">Me too.</div>
        </div>
       </div>
      <img className="user__logo"src="https://avatars2.githubusercontent.com/u/55448895?s=400&u=7dc0dcebbea6d8a1e5b3b088fa4678de3064ff98&v=4" />
      </div>
    </div>
  );
};

export default MessageDisplayArea;

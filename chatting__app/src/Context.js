import React, { createContext, useState } from "react";
export const Messages = createContext();

export const ContextProvider = (props) => {
 
  const [message, setMessage] = useState();

  return (
    <Messages.Provider value={[message, setMessage , user , userLogo]}>
      {props.children}
    </Messages.Provider>
  );
};

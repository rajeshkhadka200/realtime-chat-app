import React, { createContext, useState } from "react";
export const Messages = createContext();

export const ContextProvider = (props) => {

  const user = "Rajesh";
  
 
    const [message, setMessage] = useState();

  

  return (
    <Messages.Provider value={[message, setMessage , user]}>
      {props.children}
    </Messages.Provider>
  );
};

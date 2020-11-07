import React, { createContext, useState } from "react";

export const Messages = createContext();

export const ContextProvider = (props) => {
  const user = "Rajesh Khadka";
  const [message, setMessage] = useState({ user, messageA: [{ id: null, data: null }] });
  return (
    <Messages.Provider value={[message, setMessage, user]}>
      {props.children}
    </Messages.Provider>
  );
};

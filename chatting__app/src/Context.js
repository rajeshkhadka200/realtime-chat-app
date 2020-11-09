import React, { createContext, useState } from "react";
export const Messages = createContext();

export const ContextProvider = (props) => {
  const [user, setUserC] = useState("");
  const [userLogo, setUserLogoC] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Messages.Provider
      value={{
        MESSAGE: [message, setMessage],
        USERNAME: [user, setUserC],
        USERLOGO: [userLogo, setUserLogoC],
      }}
    >
      {props.children}
    </Messages.Provider>
  );
};

import React, { createContext, useState } from "react";

const AppContext = createContext(); //create a context

const AppContextProvider = ({ children }) => {
  const [balance, setBalance] = useState(0); //create state for the balance

  return (
    <AppContext.Provider value={[balance, setBalance]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

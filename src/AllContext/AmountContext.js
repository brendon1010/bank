import React, { createContext, useState } from "react";

const AmountContext = createContext(); //create a context

const AmountContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0); //create state for the amount inputted by user

  return (
    <AmountContext.Provider value={[amount, setAmount]}>
      {children}
    </AmountContext.Provider>
  );
};

export { AmountContext, AmountContextProvider };

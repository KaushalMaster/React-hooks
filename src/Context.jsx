import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState("Initial Context Value");

  const updateState = (newValue) => {
    setState(newValue);
  };

  return (
    <MyContext.Provider value={{ state, updateState }}>
      {children}
    </MyContext.Provider>
  );
};

export const useContextApi = () => {
  return useContext(MyContext);
};

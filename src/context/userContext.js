import React, { createContext, useContext } from "react";
import useFetchUser from "../hooks/useFetchUser";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userData = useFetchUser();

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

import React, { useContext } from "react";

export const GlobalContext = React.createContext({});

export function useGlobalContext() {
   return useContext(GlobalContext);
}

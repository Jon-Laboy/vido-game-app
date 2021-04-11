import React, { useState, createContext, useEffect } from "react";
import { gameDetailsURL } from "../api";

export const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
  const [gameDetail, setGameDetail] = useState([]);
 

  return (
    <DetailsContext.Provider value={[gameDetail, setGameDetail]}>
      {children}
    </DetailsContext.Provider>
  );
};
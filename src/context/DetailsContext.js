import React, { useState, createContext, useEffect } from "react";
import { gameDetailsURL } from "../api";

export const DetailsContext = createContext();

export const DetailsProvier = ({ children }) => {
  const [gameDetail, setGameDetail] = useState([]);
 

  useEffect(() => {
    async function fetchDetailsURL() {
      try {
        const response = await fetch(gameDetailsURL());
        const data = await response.json();
        setGameDetail(data.results);
        console.log(gameDetail)
      } catch (err) {
        console.log(err);
      }
    }
    fetchDetailsURL();
  }, []);

  return (
    <DetailsContext.Provider value={[gameDetail, setGameDetail]}>
      {children}
    </DetailsContext.Provider>
  );
};
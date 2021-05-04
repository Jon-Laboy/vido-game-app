import React, { useState, createContext } from "react";

export const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
  const [gameDetail, setGameDetail] = useState([]);
  const [loadingDetail, setLoadingDetail] = useState(false);

  return (
    <DetailsContext.Provider
      value={{
        loadingDetails: [loadingDetail, setLoadingDetail],
        gamedetails: [gameDetail, setGameDetail],
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

import React, { useState, createContext, useEffect } from "react";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [popularGame, setPopularGame] = useState([]);
  const [newGame, setNewGame] = useState([]);
  const [upcomingGame, setupcomingGame] = useState([]);
  const [searchGame, setSearchGame] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    async function fetchUpcomingURL() {
      try {
        const response = await fetch(upcomingGamesURL());
        const data = await response.json();
        setupcomingGame(data.results);
        setLoading(false)
      } catch (err) {
        console.log(err);
      }
    }
    fetchUpcomingURL();
    async function fetchPopularURL() {
      try {
        const response = await fetch(popularGamesURL());
        const data = await response.json();
        setPopularGame(data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPopularURL();
    async function fetchNewURL() {
      try {
        const response = await fetch(newGamesURL());
        const data = await response.json();
        setNewGame(data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchNewURL();  
  }, []);

  return (
    <GameContext.Provider
      value={{
        popularGames: [popularGame, setPopularGame],
        newGames: [newGame, setNewGame],
        upcomingGames: [upcomingGame, setupcomingGame],
        searchedGames: [searchGame, setSearchGame],
        loadingGames: [loading, setLoading]
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

import React, { useState, createContext, useEffect } from "react";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [popularGame, setPopularGame] = useState([]);
  const [newGame, setNewGame] = useState([]);
  const [upcomingGame, setupcomingGame] = useState([]);

  useEffect(() => {
    async function fetchPopularURL() {
      try {
        const response = await fetch(popularGamesURL());
        const data = await response.json();
        setPopularGame(data.results);
        console.log(popularGame)
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
    async function fetchUpcomingURL() {
      try {
        const response = await fetch(upcomingGamesURL());
        const data = await response.json();
        setupcomingGame(data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUpcomingURL();
  }, []);

  return (
    <GameContext.Provider
      value={{
        popularGames: [popularGame, setPopularGame],
        newGames: [newGame, setNewGame],
        upcomingGames: [upcomingGame, setupcomingGame],
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

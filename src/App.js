import React from "react";
import "./styles/home.scss";
import Home from "./pages/Home";
import { GameProvider } from "./context/GameContext";
import { DetailsProvider } from "./context/DetailsContext";

function App() {
  return (
    <div>
      <GameProvider>
        <DetailsProvider>
          <Home />
        </DetailsProvider>
      </GameProvider>
    </div>
  );
}

export default App;

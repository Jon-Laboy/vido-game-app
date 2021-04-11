import React, {useEffect} from 'react'
import './App.css';
import Home from './pages/Home'
import  { GameProvider } from './context/GameContext'
import { DetailsProvider } from './context/DetailsContext'

function App() {
  return (
    <div className="App">
      <GameProvider>
        <DetailsProvider>
          <Home />
        </DetailsProvider>
      </GameProvider>
    </div>
  );
}

export default App;

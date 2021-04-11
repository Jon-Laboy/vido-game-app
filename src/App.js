import React, {useEffect} from 'react'
import './App.css';
import Home from './pages/Home'
import  { GameProvier } from './context/GameContext'
import { DetailsProvider } from './context/DetailsContext'

function App() {
  return (
    <div className="App">
      <GameProvier>
        <DetailsProvider>
          <Home />
        </DetailsProvider>
      </GameProvier>
    </div>
  );
}

export default App;

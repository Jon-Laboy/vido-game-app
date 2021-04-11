import React, {useEffect} from 'react'
import './App.css';
import Home from './pages/Home'
import  { GameProvier } from './context/GameContext'
import { DetailsProvier } from './context/DetailsContext'

function App() {
  return (
    <div className="App">
      <GameProvier>
        <DetailsProvier>
          <Home />
        </DetailsProvier>
      </GameProvier>
    </div>
  );
}

export default App;

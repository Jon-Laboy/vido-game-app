import React, {useEffect} from 'react'
import './App.css';
import Home from './pages/Home'
import  { GameProvier } from './context/GameContext'

function App() {
  return (
    <div className="App">
      <GameProvier>
        <Home />
      </GameProvier>
    </div>
  );
}

export default App;

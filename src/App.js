import React, {useEffect} from 'react'
import './App.css';
// import {popularGamesURL} from './api'
import Home from './pages/Home'
import  {GameProvier} from './context/GameContext'

function App() {

  // useEffect(()=> {
  //   async function fetchPopularURL () {
  //     try {
  //       const response = await fetch (popularGamesURL ());
  //       const data = await response.json(); 
  //       console.log(data)
  //     } catch (err){
  //       console.log(err)
  //     }
  //   }
  //   fetchPopularURL()
  // }, [])

  return (
    <div className="App">
      <GameProvier>
        <Home />
      </GameProvier>
    </div>
  );
}

export default App;

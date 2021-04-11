import React, { useContext } from 'react'


const Game = ({key, name, released, id, image}) => {
    
    return (
        <div className= "stled-game">
           <h3>{name}</h3>
           <p>{released}</p>
           <img style={{width: "30%"}} src = {image} alt={name} />
        </div>
    )
}

export default Game

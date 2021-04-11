import React, {useContext} from 'react'
import Game from '../components/Game'
import { GameContext } from '../context/GameContext'
import { Container } from '@material-ui/core'

const Home = () => {
    const{ popularGames, newGames, upcomingGames } = useContext(GameContext)
    const [popularGame, setPopularGame] = popularGames;
    const [newGame, setNewGame] = newGames;
    const [upcomingGame, setUpcomingGame]  = upcomingGames; 
    return (
        <div className = "game-list">
            <h2>Ucoming Games</h2>
                <div className = "games">
                    {upcomingGame.map(game => (
                        <Game 
                        key = {game.id} 
                        name = {game.name} 
                        released = {game.released}
                        id = {game.id}
                        image = {game.background_image} />
                    ))}
                </div>
                <h2>New Games</h2>
                <div className = "games">
                    {newGame.map(game => (
                        <Game 
                        key = {game.id} 
                        name = {game.name} 
                        released = {game.released}
                        id = {game.id}
                        image = {game.background_image} />
                    ))}
                </div>
                <h2>Popular Games</h2>
                <div className = "games">
                    {popularGame.map(game => (
                        <Game 
                        key = {game.id} 
                        name = {game.name} 
                        released = {game.released}
                        id = {game.id}
                        image = {game.background_image} />
                    ))}
                </div>
                
        </div>
    )
}

export default Home

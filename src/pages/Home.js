import React, { useContext } from "react";
import Game from "../components/Game";
import { GameContext } from "../context/GameContext";
import { Container, Grid } from "@material-ui/core";
import SearchbBar from '../components/SearchBar';
import '../App.css'

const Home = () => {
  const { popularGames, newGames, upcomingGames } = useContext(GameContext);
  const [popularGame, setPopularGame] = popularGames;
  const [newGame, setNewGame] = newGames;
  const [upcomingGame, setUpcomingGame] = upcomingGames;
  return (
    <div className="game-list">
   
      <Container
        maxWidth="xl"
        style={{ textAlign: "center" }}
      >
      <SearchbBar />
        <h2 classname= "home-page-titles">Upcoming Games</h2>
        <div className="games">
          <Grid container spacing={2} justify="center">
            {upcomingGame && upcomingGame.map((game) => (
              <Grid item xs={12} md={6} lg={4}>
                <Game
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  gameid={game.id}
                  image={game.background_image}
                  platforms = {game.platforms}
                  rating = {game.rating}
                  gallery = {game.short_screenshots}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <h2 classname= "home-page-titles">New Games</h2>
        <div className="games">
          <Grid container spacing={2} justify="center">
            {newGame && newGame.map((game) => (
              <Grid item xs={12} md={6} lg={4}>
                <Game
                   key={game.id}
                   name={game.name}
                   released={game.released}
                   gameid={game.id}
                   image={game.background_image}
                   platforms = {game.platforms}
                   rating = {game.rating}
                   gallery = {game.short_screenshots}                
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <h2 classname= "home-page-titles">Popular Games</h2>
        <div className="games">
          <Grid container spacing={2} justify="center">
            {popularGame && popularGame.map((game) => (
              <Grid item xs={12} md={6} lg={4}>
                <Game
                 key={game.id}
                 name={game.name}
                 released={game.released}
                 gameid={game.id}
                 image={game.background_image}
                 rating = {game.rating}
                 gallery = {game.short_screenshots}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Home;

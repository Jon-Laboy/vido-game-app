import React, { useContext } from "react";
import Game from "../components/Game";
import { GameContext } from "../context/GameContext";
import { Container, Grid } from "@material-ui/core";

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
        <h2>Ucoming Games</h2>
        <div className="games">
          <Grid container spacing={2} justify="center">
            {upcomingGame.map((game) => (
              <Grid item xs={12} md={6} lg={4}>
                <Game
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  gameid={game.id}
                  image={game.background_image}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <h2>New Games</h2>
        <div className="games">
          <Grid container spacing={2} justify="center">
            {newGame.map((game) => (
              <Grid item xs={12} md={6} lg={4}>
                <Game
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  gameid={game.id}
                  image={game.background_image}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <h2>Popular Games</h2>
        <div className="games">
          <Grid container spacing={2} justify="center">
            {popularGame.map((game) => (
              <Grid item xs={12} md={6} lg={4}>
                <Game
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  gameid={game.id}
                  image={game.background_image}
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

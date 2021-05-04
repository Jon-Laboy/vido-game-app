import React, { useContext } from "react";
import Game from "../components/Game";
import { GameContext } from "../context/GameContext";
import { Container, Grid } from "@material-ui/core";
import SearchbBar from "../components/SearchBar";
import PacmanLoader from "react-spinners/PacmanLoader";
import uuid from "react-uuid";

const Home = () => {
  const {
    popularGames,
    newGames,
    upcomingGames,
    searchedGames,
    loadingGames,
  } = useContext(GameContext);
  const [popularGame] = popularGames;
  const [newGame] = newGames;
  const [upcomingGame] = upcomingGames;
  const [searchGame] = searchedGames;
  const [loading] = loadingGames;

  return (
    <div className="game-list">
      {loading ? (
        <div className="pacman-loader">
          <PacmanLoader size={70} color={"#D0021B"} loading={loading} />
        </div>
      ) : (
        <Container maxWidth="xl" style={{ textAlign: "center" }}>
          <SearchbBar />
          {searchGame.length ? (
            <h2 id="home-page-titles">Searched Games</h2>
          ) : (
            ""
          )}
          <div className="games">
            <Grid container spacing={2} justify="center">
              {searchGame &&
                searchGame.map((game) => (
                  <Grid item xs={12} md={6} lg={4} key={uuid()}>
                    <Game
                      key={game.id}
                      name={game.name}
                      released={game.released}
                      gameid={game.id}
                      image={game.background_image}
                      platforms={game.platforms}
                      rating={game.rating}
                      gallery={game.short_screenshots}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
          <h2 id="home-page-titles">Upcoming Games</h2>
          <div className="games">
            <Grid container spacing={2} justify="center">
              {upcomingGame &&
                upcomingGame.map((game) => (
                  <Grid item xs={12} md={6} lg={4} key={uuid()}>
                    <Game
                      key={game.id}
                      name={game.name}
                      released={game.released}
                      gameid={game.id}
                      image={game.background_image}
                      platforms={game.platforms}
                      rating={game.rating}
                      gallery={game.short_screenshots}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
          <h2 id="home-page-titles">New Games</h2>
          <div className="games">
            <Grid container spacing={2} justify="center">
              {newGame &&
                newGame.map((game) => (
                  <Grid item xs={12} md={6} lg={4} key={uuid()}>
                    <Game
                      key={game.id}
                      name={game.name}
                      released={game.released}
                      gameid={game.id}
                      image={game.background_image}
                      platforms={game.platforms}
                      rating={game.rating}
                      gallery={game.short_screenshots}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
          <h2 id="home-page-titles">Popular Games</h2>
          <div className="games">
            <Grid container spacing={2} justify="center">
              {popularGame &&
                popularGame.map((game) => (
                  <Grid item xs={12} md={6} lg={4} key={uuid()}>
                    <Game
                      key={game.id}
                      name={game.name}
                      released={game.released}
                      gameid={game.id}
                      image={game.background_image}
                      rating={game.rating}
                      gallery={game.short_screenshots}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Home;

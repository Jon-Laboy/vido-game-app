import React, { useState, useContext } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepOrange, blue, orange, red } from "@material-ui/core/colors";
import SearchIcon from "@material-ui/icons/Search";
import GamepadIcon from "@material-ui/icons/Gamepad";
import { searchGamesURL } from "../api";
import { GameContext } from "../context/GameContext";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});
const SearchbBar = () => {
  const [input, setInput] = useState("");
  const { searchedGames } = useContext(GameContext);
  const [searchGame, setSearchGame] = searchedGames;

  // Fetch searched game URL to get game description for modal
  async function fetchSearchedURL(game_name) {
    try {
      const response = await fetch(searchGamesURL(game_name));
      const data = await response.json();
      setSearchGame(data.results);
      console.log(searchGame);
    } catch (err) {
      console.log(`didn't work ${err}`);
    }
  }

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    fetchSearchedURL(input);
    console.log(`submitted ${searchGame.name}`);
  };

  const clearSearch = () => {
    setSearchGame("");
  };

  return (
    <ThemeProvider theme={theme}>
      
      <div className="game-logo" onClick={clearSearch}>
        <GamepadIcon style={{ fontSize: "5rem" }} />
        <span>Game Pad</span>
      </div>
      
      {/* <div className="search-section">
        <form onSubmit={handleSubmit}>
          <TextField
            id="search-bar"
            placeholder="search games..."
            margin="normal"
            value={input}
            onChange={updateInput}
          />
        </form>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {<SearchIcon />}
        </Button>
      </div> */}


    <div className = "search-section">
      <Grid container style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
        <Grid item>
          <form onSubmit= {handleSubmit} >
          <TextField 
            id="search-bar"
            placeholder="search games..."
            margin="normal"
            value={input}
            onChange={updateInput}
          />
          </form>
        </Grid>

        <Grid item alignItems="stretch" style={{ display: "flex" }}>
          <Button onClick = {handleSubmit} color="primary" variant="contained" style={{height: "2.88rem", borderRadius:"8px", marginLeft:".3rem", padding: "1.4rem"}}>
            <SearchIcon  />
          </Button>
        </Grid>
      </Grid>
      </div>
    </ThemeProvider>
  );
};

export default SearchbBar;

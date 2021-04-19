import React, { useState } from "react";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepOrange, blue } from "@material-ui/core/colors";

import { SearchIcon } from "@material-ui/icons";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});
const SearchbBar = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(input);
    setInput("");
    console.log(`submitted ${input}`);
  }
  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
      <span><TextField
          id="search-bar"
          placeholder="search games"
          size="large"
          margin="normal"
          value={input}
          onChange={updateInput}
          color="primary"
        />
        <Button id="search-button" variant="contained" color="primary">search</Button></span>
      </form>
    </ThemeProvider>
  );
};

export default SearchbBar;

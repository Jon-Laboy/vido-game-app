import React, { useState } from "react";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepOrange, blue, orange, red } from "@material-ui/core/colors";

import { SearchIcon } from "@material-ui/icons";

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
      <TextField
          id="search-bar"
          placeholder="search games"
          size="large"
          margin="normal"
          value={input}
          onChange={updateInput}
          color="primary"
        />
       
      </form>
      {/* <Button onClick = {handleSubmit} variant="contained" color="primary">search</Button> */}
    </ThemeProvider>
  );
};

export default SearchbBar;

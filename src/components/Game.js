import React from "react";
import DetailModal from "./DetailModal";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 475,
    marginTop: "5rem",
    marginBottom: "3rem",
    height: 380,
  },
  media: {
    width: 475,
    height: 270,
  },
});

const Game = ({ key, name, released, id, image }) => {
  //Modal Open/Close
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Grid container spacing={4} justify="center">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title={name}
            onClick={handleOpen}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {released}
            </Typography>
            <DetailModal handleClose={handleClose} open={open} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Game;

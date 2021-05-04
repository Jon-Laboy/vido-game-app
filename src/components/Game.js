import React, { useContext } from "react";
import { DetailsContext } from "../context/DetailsContext";
import DetailModal from "./DetailModal";
import { gameDetailsURL } from "../api";
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
    height: 415,
  },
  media: {
    width: 475,
    height: 270,
  },
});

const Game = ({ name, released, gameid, image, rating, gallery }) => {
  const { gamedetails, loadingDetails } = useContext(DetailsContext);
  const [gameDetail, setGameDetail] = gamedetails;
  const [loadingDetail, setLoadingDetail] = loadingDetails;

  //Modal Open/Close
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    fetchDetailsURL(gameid);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Fetch details URL to get game description for modal
  async function fetchDetailsURL(id) {
    setLoadingDetail(true);
    try {
      const response = await fetch(gameDetailsURL(id));
      const data = await response.json();
      setGameDetail(data);
      setLoadingDetail(false);
    } catch (err) {
      console.log(`didn't work ${err}`);
    }
  }

  const classes = useStyles();

  return (
    <Grid container spacing={4} justify="center">
      <Card className={classes.root} id="card">
        <CardActionArea>
          <CardMedia
            id="card-media"
            className={classes.media}
            image={image}
            title={name}
            onClick={handleOpen}
            component="img"
            alt="game card image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              id="card-title"
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              id="card-release-date"
            >
              {released}
            </Typography>
            <DetailModal
              handleClose={handleClose}
              open={open}
              name={name}
              gameDetail={gameDetail}
              rating={rating}
              gallery={gallery}
              loadingDetail={loadingDetail}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Game;

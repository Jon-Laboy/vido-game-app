import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Rating } from "@material-ui/lab/";
import PacmanLoader from "react-spinners/PacmanLoader";
import {CgCloseR} from "react-icons/cg"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    height: "75vh",
    width: "88vw",
    overflow: "scroll",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DetailModal = ({
  handleClose,
  open,
  name,
  gameDetail,
  rating,
  gallery,
  loadingDetail,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            className={classes.paper}
            style={{ height: "100vh" }}
            id="detail-modal"
          >
            {loadingDetail ? (
              <div className="pacman-loader">
                <PacmanLoader
                  size={70}
                  color={"#D0021B"}
                  loading={loadingDetail}
                />
              </div>
            ) : (
              <div>
                <div className= "close-modal">
                <CgCloseR id= "close-icon" onClick={handleClose} />
                </div>
                <h2>{name}</h2>
                <Rating
                  className="star-rating"
                  name="read-only"
                  value={rating}
                  readOnly
                />
                {gameDetail.platforms &&
                  gameDetail.platforms.map((platform) => (
                    <h4 className="platforms">{platform.platform.name}</h4>
                  ))}
                <p id="transition-modal-description">
                  {gameDetail.description_raw}
                </p>

                <div className="description-gallery">
                  {gallery &&
                    gallery.map((image) => (
                      <img
                        className="description-gallery-images"
                        key={image.id}
                        src={image.image}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DetailModal;

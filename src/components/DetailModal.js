import React from 'react'
import { DetailsContext } from '../context/DetailsContext'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    paper: {
      backgroundColor: theme.palette.background.paper,
      height: '700px',
      overflow:'scroll',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const DetailModal = ({ handleClose, open, name, gameDetail}) => {
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
          <div className={classes.paper}>
            <p>background Image</p>
            <h2 id="transition-modal-title">{name}</h2>
            <p>ratings</p>
            <p>platforms</p>
            <p id="transition-modal-description">{gameDetail}</p>
            <p>gallery</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default DetailModal

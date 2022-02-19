import React, { useState } from "react";
import { useCategory } from "../context/CategoryContext";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  TextField,
  Box,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ContainedButton from "./ContainedButton";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function VoteModal() {
  const { voteModalDisplay, setVoteModalDisplay } = useCategory();

  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);

  const [added, setAdded] = useState(true);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };

  const addDetails = async () => {
    try {
      setLoading(true);
      const collectionRef = collection(db, "vote-details");
      const payload = {
        phone,
        email,
      };
      await addDoc(collectionRef, payload);
      setAdded(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      //   console.log(err.message);
      alert("Error Occured. Try again.");
    }
  };

  const validate = () => {
    if (email === null) {
      setErrorEmail("Please enter your email address");
      setErrorPhone("");
    } else if (!validateEmail(email)) {
      setErrorEmail("Please enter a valid email address");
      setErrorPhone("");
    } else if (phone === null) {
      setErrorEmail("");
      setErrorPhone("Please enter your phone number");
    } else if (!phone.match(/^\d{11}$/g)) {
      setErrorEmail("");
      setErrorPhone("Please enter a valid phone number");
    } else {
      setErrorEmail("");
      setErrorPhone("");
      addDetails();
    }
  };

  return (
    <div>
      <BootstrapDialog
        onClose={() => setVoteModalDisplay(false)}
        aria-labelledby="customized-dialog-title"
        open={voteModalDisplay}
        fullWidth={true}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={() => setVoteModalDisplay(false)}
        >
          <Typography
            variant="h4"
            align="center"
            style={{ color: added ? "#188a4c" : "#000000" }}
          >
            {added ? "Welcome!" : "Fill in your details"}
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {!added ? (
            <>
              <div style={{ paddingBottom: "5px" }}>
                <TextField
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  label="Email Address"
                />
                <Typography
                  variant="body2"
                  color="red"
                  style={{ paddingTop: "7px" }}
                >
                  {errorEmail}
                </Typography>
              </div>
              <div style={{ paddingBottom: "5px" }}>
                <TextField
                  variant="outlined"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  fullWidth
                  label="Phone Number"
                />
                <Typography
                  variant="body2"
                  color="red"
                  style={{ paddingTop: "7px" }}
                >
                  {errorPhone}
                </Typography>
              </div>
            </>
          ) : (
            <>
              <Typography align="center" variant="h6" gutterBottom>
                Voting starts: March 1st, 2022
              </Typography>
              <Typography variant="body1" align="center">
                You will be the first to know when the portal opens.{" "}
                <span style={{ color: "#188a4c" }}>Cheers.</span>
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          {!added ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <ContainedButton
                text={"Send"}
                textStyle={{ color: "#fff" }}
                styles={{ backgroundColor: "#188A4C", marginRight: "5px" }}
                onClick={validate}
                disabled={loading ? true : false}
                cursor={loading ? "default" : "pointer"}
              />
              <Box sx={{ display: loading ? "flex" : "none" }}>
                <CircularProgress disableShrink size={20} />
              </Box>
            </div>
          ) : (
            <ContainedButton
              text={"Close"}
              textStyle={{ color: "#fff" }}
              styles={{ backgroundColor: "#188A4C" }}
              onClick={() => setVoteModalDisplay(false)}
            />
          )}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default VoteModal;

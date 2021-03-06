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
import { supabase } from "../config/index";

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

function SponsorsModal() {
  const { sponsorsModalDisplay, setSponsorsModalDisplay } = useCategory();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errorName, setErrorName] = useState(null);
  const [errorAddress, setErrorAddress] = useState(null);
  const [errorAmount, setErrorAmount] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);
  const new_supabase = supabase();

  const [added, setAdded] = useState(false);
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
    setLoading(true);
    const payload = {
      phone_number: phone,
      email,
      name,
      address,
      amount,
    };
    new_supabase
      .from("sponsors")
      .insert([
        {
          spons: payload, 
        },
      ])
      .then((suc) => {
        setAdded(true);
        setLoading(false);
      })
      .catch((err) => {});
  };

  const validate = () => {
    if (name === null || name === "") {
      setErrorName("Please Enter Your Name");
      setErrorAddress("");
      setErrorAmount("");
      setErrorEmail("");
      setErrorPhone("");
    } else if (address === null || address === "") {
      setErrorName("");
      setErrorAddress("Please Enter Your Address");
      setErrorAmount("");
      setErrorEmail("");
      setErrorPhone("");
    } else if (amount === null || amount === "") {
      setErrorName("");
      setErrorAddress("");
      setErrorAmount("Please Enter The Amount");
      setErrorEmail("");
      setErrorPhone("");
    } else if (email === null || email === "") {
      setErrorName("");
      setErrorAddress("");
      setErrorAmount("");
      setErrorEmail("Please enter your email address");
      setErrorPhone("");
    } else if (!validateEmail(email)) {
      setErrorName("");
      setErrorAddress("");
      setErrorAmount("");
      setErrorEmail("Please enter a valid email address");
      setErrorPhone("");
    } else if (phone === null || phone === "") {
      setErrorName("");
      setErrorAddress("");
      setErrorAmount("");
      setErrorEmail("");
      setErrorPhone("Please enter your phone number");
    } else if (!phone.match(/^\d{11}$/g)) {
      setErrorName("");
      setErrorAddress("");
      setErrorAmount("");
      setErrorEmail("");
      setErrorPhone("Please enter a valid phone number");
    } else {
      setErrorName("");
      setErrorAddress("");
      setErrorAmount("");
      setErrorEmail("");
      setErrorPhone("");
      addDetails();
    }
  };

  return (
    <div>
      <BootstrapDialog
        onClose={() => setSponsorsModalDisplay(false)}
        aria-labelledby="customized-dialog-title"
        open={sponsorsModalDisplay}
        fullWidth={true}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={() => setSponsorsModalDisplay(false)}
        >
          <Typography
            variant="body1"
            align="center"
            style={{
              color: added ? "#188a4c" : "#000000",
              fontSize: 28,
              fontWeigth: "bold",
            }}
          >
            {added ? "Dear Sponsors," : "Fill in your details"}
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {!added ? (
            <>
              <div style={{ paddingBottom: "5px" }}>
                <TextField
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  label="Name of Individual or Organisation"
                />
                <Typography
                  variant="body2"
                  color="red"
                  style={{ paddingTop: "7px" }}
                >
                  {errorName}
                </Typography>
              </div>
              <div style={{ paddingBottom: "5px" }}>
                <TextField
                  variant="outlined"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  label="Address"
                />
                <Typography
                  variant="body2"
                  color="red"
                  style={{ paddingTop: "7px" }}
                >
                  {errorAddress}
                </Typography>
              </div>
              <div style={{ paddingBottom: "5px" }}>
                <TextField
                  variant="outlined"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  fullWidth
                  label="Amount in Naira"
                  type="tel"
                />
                <Typography
                  variant="body2"
                  color="red"
                  style={{ paddingTop: "7px" }}
                >
                  {errorAmount}
                </Typography>
              </div>
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
                Thanks for Reaching Out To Us.
              </Typography>
              <Typography variant="body1" align="center">
                Our team members will be in touch with you in some minutes.{" "}
                <span style={{ color: "#188a4c" }}>Cheers!.</span>
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
              onClick={() => setSponsorsModalDisplay(false)}
            />
          )}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default SponsorsModal;

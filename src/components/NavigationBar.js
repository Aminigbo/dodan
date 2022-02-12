import React, { useState } from "react";
import {
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ContainedButton from "./ContainedButton";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const tablet = useMediaQuery("(max-width: 900px)");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "85px",
          backgroundColor: "#fff",
          zIndex: 1000,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.06)",
        }}
      >
        <Container style={{ height: "100%" }}>
          <Grid
            container
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Grid item xs={4}>
              <Typography
                variant="h5"
                style={{
                  fontFamily: '"Sintony", sans-serif',
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: "36.48px",
                }}
              >
                Dodan.<span style={{ color: "#188A4C" }}>NG</span>
              </Typography>
            </Grid>
            <Grid
              item
              xs={8}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  display: tablet ? "none" : "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <li>
                  <Typography variant="body1">Home</Typography>
                </li>
                <li>
                  <Typography variant="body1">About Us</Typography>
                </li>
                <li>
                  <Typography variant="body1">Awards</Typography>
                </li>
                <li>
                  <Typography variant="body1">Contact Us</Typography>
                </li>
                <li>
                  <ContainedButton
                    text="Login"
                    styles={{
                      backgroundColor: "#fff",
                      border: "1px solid #188A4C",
                    }}
                    textStyle={{ color: "#188A4C" }}
                  />
                </li>
                <li>
                  <ContainedButton
                    text="Sign Up"
                    styles={{ backgroundColor: "#188A4C" }}
                    textStyle={{ color: "#fff" }}
                  />
                </li>
              </ul>
              <IconButton
                onClick={() => setOpen(true)}
                style={{ display: tablet ? "block" : "none" }}
              >
                <Menu style={{ color: "#188A4C" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
        <div>
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
          >
            <div style={{ width: "auto", height: "60%" }}>
              <div>
                <div
                  style={{
                    padding: "35px 50px 35px 50px",
                    height: tablet ? "50%" : "70%",
                  }}
                  onClick={() => {
                    setOpen(false);
                    navigate("/");
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: 700,
                      fontSize: "28px",
                      lineHeight: "36.48px",
                    }}
                  >
                    Dodan.<span style={{ color: "#188A4C" }}>NG</span>
                  </Typography>
                </div>
              </div>
              <Divider />
              <List>
                <ListItem
                  button
                  onClick={() => {
                    setOpen(false);
                  }}
                  style={{ color: "#188c42" }}
                >
                  <ListItemText primary={"Home"} />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setOpen(false);
                    navigate("/");
                  }}
                  style={{ color: "#188c42" }}
                >
                  <ListItemText primary={"About Us"} />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setOpen(false);
                    navigate("/");
                  }}
                  style={{ color: "#188c42" }}
                >
                  <ListItemText primary={"Awards"} />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setOpen(false);
                  }}
                  style={{ color: "#188c42" }}
                >
                  <ListItemText primary={"Contact US"} />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setOpen(false);
                  }}
                  style={{ color: "#188c42" }}
                >
                  <ListItemText primary={"Login"} />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setOpen(false);
                  }}
                  style={{ color: "#188c42" }}
                >
                  <ListItemText primary={"Sign Up"} />
                </ListItem>
              </List>
            </div>
          </SwipeableDrawer>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;

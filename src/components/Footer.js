import React from "react";
import {
  Container,
  Grid,
  Typography,
  Checkbox,
  useMediaQuery,
} from "@mui/material";
import ContainedButton from "./ContainedButton";
import { HashLink } from "react-router-hash-link";
import { useCategory } from "../context/CategoryContext";

function Footer() {
  const tablet = useMediaQuery("(max-width: 900px)");
  const { setVoteModalDisplay } = useCategory();

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        padding: "50px 0 40px 0",
        backgroundColor: "#212121",
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item md={5} sm={12} xs={12}>
            <Typography
              variant="h5"
              style={{
                fontFamily: '"Sintony", sans-serif',
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "36.48px",
                color: "#fff",
                paddingBottom: 30,
              }}
            >
              DODAN<span style={{ color: "#188A4C" }}></span>
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "#fff",
              }}
            >
              Award is put together to appreciate, celebrate honor and encourage
              the few good Politicians who had demonstrated honesty, hard work,
              love and care for the citizens according to their oath of office
              and respect for the Constitution.
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            xs={6}
            style={{
              display: "flex",
              justifyContent: tablet ? "flex-start" : "center",
            }}
          >
            <div>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 600,
                  fontSize: "23px",
                  color: "#fff",
                  paddingBottom: 15,
                }}
                align="left"
              >
                Quick Links
              </Typography>
              <HashLink to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  style={{
                    color: "#fff",
                    marginBottom: 15,
                  }}
                >
                  Home
                </Typography>
              </HashLink>
              <HashLink to="/#about" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  style={{
                    color: "#fff",
                    marginBottom: 15,
                  }}
                >
                  About Us
                </Typography>
              </HashLink>
              <Typography
                variant="body1"
                style={{
                  color: "#fff",
                  marginBottom: 15,
                  cursor: "pointer",
                }}
                onClick={() => setVoteModalDisplay(true)}
              >
                Vote
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#fff",
                  marginBottom: 15,
                }}
              >
                Contact Us
              </Typography>
              <HashLink to="/#sponsors" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  style={{
                    color: "#fff",
                    marginBottom: 15,
                  }}
                >
                  Become a Sponsor
                </Typography>
              </HashLink>
            </div>
          </Grid>
          <Grid item md={3} sm={12} xs={12}>
            <Typography
              variant="h5"
              style={{
                fontWeight: 600,
                fontSize: "23px",
                color: "#fff",
                paddingBottom: 15,
              }}
              align="left"
            >
              Stay Tuned For Updates
            </Typography>
            <div style={{ marginBottom: 15, width: "100%" }}>
              <input
                type="email"
                style={{
                  padding: "10px 4%",
                  width: "92%",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 16,
                  borderRadius: "0px 5px 5px 0px",
                  border: "0.5px solid rgba(63, 59, 59, 0.63)",
                }}
                placeholder="Email Address"
              />
            </div>
            <div style={{ paddingBottom: 15 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  checked={true}
                  // onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  color="secondary"
                />
                <Typography variant="body1" color="secondary">
                  I have read and agree to the terms & conditions
                </Typography>
              </div>
            </div>
            <ContainedButton
              text="Subscribe"
              styles={{ backgroundColor: "#188A4C" }}
              textStyle={{ color: "#fff" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;

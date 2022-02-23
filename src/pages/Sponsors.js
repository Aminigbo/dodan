import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useCategory } from "../context/CategoryContext";
import ContainedButton from "../components/ContainedButton";
import AwardeesCard from "../components/AwardeesCard";

function Sponsors() {
  const { id } = useParams();
  const { sponsorsState, setSponsorsModalDisplay } = useCategory();

  return (
    <>
      <NavigationBar />
      {sponsorsState
        .filter((sponsors) => sponsors.id === parseInt(id))
        .map((sponsors) => (
          <div key={sponsors.id} style={{ width: "100%", padding: "50px 0" }}>
            <Container>
              <Grid container spacing={6}>
                <Grid item md={6} xs={12}>
                  <img
                    src={sponsors.picture}
                    alt=""
                    style={{
                      width: "100%",
                      height: "370px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <div
                    style={{
                      width: "170px",
                      padding: "7px 15px",
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <EmojiEventsIcon
                      style={{ marginRight: 10, color: "#E33C1C" }}
                    />
                    <Typography variant="body1" style={{ color: "#188A4C" }}>
                      Sponsors Category
                    </Typography>
                  </div>
                  <Typography
                    variant="h4"
                    style={{
                      fontSize: "40px",
                      fontWeight: "700",
                      paddingBottom: 20,
                      paddingTop: 30,
                    }}
                  >
                    {sponsors.title}
                  </Typography>
                  <Typography variant="body1" style={{ paddingBottom: "20px" }}>
                    {sponsors.description}
                  </Typography>
                  <ContainedButton
                    text={"Become a sponsor"}
                    textStyle={{ color: "#fff" }}
                    styles={{ backgroundColor: "#188A4C" }}
                    onClick={() => setSponsorsModalDisplay(true)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Grid container spacing={5}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="black"
                        align="center"
                        style={{ paddingTop: "50px" }}
                      >
                        Other Sponsors Categories
                      </Typography>
                    </Grid>
                    {sponsorsState
                      .filter((sponsors) => sponsors.id !== parseInt(id))
                      .map((sponsors) => (
                        <Grid item md={3} sm={6} xs={12}>
                          <AwardeesCard
                            key={sponsors.id}
                            image={sponsors.picture}
                            name={sponsors.title}
                            id={sponsors.id}
                            link={`/sponsor/${sponsors.id}`}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        ))}
      <Footer />
    </>
  );
}

export default Sponsors;

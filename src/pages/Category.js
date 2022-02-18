import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useCategory } from "../context/CategoryContext";
import ContainedButton from "../components/ContainedButton";

function Category() {
  const { id } = useParams();
  const { categoryState } = useCategory();

  const { setVoteModalDisplay } = useCategory();

  return (
    <>
      <NavigationBar />
      {categoryState
        .filter((category) => category.id === parseInt(id))
        .map((category) => (
          <div key={category.id} style={{ width: "100%", padding: "50px 0" }}>
            <Container>
              <Grid container spacing={6}>
                <Grid item md={6} xs={12}>
                  <img
                    src={category.picture}
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
                      width: "150px",
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
                      Award Category
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
                    {category.title}
                  </Typography>
                  <Typography variant="body1" style={{ paddingBottom: "20px" }}>
                    {category.description}
                  </Typography>
                  <ContainedButton
                    text={"Enter to Vote"}
                    textStyle={{ color: "#fff" }}
                    styles={{ backgroundColor: "#188A4C" }}
                    onClick={() => setVoteModalDisplay(true)}
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
        ))}
      <Footer />
    </>
  );
}

export default Category;

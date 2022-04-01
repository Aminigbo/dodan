import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useCategory } from "../context/CategoryContext";
import ContainedButton from "../components/ContainedButton";
import AwardeesCard from "../components/AwardeesCard";
import "../static/css/index.css";
import { Link } from "react-router-dom";

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
                    className="img"
                    src={category.picture}
                    alt=""
                    style={{
                      objectFit: "fit",
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

                  {category.id != 1 ? (
                    <>
                      {category.id == 3 && <>
                        <Link to="/role-model">
                           <ContainedButton
                        text={"Vote"}
                        textStyle={{ color: "#fff" }}
                        styles={{ backgroundColor: "#188A4C" }}
                        // onClick={() => setVoteModalDisplay(true)}
                      />
                        </Link>
                      </>}
                    </>
                  ) : (
                    <>
                      <div className="catHolder">
                        <p>
                          <b>Select category to vote</b>
                        </p>
                        <Link to={`/governors`}>
                          <ContainedButton
                            text={"Governors"}
                            textStyle={{ color: "#fff" }}
                            styles={{ backgroundColor: "#188A4C" }}
                            // onClick={() => setVoteModalDisplay(true)}
                          />
                        </Link>

                        <Link to={`/ministers`}>
                          <ContainedButton
                            text={"Ministers"}
                            textStyle={{ color: "#fff" }}
                            styles={{ backgroundColor: "#188A4C" }}
                            // onClick={() => setVoteModalDisplay(true)}
                          />
                        </Link>
                        <ContainedButton
                          text={"House of reps."}
                          textStyle={{ color: "#fff" }}
                          styles={{ backgroundColor: "#188A4C" }}
                          onClick={() => setVoteModalDisplay(true)}
                        />
                        <ContainedButton
                          text={"House of assemblies"}
                          textStyle={{ color: "#fff" }}
                          styles={{ backgroundColor: "#188A4C" }}
                          onClick={() => setVoteModalDisplay(true)}
                        />

                        <Link to={`/lga`}>
                          <ContainedButton
                            text={"LGA Charimen"}
                            textStyle={{ color: "#fff" }}
                            styles={{ backgroundColor: "#188A4C" }}
                            // onClick={() => setVoteModalDisplay(true)}
                          />
                          </Link>
                          
                          <Link to={`/senators`}>
                          <ContainedButton
                            text={"National Assembly"}
                            textStyle={{ color: "#fff" }}
                            styles={{ backgroundColor: "#188A4C" }}
                            // onClick={() => setVoteModalDisplay(true)}
                          />
                        </Link>
                      </div>
                    </>
                  )}

                  <br />
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
                        Other Award Categories
                      </Typography>
                    </Grid>
                    {categoryState
                      .filter((category) => category.id !== parseInt(id))
                      .map((category) => (
                        <Grid item md={3} sm={6} xs={12}>
                          <AwardeesCard
                            key={category.id}
                            image={category.picture}
                            name={category.title}
                            id={category.id}
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

export default Category;

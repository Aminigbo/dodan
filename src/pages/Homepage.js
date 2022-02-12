import React from "react";
import NavigationBar from "../components/NavigationBar";
import images from "../images/images";
import { Typography, useMediaQuery, Container, Grid } from "@mui/material";
import ContainedButton from "../components/ContainedButton";
import ValuesCard from "../components/ValuesCard";
import FlagIcon from "@mui/icons-material/Flag";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import NomineeCard from "../components/NomineeCard";
import AwardeesCard from "../components/AwardeesCard";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

function Homepage() {
  const tablet = useMediaQuery("(max-width: 900px)");
  const mobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <NavigationBar />
      <div
        style={{
          width: "100%",
          height: mobile ? "88vh" : tablet ? "100vh" : "95vh",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images.landingPage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: tablet ? "70%" : mobile ? "100%" : "40%" }}>
          <Typography
            variant="h4"
            align="center"
            style={{
              color: "#fff",
              fontWeight: 600,
              fontSize: mobile ? "40px" : "65px",
              lineHeight: mobile ? "57px" : "78px",
              paddingBottom: "30px",
            }}
          >
            Help Us Make A Difference In This Country.
          </Typography>
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ContainedButton
              text={"Vote"}
              textStyle={{ color: "#fff" }}
              styles={{ backgroundColor: "#188A4C" }}
            />
          </div>
        </div>
      </div>
      <div
        style={{ width: "100%", padding: "60px 0", backgroundColor: "#F0F7F3" }}
      >
        <Container>
          <Grid container spacing={5}>
            <Grid item md={3} sm={6} xs={12}>
              <ValuesCard
                image={images.mission}
                title="OUR MISSION"
                text={
                  "RightWay helps hundreds of people to vote and wins Lorem ipsum dolor sit amet consect adipiscing elit sed eiusmod temp."
                }
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <ValuesCard
                image={images.volunteer}
                title="JOIN VOLUNTEER"
                text={
                  "RightWay helps hundreds of people to vote and wins Lorem ipsum dolor sit amet consect adipiscing elit sed eiusmod temp."
                }
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <ValuesCard
                image={images.company}
                title="OUR COMPANIES"
                text={
                  "RightWay helps hundreds of people to vote and wins Lorem ipsum dolor sit amet consect adipiscing elit sed eiusmod temp."
                }
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <ValuesCard
                image={images.project}
                title="OUR PROJECT"
                text={
                  "RightWay helps hundreds of people to vote and wins Lorem ipsum dolor sit amet consect adipiscing elit sed eiusmod temp."
                }
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ width: "100%", padding: "50px 0" }}>
        <Container>
          <Grid
            container
            spacing={6}
            direction={tablet ? "column-reverse" : "row"}
            alignItems="center"
          >
            <Grid item md={6} xs={12}>
              <img
                src={images.about}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <div
                style={{
                  width: "100px",
                  padding: "7px 15px",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FlagIcon style={{ marginRight: 10, color: "#E33C1C" }} />
                <Typography variant="body1" style={{ color: "#188A4C" }}>
                  About Us
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
                The True Leader For The Better Country
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: "20px" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. um sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.ascetur ridiculus mus. um sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </Typography>
              <ContainedButton
                text={"Learn More"}
                textStyle={{ color: "#fff" }}
                styles={{ backgroundColor: "#188A4C" }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ width: "100%", padding: "60px 0" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight={600}
            style={{ paddingBottom: 20 }}
          >
            Our Nominees
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ paddingBottom: 50 }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes,
          </Typography>
          <OwlCarousel
            className="owl-theme"
            loop
            dots={false}
            margin={20}
            nav={false}
            autoplay={true}
            autoplayTimeout={3000}
            autoplayHoverPause={true}
            autoplaySpeed={2000}
            responsive={{
              0: {
                items: 2,
              },
              600: {
                items: 4,
              },
              900: {
                items: 6,
              },
            }}
          >
            <NomineeCard
              name="Christopher Days"
              title="Local Govt Chairman"
              image={images.landingPage}
            />
            <NomineeCard
              name="Christopher Days"
              title="Local Govt Chairman"
              image={images.landingPage}
            />
            <NomineeCard
              name="Christopher Days"
              title="Local Govt Chairman"
              image={images.landingPage}
            />
            <NomineeCard
              name="Christopher Days"
              title="Local Govt Chairman"
              image={images.landingPage}
            />
            <NomineeCard
              name="Christopher Days"
              title="Local Govt Chairman"
              image={images.landingPage}
            />
            <NomineeCard
              name="Christopher Days"
              title="Local Govt Chairman"
              image={images.landingPage}
            />
            <NomineeCard
              name="Christopher Days"
              title="Local Govt Chairman"
              image={images.landingPage}
            />
          </OwlCarousel>
        </Container>
      </div>
      <div
        style={{ backgroundColor: "#F0F7F3", width: "100%", padding: "50px 0" }}
      >
        <Container>
          <Grid
            container
            spacing={6}
            direction={tablet ? "column-reverse" : "row"}
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={6}>
              <img
                src={images.vote}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div
                style={{
                  width: "100px",
                  padding: "7px 15px",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HowToVoteIcon style={{ marginRight: 10, color: "#E33C1C" }} />
                <Typography variant="body1" style={{ color: "#188A4C" }}>
                  Vote
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
                You Vote for Progress We Make History.
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: "10px" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. um sociis natoque penatibus et magnis dis parturient
                montes,
              </Typography>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: 5,
                }}
              >
                <img
                  src={images.voteMark}
                  alt=""
                  style={{ width: "20px", marginRight: 10 }}
                />
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </Typography>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: 5,
                }}
              >
                <img
                  src={images.voteMark}
                  alt=""
                  style={{ width: "20px", marginRight: 10 }}
                />
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </Typography>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: 5,
                }}
              >
                <img
                  src={images.voteMark}
                  alt=""
                  style={{ width: "20px", marginRight: 10 }}
                />
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </Typography>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: 5,
                }}
              >
                <img
                  src={images.voteMark}
                  alt=""
                  style={{ width: "20px", marginRight: 10 }}
                />
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ width: "100%", padding: "50px 0" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight={600}
            style={{ paddingBottom: 20 }}
          >
            Meet Our Awardees
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ paddingBottom: 50 }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes,
          </Typography>
          <Grid container spacing={5}>
            <Grid item md={3} sm={6} xs={12}>
              <AwardeesCard
                image={images.landingPage}
                name="Christopher Day"
                post="Local Govt Chairman"
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <AwardeesCard
                image={images.landingPage}
                name="Christopher Day"
                post="Local Govt Chairman"
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <AwardeesCard
                image={images.landingPage}
                name="Christopher Day"
                post="Local Govt Chairman"
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <AwardeesCard
                image={images.landingPage}
                name="Christopher Day"
                post="Local Govt Chairman"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `linear-gradient(rgba(24, 138, 76, 0.9), rgba(24, 138, 76, 0.9)), url(${images.testimonial})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          padding: "80px 0",
        }}
      >
        <Container>
          <OwlCarousel
            className="owl-theme"
            loop
            // dots={false}
            margin={20}
            nav={false}
            center={true}
            autoplay={true}
            autoplayTimeout={5000}
            autoplayHoverPause={true}
            autoplaySpeed={3000}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 1,
              },
              900: {
                items: 1,
              },
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifySelf: "center",
                flexDirection: mobile ? "column" : tablet ? "column" : "row",
                marginBottom: 50,
              }}
            >
              <div
                style={{
                  width: tablet ? "100%" : "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "auto",
                  marginBottom: mobile ? "30px" : tablet ? "30px" : null,
                }}
              >
                <img
                  src={images.landingPage}
                  alt=""
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                style={{
                  width: "75%",
                  height: "auto",
                }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  align={tablet ? "center" : "left"}
                  style={{ fontWeight: "500", fontSize: "23px" }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur.
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  align={tablet ? "center" : "left"}
                  style={{ fontWeight: "400", fontSize: "20px", marginTop: 30 }}
                >
                  Monica .O. Christopher
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifySelf: "center",
                flexDirection: tablet ? "column" : "row",
                marginBottom: 50,
              }}
            >
              <div
                style={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "auto",
                  marginBottom: tablet ? "30px" : null,
                }}
              >
                <img
                  src={images.landingPage}
                  alt=""
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                style={{
                  width: "75%",
                  height: "auto",
                }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  align={tablet ? "center" : "left"}
                  style={{ fontWeight: "500", fontSize: "23px" }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur.
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  align={tablet ? "center" : "left"}
                  style={{ fontWeight: "400", fontSize: "20px", marginTop: 30 }}
                >
                  Monica .O. Christopher
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifySelf: "center",
                flexDirection: tablet ? "column" : "row",
                marginBottom: 50,
              }}
            >
              <div
                style={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "auto",
                  marginBottom: tablet ? "30px" : null,
                }}
              >
                <img
                  src={images.landingPage}
                  alt=""
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                style={{
                  width: "75%",
                  height: "auto",
                }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  align={tablet ? "center" : "left"}
                  style={{ fontWeight: "500", fontSize: "23px" }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur.
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  align={tablet ? "center" : "left"}
                  style={{ fontWeight: "400", fontSize: "20px", marginTop: 30 }}
                >
                  Monica .O. Christopher
                </Typography>
              </div>
            </div>
          </OwlCarousel>
        </Container>
      </div>
      <div style={{ padding: "50px 0", width: "100%", height: "auto" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight={600}
            style={{ paddingBottom: 20 }}
          >
            Our Sponsors
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ paddingBottom: 50 }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes,
          </Typography>
        </Container>
        <div
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "#E0E0E0",
            padding: "30px 0",
          }}
        >
          <Container>
            <OwlCarousel
              className="owl-theme"
              loop
              dots={false}
              margin={20}
              nav={false}
              // center={true}
              autoplay={true}
              autoplayTimeout={4000}
              autoplayHoverPause={true}
              autoplaySpeed={2000}
              responsive={{
                0: {
                  items: 2,
                },
                600: {
                  items: 3,
                },
                900: {
                  items: 5,
                },
              }}
            >
              <img
                src={images.test1}
                alt=""
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
              <img
                src={images.test2}
                alt=""
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
              <img
                src={images.test3}
                alt=""
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
              <img
                src={images.test2}
                alt=""
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
              <img
                src={images.test4}
                alt=""
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </OwlCarousel>
          </Container>
        </div>
      </div>
      <div style={{ width: "100%", height: "auto", padding: "50px 0" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight={600}
            style={{ paddingBottom: 20 }}
          >
            Latest News
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ paddingBottom: 50 }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes,
          </Typography>
          <Grid container spacing={7}>
            <Grid item md={4} sm={6} xs={12}>
              <BlogCard image={images.landingPage} />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <BlogCard image={images.landingPage} />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <BlogCard image={images.landingPage} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;

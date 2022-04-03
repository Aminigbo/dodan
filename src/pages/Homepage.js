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
// import NomineeCard from "../components/NomineeCard";
import AwardeesCard from "../components/AwardeesCard";
import SponsorCard from "../components/SponsorCard";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { useCategory } from "../context/CategoryContext";

function Homepage() {
  const { categoryState, setVoteModalDisplay, sponsorsState } = useCategory();

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
          <OwlCarousel
            className="owl-theme"
            loop
            dots={false}
            margin={30}
            nav={false}
            autoplay={true}
            autoplayTimeout={3000}
            autoplayHoverPause={false}
            autoplaySpeed={2000}
            center={true}
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
            <div style={{ width: "100%", height: "auto" }}>
              <Typography
                variant="h4"
                align="center"
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: mobile ? 30 : 65,
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
                {/* <ContainedButton
                  text={"Vote"}
                  textStyle={{ color: "#fff" }}
                  styles={{ backgroundColor: "#188A4C" }}
                  onClick={() => setVoteModalDisplay(true)}
                /> */}
              </div>
            </div>
            <div style={{ width: "100%", height: "auto" }}>
              <Typography
                variant="h4"
                align="center"
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: mobile ? 30 : 65,
                  lineHeight: mobile ? "57px" : "78px",
                  paddingBottom: "30px",
                }}
              >
                Help us reward good leaders.
              </Typography>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* <ContainedButton
                  text={"Vote"}
                  textStyle={{ color: "#fff" }}
                  styles={{ backgroundColor: "#188A4C" }}
                  onClick={() => setVoteModalDisplay(true)}
                /> */}
              </div>
            </div>
            <div style={{ width: "100%", height: "auto" }}>
              <Typography
                variant="h4"
                align="center"
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: mobile ? 30 : 65,
                  lineHeight: mobile ? "57px" : "78px",
                  paddingBottom: "30px",
                }}
              >
                Come let’s bridge the gap.
              </Typography>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* <ContainedButton
                  text={"Vote"}
                  textStyle={{ color: "#fff" }}
                  styles={{ backgroundColor: "#188A4C" }}
                  onClick={() => setVoteModalDisplay(true)}
                /> */}
              </div>
            </div>
          </OwlCarousel>
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
                title="REWARD"
                text={
                  "Join us to reward those who have worked so hard to serve the people. Let's strengthen our reward system."
                }
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <ValuesCard
                image={images.volunteer}
                title="ACCOUNTABILITY"
                text={
                  "This is an opportunity to remind our leaders that they are accountable to us. Let's strengthen the accountability culture."
                }
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <ValuesCard
                image={images.company}
                title="SCORE CARD"
                text={
                  "It's time to review the scorecards of our leaders and set a standard for our democracy."
                }
              />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <ValuesCard
                image={images.project}
                title="LEGACY"
                text={
                  "No matter how rough it's been, there are those who have strived to build a lasting history. Join us to make history as we celebrate these legends."
                }
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div id="about" style={{ width: "100%", padding: "50px 0" }}>
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
                Dividence Of Democracy Award, Nigeria (DODAN)
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: "20px" }}>
                Award is put together to appreciate, celebrate honor and
                encourage the few good Politicians who had demonstrated honesty,
                hard work, love and care for the citizens according to their
                oath of office and respect for the Constitution.
                <br />
                <br />
                Renowned/experienced journalists and Activists, chosen market
                women and some students from across Nigeria will make up a team
                of people to verify, confirm claims of projects, programs etc of
                the highest voted for Politicians for the award.
              </Typography>
              {/* <ContainedButton
                text={"Learn More"}
                textStyle={{ color: "#fff" }}
                styles={{ backgroundColor: "#188A4C" }}
              /> */}
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* <div style={{ width: "100%", padding: "60px 0" }}>
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
      </div> */}
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
                You Vote For Service. We Reward For Development.
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: "10px" }}>
                You have the power to decide those who truly deserve these
                important awards. The power is in your hands.
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
                <Typography variant="body1">Select any category</Typography>
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
                  Locate your favorite awardee in that category
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
                  Vote as many times as possible
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
                  You can vote in various categories
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
                  You can vote for only one award in each category.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div id="award" style={{ width: "100%", padding: "50px 0" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight={600}
            style={{ paddingBottom: 20 }}
          >
            Award Category
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ paddingBottom: 50 }}
          >
            Select any category and vote for your favorite awardee. Your votes
            will encourage accountabilty.
          </Typography>
          <Grid container spacing={5}>
            {categoryState.map((category) => (
              <Grid key={category.id} item md={3} sm={6} xs={12}>
                <AwardeesCard
                  image={category.picture}
                  name={category.title}
                  id={category.id}
                />
              </Grid>
            ))}
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
                flexDirection: "column",
                marginBottom: 50,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "auto",
                  marginBottom: "30px",
                }}
              >
                <img
                  src={images.woodrow}
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
                  width: "100%",
                  height: "auto",
                }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  align={"center"}
                  style={{ fontWeight: "500", fontSize: "23px" }}
                >
                  The world must be made safe for Democracy.
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  align={"center"}
                  style={{ fontWeight: "400", fontSize: "20px", marginTop: 30 }}
                >
                  Woodrow Wilson
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
                marginBottom: 50,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "auto",
                  marginBottom: "30px",
                }}
              >
                <img
                  src={images.kennedy}
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
                  width: "100%",
                  height: "auto",
                }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  align={"center"}
                  style={{ fontWeight: "500", fontSize: "23px" }}
                >
                  Ask not what your country can do for you, ask what you can do
                  for your country.
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  align={"center"}
                  style={{ fontWeight: "400", fontSize: "20px", marginTop: 30 }}
                >
                  John F.Kennedy
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
                marginBottom: 50,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "auto",
                  marginBottom: "30px",
                }}
              >
                <img
                  src={images.rufus}
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
                  width: "100%",
                  height: "auto",
                }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  align={"center"}
                  style={{ fontWeight: "500", fontSize: "23px" }}
                >
                  Love is all we need in Nigeria,let us not just preach it in
                  churches on Sundays and in the mosques on Fridays but practice
                  it daily...
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  align={"center"}
                  style={{ fontWeight: "400", fontSize: "20px", marginTop: 30 }}
                >
                  Rufus Oba
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
                marginBottom: 50,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "auto",
                  marginBottom: "30px",
                }}
              >
                <img
                  src={images.pierre}
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
                  width: "100%",
                  height: "auto",
                }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  align={"center"}
                  style={{ fontWeight: "500", fontSize: "23px" }}
                >
                  Freedom and personal security are safeguarded by laws,those
                  laws must be respected...
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  align={"center"}
                  style={{ fontWeight: "400", fontSize: "20px", marginTop: 30 }}
                >
                  Pierre Trudeau
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
                marginBottom: 50,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "auto",
                  marginBottom: "30px",
                }}
              >
                <img
                  src={images.indira}
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
                  width: "100%",
                  height: "auto",
                }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  align={"center"}
                  style={{ fontWeight: "500", fontSize: "23px" }}
                >
                  There is no job that is too small,there is no person who is
                  too small.everybody has something to do,And if he or she does
                  it well,then the country will run well…
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  align={"center"}
                  style={{ fontWeight: "400", fontSize: "20px", marginTop: 30 }}
                >
                  Indira Ghandi
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
            style={{ paddingBottom: 50 }}
          >
            Our Partners
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
              {/*  */}
               <img
                src={images.test5}
                alt=""
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
               <img
                src={images.test6}
                alt=""
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
               <img
                src={images.test7}
                alt=""
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </OwlCarousel>
          </Container>
        </div>
      </div>
      <div id="sponsors" style={{ width: "100%", padding: "50px 0" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight={600}
            style={{ paddingBottom: 20 }}
          >
            Sponsors Category
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ paddingBottom: 50 }}
          >
            This is an offer to serve or give to provide Dividends of Democracy
            to the less privileged in our society. Write your name in gold,touch
            a life today by your giving ,make your money speak for you and
            change lives for a beautiful,better ,safe society.
          </Typography>
          <Grid container spacing={5}>
            {sponsorsState.map((sponsors) => (
              <Grid key={sponsors.id} item md={3} sm={6} xs={12}>
                <SponsorCard
                  image={sponsors.picture}
                  name={sponsors.title}
                  id={sponsors.id}
                  link={`sponsor/${sponsors.id}`}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
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
            Check out what the media is saying about us.
          </Typography>
          <Grid container spacing={7}>
            <Grid item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.rufus}
                title="Dividends of democracy awards holds in Abuja - The Nation Newspaper"
                link=" https://thenationonlineng.net/dividends-of-democracy-awards-holds-in-abuja/"
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.news2}
                title="Dividends of Democracy Awards to hold in Abuja - Vanguard News"
                link="https://www.vanguardngr.com/2022/01/dividends-of-democracy-awards-to-hold-in-abuja/"
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.news2}
                title="Dividends of Democracy Awards Debuts in Abuja"
                link="https://www.naijalivetv.com/dividends-of-democracy-awards-debuts-in-abuja/"
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.news2}
                title="Dividends Of Democracy Awards debuts"
                link="https://guardian.ng/news/dividends-of-democracy-awards-debuts/"
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.news2}
                title="Dividends of democracy award holds in Abuja June 15"
                link="https://www.sunnewsonline.com/dividends-of-democracy-award-holds-in-abuja-june-15/"
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.rufus}
                title="Group urges Nigerians to vote against anti people politicians, policies."
                link="https://thelaurel.com.ng/group-urges-nigerians-to-vote-against-anti-people-politicians-policies/"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;

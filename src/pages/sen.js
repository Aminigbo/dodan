import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { useCategory } from "../context/CategoryContext";
import "../static/css/index.css";
import SearchInput, { createFilter } from "react-search-input";
import { supabase } from "../config/index";
import ValuesCard from "../components/ValuesCard";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { Typography, useMediaQuery, Container, Grid } from "@mui/material";
import images from "../images/images";
import BlogCard from "../components/BlogCard2";

import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const style = {
  width: "100%",
  // maxWidth: 360,
  bgcolor: "background.paper",
};

function Label() {
  const new_supabase = supabase();

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  }); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

  function handleClick(event) {
    // event.preventDefault();
    // console.info("You clicked a breadcrumb.");
  }

  const [vote_count, setVote_count] = useState("");
  const [loading, setLoading] = useState(true);

  function getVotes(userId) {
    console.log("Loading");
    new_supabase
      .from("votes")
      .select("*")
      .eq(`category`, "sen")
      .then((suc) => {
        let data = suc.data;
        setVote_count(data);
        setLoading(false);
      })
      .catch((err) => {});
  }

  React.useEffect(() => {
    getVotes();
  }, []);

  const { id } = useParams();
  const { categoryState } = useCategory();
  const [capturedSearch, setCapturedSearch] = useState(null);

  const { setVoteModalDisplay } = useCategory();

  const alllabel = [
    {
      Label: "Abia central",
      state: "Abia",
      name: "Theodore Orji",
      party: "PDP",
      id: 1,
    },

    {
      Label: "Abia North",
      state: "Abia",
      name: " Orji Uzor Kalu",
      party: "APC",
      id: 2,
    },

    {
      Label: "Abia South",
      state: "Abia",
      name: "Enyinnaya Abaribe",
      party: "PDP",
      id: 3,
    },

    {
      Label: "Adamawa Central",
      state: "Adamawa",
      name: "Aishatu Dahiru Ahmed",
      party: "APC",
      id: 4,
    },

    {
      Label: "Adamawa North",
      state: "Adamawa",
      name: "Ishaku Elisha Abbo",
      party: "APC",
      id: 5,
    },

    {
      Label: "Adamawa South",
      state: "Adamawa",
      name: "Binos Dauda Yaroe",
      party: "PDP",
      id: 6,
    },

    {
      Label: "Akwaibom North-East",
      state: "Akwaibom",
      name: "Bassey Albert Akpan ",
      party: "PDP",
      id: 7,
    },

    {
      Label: "Akwaibom North-West",
      state: "Akwaibom",
      name: "Chris Ekpenyong ",
      party: "PDP",
      id: 8,
    },

    {
      Label: "Akwaibom South",
      state: "Akwaibom",
      name: "Akon Eyakenyi",
      party: "PDP",
      id: 9,
    },

    {
      Label: "Anambra Central",
      state: "Anambra",
      name: "Uche Ekwunife",
      party: "PDP",
      id: 10,
    },

    {
      Label: "Anambra North",
      state: "Anambra",
      name: "Stella Oduah-Ogiemwonyi",
      party: "APC",
      id: 11,
    },

    {
      Label: "Anambra South",
      state: "Anambra",
      name: "Ifeanyi Ubah",
      party: "YPP",
      id: 12,
    },

    {
      Label: "Bauchi Central",
      state: "Bauchi",
      name: "Halliru Dauda Jika",
      party: "APC",
      id: 13,
    },

    {
      Label: "Bauchi North",
      state: "Bauchi",
      name: "Adamu Muhammad Bulkachuwa",
      party: "APC",
      id: 14,
    },

    {
      Label: "Bauchi South",
      state: "Bauchi",
      name: "Lawal Yahaya Gumau",
      party: "APC",
      id: 15,
    },

    {
      Label: "Bayelsa Central",
      state: "Bayelsa",
      name: "Moses Cleopas",
      party: "PDP",
      id: 16,
    },

    {
      Label: "Bayelsa East",
      state: "Bayelsa",
      name: "Biobarakuma Degi ",
      party: "APC",
      id: 17,
    },

    {
      Label: "Bayelsa West",
      state: "Bayelsa",
      name: " Henry Seriake Dickson",
      party: "PDP",
      id: 18,
    },

    {
      Label: "Benue North-East",
      state: "Benue",
      name: "Gabriel Suswam",
      party: "PDP",
      id: 19,
    },

    {
      Label: "Benue North-West",
      state: "Benue",
      name: "Emmanuel Yisa Orker-Jev",
      party: "PDP",
      id: 20,
    },

    {
      Label: "Benue South",
      state: "Benue",
      name: "Patrick Abba Moro",
      party: "PDP",
      id: 21,
    },

    {
      Label: "Borno Central",
      state: "Borno",
      name: "Kashim Shettima",
      party: "APC",
      id: 22,
    },

    {
      Label: "Borno North",
      state: "Borno",
      name: "Abubakar Shaib Kyari",
      party: "APC",
      id: 23,
    },

    {
      Label: "Borno South",
      state: "Borno",
      name: "Mohammed Ali Ndume",
      party: "APC",
      id: 24,
    },

    {
      Label: "Cross River Central",
      state: "Cross River",
      name: "Sandy Ojang Onor",
      party: "PDP",
      id: 25,
    },

    {
      Label: "Cross River North",
      state: "Cross River",
      name: "Agom Jarigbe",
      party: "PDP",
      id: 26,
    },

    {
      Label: "Cross River South",
      state: "Cross River",
      name: "Gershom Bassey",
      party: "PDP",
      id: 27,
    },

    {
      Label: "Delta Central",
      state: "Delta",
      name: "Ovie Omo-Agege",
      party: "APC",
      id: 28,
    },

    {
      Label: "Delta North",
      state: "Delta",
      name: "Peter Nwaoboshi",
      party: "APC",
      id: 29,
    },

    {
      Label: "Delta South",
      state: "Delta",
      name: "James Manager",
      party: "PDP",
      id: 30,
    },

    {
      Label: "Ebonyi Central",
      state: "Ebonyi",
      name: "Joseph Ogba",
      party: "PDP",
      id: 31,
    },

    {
      Label: "Ebonyi North",
      state: "Ebonyi",
      name: "Sam Egwu",
      party: "PDP",
      id: 32,
    },

    {
      Label: "Ebonyi South",
      state: "Ebonyi",
      name: "Michael Ama Nnachi",
      party: "PDP",
      id: 33,
    },

    {
      Label: "Edo Central",
      state: "Edo",
      name: "Clifford Ordia",
      party: "PDP",
      id: 34,
    },

    {
      Label: "Edo North",
      state: "Edo",
      name: "Francis Alimikhena",
      party: "APC",
      id: 35,
    },

    {
      Label: "Edo South",
      state: "Edo",
      name: "Matthew Urhoghide",
      party: "PDP",
      id: 36,
    },

    {
      Label: "Ekiti Central",
      state: "Ekiti",
      name: "Michael Opeyemi Bamidele",
      party: "APC",
      id: 37,
    },

    {
      Label: "Ekiti North",
      state: "Ekiti",
      name: "Olubunmi Ayodeji Adetunmb",
      party: "APC",
      id: 38,
    },

    {
      Label: "Ekiti South",
      state: "Ekiti",
      name: "Abiodun Olujimi",
      party: "PDP",
      id: 39,
    },

    {
      Label: "Enugu East",
      state: "Enugu",
      name: "Chimaroke Nnamani",
      party: "PDP",
      id: 40,
    },

    {
      Label: "Enugu North",
      state: "Enugu",
      name: "Utazi Chukwuka",
      party: "PDP",
      id: 41,
    },

    {
      Label: "Enugu West",
      state: "Enugu",
      name: "Ike Ekweremadu",
      party: "PDP",
      id: 42,
    },

    {
      Label: "FCT",
      state: "FCT",
      name: "Philips Tanimu Aduda",
      party: "PDP",
      id: 43,
    },

    {
      Label: "Gombe Central",
      state: "Gombe",
      name: "Mohammed Danjuma Goje",
      party: "APC",
      id: 44,
    },

    {
      Label: "Gombe North",
      state: "Gombe",
      name: "Sa'idu Ahmed Alkali",
      party: "APC",
      id: 45,
    },

    {
      Label: "Gombe South",
      state: "Gombe",
      name: "Amos Bulus Kilawangs",
      party: "APC",
      id: 46,
    },

    {
      Label: "Imo East",
      state: "imo",
      name: "Onyewuchi Francis Ezenwa",
      party: "PDP",
      id: 47,
    },

    {
      Label: "Imo North",
      state: "imo",
      name: "Chukwuma Frank Ibezim",
      party: "APC",
      id: 48,
    },

    {
      Label: "Imo West",
      state: "imo",
      name: "Rochas Okorocha",
      party: "APC",
      id: 49,
    },

    {
      Label: "Jigawa North-East",
      state: "Jigawa",
      name: "Ibrahim Hassan Hadejia",
      party: "APC",
      id: 50,
    },

    {
      Label: "Jigawa North-West",
      state: "Jigawa",
      name: "Danladi Abdullahi Sankara",
      party: "APC",
      id: 51,
    },

    {
      Label: "Jigawa South-West",
      state: "Jigawa",
      name: "Mohammed Sabo",
      party: "APC",
      id: 52,
    },

    {
      Label: "Kaduna Central",
      state: "Kaduna",
      name: "Uba Sani",
      party: "APC",
      id: 53,
    },

    {
      Label: "Kaduna North",
      state: "Kaduna",
      name: "Suleiman Abdu Kwari",
      party: "APC",
      id: 54,
    },

    {
      Label: "Kaduna South",
      state: "Kaduna",
      name: "Danjuma Laah",
      party: "PDP",
      id: 55,
    },

    {
      Label: "Kano Central",
      state: "Kano",
      name: "Ibrahim Shekarau",
      party: "APC",
      id: 56,
    },

    {
      Label: "Kano North",
      state: "Kano",
      name: "Barau Jibrin",
      party: "APC",
      id: 57,
    },

    {
      Label: "Kano South",
      state: "Kano",
      name: "Kabiru Ibrahim Gaya",
      party: "APC",
      id: 58,
    },

    {
      Label: "Katsina Central",
      state: "Katsina",
      name: "Kabiru Barkiya",
      party: "APC",
      id: 59,
    },

    {
      Label: "Katsina South",
      state: "Katsina",
      name: "Bello Mandiya",
      party: "APC",
      id: 60,
    },

    {
      Label: "Katsina North",
      state: "Katsina",
      name: "Ahmad Babba Kaita",
      party: "APC",
      id: 61,
    },

    {
      Label: "Kebbi Central",
      state: "Kebbi",
      name: "Adamu Aliero",
      party: "APC",
      id: 62,
    },

    {
      Label: "Kebbi North",
      state: "Kebbi",
      name: "Yahya Abubakar Abdullahi",
      party: "APC",
      id: 63,
    },

    {
      Label: "Kebbi South",
      state: "Kebbi",
      name: "Bala Ibn Na'allah",
      party: "APC",
      id: 64,
    },

    {
      Label: "Kogi Central",
      state: "Kogi",
      name: "Yakubu Oseni",
      party: "APC",
      id: 65,
    },

    {
      Label: "Kogi East",
      state: "Kogi",
      name: "Jibrin Isah",
      party: "APC",
      id: 66,
    },

    {
      Label: "Kogi West",
      state: "Kogi",
      name: "Smart Adeyemi",
      party: "APC",
      id: 67,
    },

    {
      Label: "Kwara Central",
      state: "Kwara",
      name: "Ibrahim Yahaya Oloriegbe",
      party: "APC",
      id: 68,
    },

    {
      Label: "Kwara North",
      state: "Kwara",
      name: "Suleiman Sadiq Umar",
      party: "APC",
      id: 69,
    },

    {
      Label: "Kwara South",
      state: "Kwara",
      name: "Lola Ashiru",
      party: "APC",
      id: 70,
    },

    {
      Label: "Lagos Central",
      state: "Lagos",
      name: "Oluremi Tinubu",
      party: "APC",
      id: 71,
    },

    {
      Label: "Lagos East",
      state: "Lagos",
      name: "Tokunbo Abiru",
      party: "APC",
      id: 72,
    },

    {
      Label: "Lagos West",
      state: "Lagos",
      name: "Solomon Olamilekan Adeola",
      party: "APC",
      id: 73,
    },

    {
      Label: "Nasarawa North",
      state: "Nasarawa",
      name: "Godiya Akwashiki",
      party: "APC",
      id: 74,
    },

    {
      Label: "Nasarawa South",
      state: "Nasarawa",
      name: "Umaru Tanko Al-Makura",
      party: "APC",
      id: 75,
    },

    {
      Label: "Nasarawa West",
      state: "Nasarawa",
      name: "Abdullahi Adamu",
      party: "APC",
      id: 76,
    },

    {
      Label: "Niger East",
      state: "Niger",
      name: "Sani Musa",
      party: "APC",
      id: 77,
    },

    {
      Label: "Niger North",
      state: "Niger",
      name: "Aliyu Sabi Abdullahi",
      party: "APC",
      id: 78,
    },

    {
      Label: "Niger South",
      state: "Niger",
      name: "Muhammad Bima Enagi",
      party: "APC",
      id: 79,
    },

    {
      Label: "Ogun Central",
      state: "Ogun",
      name: "Ibikunle Amosun",
      party: "APC",
      id: 80,
    },

    {
      Label: "Ogun East",
      state: "Ogun",
      name: "Ramoni Olalekan Mustapha",
      party: "APC",
      id: 81,
    },

    {
      Label: "Ogun West",
      state: "Ogun",
      name: "Tolulope Odebiyi",
      party: "APC",
      id: 82,
    },

    {
      Label: "Ondo Central",
      state: "Ondo",
      name: "Akinyelure Patrick Ayo",
      party: "PDP",
      id: 83,
    },

    {
      Label: "Ondo North",
      state: "Ondo",
      name: "Robert Ajayi Boroffice",
      party: "APC",
      id: 84,
    },

    {
      Label: "Ondo South",
      state: "Ondo",
      name: "Nicholas Tofowomo",
      party: "PDP",
      id: 85,
    },

    {
      Label: "Osun Central",
      state: "Osun",
      name: "Ajibola Bashiru",
      party: "APC",
      id: 86,
    },

    {
      Label: "Osun East",
      state: "Osun",
      name: "Fadahunsi Francis Adenigba",
      party: "PDP",
      id: 87,
    },

    {
      Label: "Osun West",
      state: "Osun",
      name: "Adelere Adeyemi Oriolowo",
      party: "APC",
      id: 88,
    },

    {
      Label: "Oyo Central",
      state: "Oyo",
      name: "Teslim Kolawale Kolarin",
      party: "APC",
      id: 89,
    },

    {
      Label: "Oyo North",
      state: "Oyo",
      name: "Abdulfatai Buhari",
      party: "APC",
      id: 90,
    },

    {
      Label: "Oyo South",
      state: "Oyo",
      name: "Mohammed Kola Balogun",
      party: "PDP",
      id: 91,
    },

    {
      Label: "Plateau Central",
      state: "Plateau",
      name: "Hezekiah Ayuba Dimka",
      party: "APC",
      id: 92,
    },

    {
      Label: "Plateau North",
      state: "Plateau",
      name: "IStifanus Gyang",
      party: "PDP",
      id: 93,
    },

    {
      Label: "Plateau South",
      state: "Plateau",
      name: "Nora Daduut",
      party: "APC",
      id: 94,
    },

    {
      Label: "Rivers East",
      state: "Rivers",
      name: "George Thompson Sekibo",
      party: "PDP",
      id: 95,
    },

    {
      Label: "Rivers South-East",
      state: "Rivers",
      name: "Barry Mpigi",
      party: "PDP",
      id: 96,
    },

    {
      Label: "Rivers West",
      state: "Rivers",
      name: "Betty Apiafi",
      party: "PDP",
      id: 97,
    },

    {
      Label: "Sokoto East",
      state: "Sokoto",
      name: "Abdullahi Ibrahim Gobir",
      party: "APC",
      id: 98,
    },

    {
      Label: "Sokoto North",
      state: "Sokoto",
      name: "Aliyu Wamakko",
      party: "APC",
      id: 99,
    },

    {
      Label: "Sokoto South",
      state: "Sokoto",
      name: "Ibrahim Abdullahi Danbaba",
      party: "PDP",
      id: 100,
    },

    {
      Label: "Taraba Central",
      state: "Taraba",
      name: "Yusuf Abubakar Yusuf",
      party: "APC",
      id: 101,
    },

    {
      Label: "Taraba North",
      state: "Taraba",
      name: "Shuaibu Isa Lau",
      party: "PDP",
      id: 102,
    },

    {
      Label: "Taraba South",
      state: "Taraba",
      name: "Emmanuel Bwacha",
      party: "APC",
      id: 103,
    },

    {
      Label: "Yobe East",
      state: "Yobe",
      name: "Ibrahim Gaidam",
      party: "APC",
      id: 104,
    },

    {
      Label: "Yobe North",
      state: "Yobe",
      name: "Ahmed Lawan",
      party: "APC",
      id: 105,
    },

    {
      Label: "Yobe South",
      state: "Yobe",
      name: "Ibrahim Mohammed Bomai",
      party: "APC",
      id: 106,
    },

    {
      Label: "Zamfara North",
      state: "Zamfara",
      name: "Sahabi Alhaji Yaú",
      party: "APC",
      id: 107,
    },

    {
      Label: "Zamfara West",
      state: "Zamfara",
      name: "Lawali Hassan Anka",
      party: "APC",
      id: 108,
    },
  ];
  const [searchTerm, setsearchTerm] = useState("");
  const filteredEmails = alllabel.filter(createFilter(searchTerm, "Label"));

  const searchUpdated = (term) => {
    setsearchTerm(term);
  };
  return (
    <>
      {/* {console.log(products)} */}
      {loading === false && <>{console.log(vote_count)}</>}
      <NavigationBar />

      <div
        className="lga-news"
        style={{
          padding: "50px 0",
          position: "fixed",
          right: "0px",
          width: "24%",
          top: "88px",
          height: "70%",
          overflow: "auto",
        }}
      >
        <Container>
          <Grid container> 

            <div item md={3} sm={6} xs={12}>
              <ValuesCard
                image={images.project}
                title="LEGACY"
                text={
                  "No matter how rough it's been, there are those who have strived to build a lasting history. Join us to make history as we celebrate these legends."
                }
              />
            </div>
          </Grid>
        </Container>
      </div>

      <div
        className="lga-news"
        style={{
          padding: "50px 0",
          position: "fixed",
          left: "0px",
          width: "25%",
          top: "88px",
          height: "70%",
          overflow: "auto",
        }}
      >
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
            style={{ paddingBottom: 50, fontSize: "14px" }}
          >
            Check out what the media is saying about us.
          </Typography>
          <Grid container>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.rufus}
                title="Dividends of democracy awards holds in Abuja - The Nation Newspaper"
                link=" https://thenationonlineng.net/dividends-of-democracy-awards-holds-in-abuja/"
              />
            </div>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.news2}
                title="Dividends of Democracy Awards to hold in Abuja - Vanguard News"
                link="https://www.vanguardngr.com/2022/01/dividends-of-democracy-awards-to-hold-in-abuja/"
              />
            </div>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.news2}
                title="Dividends of Democracy Awards Debuts in Abuja"
                link="https://www.naijalivetv.com/dividends-of-democracy-awards-debuts-in-abuja/"
              />
            </div>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.news2}
                title="Dividends Of Democracy Awards debuts"
                link="https://guardian.ng/news/dividends-of-democracy-awards-debuts/"
              />
            </div>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.news2}
                title="Dividends of democracy award holds in Abuja June 15"
                link="https://www.sunnewsonline.com/dividends-of-democracy-award-holds-in-abuja-june-15/"
              />
            </div>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.rufus}
                title="Group urges Nigerians to vote against anti people politicians, policies."
                link="https://thelaurel.com.ng/group-urges-nigerians-to-vote-against-anti-people-politicians-policies/"
              />
            </div>
          </Grid>
        </Container>
      </div>

      <div
        className="tableholder"
        style={{
          height: "",
          //  background: "red",
          padding: "14px",
          textAlign: " ",
          boxShadow: " 1px 1px 3px #888888",
        }}
      >
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              href="/"
              label="Home"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb
              component="a"
              href="/category/1"
              label="Category"
            />
            <StyledBreadcrumb label="LGAs" deleteIcon={<ExpandMoreIcon />} />
          </Breadcrumbs>
        </div>

        <div>
          <br />
          <h4
            style={{
              // color: "rgb(24, 138, 76)",
              color: "grey",
              fontSize: "10",
            }}
          >
            {" "}
            Which Senatoral district do you think deserves the Legacy Award?
          </h4>
        </div>

        <div>
          {/* <div className="sticky"></div> */}
          <div
            className="stickyX"
            style={{
              height: " ",
              backgroundColor: " ",
              padding: " ",
              zIndex: "10000",
            }}
          >
            <SearchInput
              className="sticky"
              style={{ zIndex: "10000" }}
              // className="search-input"
              onChange={(e) => {
                searchUpdated(e);
              }}
            />
          </div>{" "}
          <div
            className="sticky2"
            style={{
              height: "60px",
              backgroundColor: " ",
              padding: " ",
              zIndex: "10000",
            }}
          >
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem button>
                <b style={{ float: "left", color: " " }}>Senatoral districts</b>
                <ListItemText style={{ fontWeight: "bold" }} primary=" " />

                <b style={{ float: "right", color: " " }}>Votes</b>
              </ListItem>
              <Divider />
            </List>
          </div>
          <div className=" ">
            {filteredEmails.map((e) => {
              let id = e.id;
              // let vote = vote_count.filter((e) => e.voted == id).length
              let vote = "";
              if (loading === false) {
                if (vote_count === null) {
                  vote = "-/-";
                } else {
                  vote = vote_count.filter((e) => e.voted == id).length;
                }
              }
              return (
                <List sx={style} component="nav" aria-label="mailbox folders">
                  <Link
                    style={{ textDecoration: "none", color: "gray" }}
                    to={`/vote/senators/${id}`}
                  >
                    <ListItem button>
                      <ListItemText primary={e.Label} />
                      {/* <ListItemText primary={e.state} /> */}
                      <span style={{ float: "right", color: "grey" }}>
                        {loading === true ? "..." : <>{vote}</>}
                      </span>
                    </ListItem>
                  </Link>
                  <Divider />
                </List>
              );
            })}
          </div>
        </div>

        <br />
        <br />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Label;

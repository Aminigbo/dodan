import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { useCategory } from "../context/CategoryContext";
import "../static/css/index.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import images from "../static/images/governors/govImages";
import Autosuggest from "react-autosuggest";
import { supabase } from "../config/index";



import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


function Govs() {
  const new_supabase = supabase();
  const languages = [
    {
      name: "C",
      year: 1972,
    },
    {
      name: "Elm",
      year: 2012,
    },
  ];


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

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : languages.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion) => suggestion.name;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  const [state, setState] = useState({
    value: "",
    suggestions: [],
  });

  const onChange = (event, { newValue }) => {
    setState({
      ...state,
      value: newValue,
    });
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setState({
      ...state,
      suggestions: getSuggestions(value),
    });
  };

  const onSuggestionsClearRequested = () => {
    setState({
      ...state,
      suggestions: [],
    });
  };

  // let inputProps = {
  //   placeholder: "Type a programming language",
  //   value:state.value,
  //   onChange: onChange,
  // };

  const { id } = useParams();
  const { categoryState } = useCategory();
 
  const [vote_count, setVote_count] = useState("");
  const [loading, setLoading] = useState(true);

  function getVotes(userId) {
    console.log("Loading");
    new_supabase
      .from("votes")
      .select("*")
      .eq(`category`, 'governors')
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

  const allStates = [
    {
      state: "Abia",
      gov: "Okezie Ikpeazu",
      id: 1,
      image: images.Abia,
    },
    {
      state: "Adamawa",
      gov: "Ahmadu Umaru",
      id: 2,
      image: images.Adamawa,
    },
    {
      state: "Akwa Ibom",
      gov: "Udom Gabriel E.",
      id: 3,
      image: images.Akwaibom,
    },
    {
      state: "Anambra",
      gov: "Charles C. S.",
      id: 4,
      image: images.Anambra,
    },
    {
      state: "Bauchi",
      gov: "Bala Muhammed",
      id: 5,
      image: images.Bauchi,
    },
    {
      state: "Bayelsa",
      gov: "Douye Diri",
      id: 6,
      image: images.Bayelsa,
    },
    {
      state: "Benue",
      gov: "Samuel Ortom",
      id: 7,
      image: images.Benue,
    },
    {
      state: "Borno",
      gov: "Babagana Umara Z.",
      id: 8,
      image: images.Borno,
    },
    {
      state: "Cross River",
      gov: "Benedict Ayade",
      id: 9,
      image: images.CrossRivers,
    },
    {
      state: "Delta",
      gov: "Ifeanyi Okowa",
      id: 10,
      image: images.Delta,
    },
    {
      state: "Ebonyi",
      gov: "Dave Umahi",
      id: 11,
      image: images.Ebonyi,
    },
    {
      state: "Edo",
      gov: "Godwin Obaseki",
      id: 12,
      image: images.Edo,
    },
    {
      state: "Ekiti",
      gov: "Kayode Fayemi",
      id: 13,
      image: images.Ekiti,
    },
    {
      state: "Enugu",
      gov: "Ifeanyi Ugwuanyi",
      id: 14,
      image: images.Enugu,
    },
    {
      state: "Gombe",
      gov: "Hope Uzodinma",
      id: 15,
      image: images.Gombe,
    },
    {
      state: "Imo",
      gov: "Mohammed B. A.",
      id: 16,
      image: images.Imo,
    },
    {
      state: "Jigawa State",
      gov: "Mohammed B. A.",
      id: 17,
      image: images.Jigawa,
    },
    {
      state: "Kaduna",
      gov: "N. A. el-Rufai",
      id: 18,
      image: images.Kaduna,
    },
    {
      state: "Kano",
      gov: "Abdullahi U. G.",
      id: 19,
      image: images.Kano,
    },
    {
      state: "Katsina",
      gov: "Aminu Bello Masari",
      id: 20,
      image: images.Katsina,
    },
    {
      state: "Kebbi",
      gov: "Abubakar Atiku B.",
      id: 21,
      image: images.Kebbi,
    },
    {
      state: "Kogi",
      gov: "Yahaya Bello",
      id: 22,
      image: images.Kogi,
    },
    {
      state: "Kwara",
      gov: "AbdulRahman A",
      id: 23,
      image: images.Kwara,
    },
    {
      state: "Lagos",
      gov: "Babajide S.",
      id: 24,
      image: images.Lagos,
    },
    {
      state: "Nasarawa",
      gov: "Abdullahi Sule",
      id: 25,
      image: images.Nasarawa,
    },
    {
      state: "Niger",
      gov: "Abubakar Sani B.",
      id: 26,
      image: images.Niger,
    },
    {
      state: "Ogun",
      gov: "Dapo Abiodun",
      id: 27,
      image: images.Ogun,
    },
    {
      state: "Ondo",
      gov: "Oluwarotimi O. A.",
      id: 28,
      image: images.Ondo,
    },
    {
      state: "Osun",
      gov: "Adegboyega O.",
      id: 29,
      image: images.Osun,
    },
    {
      state: "Oyo",
      gov: "Oluwaseyi Makinde",
      id: 30,
      image: images.Oyo,
    },
    {
      state: "Plateau",
      gov: "Simon Lalong",
      id: 31,
      image: images.Plateau,
    },
    {
      state: "Rivers",
      gov: "Ezenwo N. Wike",
      id: 32,
      image: images.Rivers,
    },
    {
      state: "Sokoto",
      gov: "Aminu Waziri T.",
      id: 33,
      image: images.Sokoto,
    },
    {
      state: "Taraba",
      gov: "Darius Ishaku",
      id: 34,
      image: images.Taraba,
    },
    {
      state: "Yobe",
      gov: "Mai Mala Buni",
      id: 35,
      image: images.Yobe,
    },
    {
      state: "Zamfara",
      gov: "Bello Matawalle",
      id: 36,
      image: images.Zamfara,
    },
    {
      state: "FCT Abuja",
      gov: "Bello Mohammed",
      id: 37,
      image: images.Abuja,
    },
  ];

  const voteCOunt = [
    {
      id: 1,
      vote: 443,
    },
    {
      id: 2,
      vote: 543,
    },
    {
      id: 3,
      vote: 333,
    },
    {
      id: 4,
      vote: 34,
    },
    {
      id: 5,
      vote: 543,
    },
    {
      id: 6,
      vote: 43,
    },
    {
      id: 7,
      vote: 43,
    },
    {
      id: 8,
      vote: 32,
    },
    {
      id: 9,
      vote: 332,
    },
    {
      id: 10,
      vote: 543,
    },
    {
      id: 11,
      vote: 332,
    },
    {
      id: 12,
      vote: 732,
    },
    {
      id: 13,
      vote: 889,
    },
    {
      id: 14,
      vote: 543,
    },
    {
      id: 15,
      vote: 543,
    },
    {
      id: 16,
      vote: 55,
    },
    {
      id: 17,
      vote: 543,
    },
    {
      id: 18,
      vote: 445,
    },
    {
      id: 19,
      vote: 443,
    },
    {
      id: 20,
      vote: 342,
    },
    {
      id: 21,
      vote: 543,
    },
    {
      id: 22,
      vote: 54,
    },
    {
      id: 23,
      vote: 54,
    },
    {
      id: 24,
      vote: 43,
    },
    {
      id: 25,
      vote: 54,
    },
    {
      id: 26,
      vote: 334,
    },
    {
      id: 27,
      vote: 121,
    },
    {
      id: 28,
      vote: 32,
    },
    {
      id: 29,
      vote: 22,
    },
    {
      id: 30,
      vote: 332,
    },
    {
      id: 31,
      vote: 33,
    },
    {
      id: 32,
      vote: 998,
    },
    {
      id: 33,
      vote: 443,
    },
    {
      id: 34,
      vote: 223,
    },
    {
      id: 35,
      vote: 333,
    },
    {
      id: 36,
      vote: 434,
    },
    {
      id: 37,
      vote: 32,
    },
  ];

  return (
    <>
      {/* {loading === false && <>{console.log(vote_count)}</>} */}
      <NavigationBar />

      <div
        style={{
          height: "",
          //  background: "red",
          padding: "14px",
          textAlign: " center",
        }}
      >
        <br />

         <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              href="/"
              label="Home"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb component="a" href="/category/1" label="Category" />
            <StyledBreadcrumb
              label="Governors"
              deleteIcon={<ExpandMoreIcon />} 
            />
          </Breadcrumbs>
        </div>


        <div
          style={{
            color: "rgb(24, 138, 76)",
          }}
        >
         <h2> Which governor do you think deserves the Legacy Award?</h2>
        </div>
        <br /><br />
        {loading === true && (
          <>
            <div
              style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                left: "0px",
                top: "0px",
                background: "rgb(0,0,0,0.8)",
                zIndex: "10000",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "40%",
                  left: "30%",
                  top: "50%",
                  color: "white",
                }}
              >
                Please wait....
              </div>
            </div>
          </>
        )}

        <>
          {allStates.map((e) => {
            let id = e.id;
            // let vote = vote_count.filter((e) => e.voted == id).length
             let vote = "";
              if (loading === false) {
                if (vote_count === null) {
                  vote = "error";
                } else {
                  vote = vote_count.filter((e) => e.voted == id).length;
                }
            }
            let port = '';
            if (e.state == "FCT Abuja") {
              port = "Minister of "+ e.state;
            } else {
              port = e.state+" state governor"
            }

            return (
              <>
                <Link
                  to={`/vote/governors/${id}`}
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  <Card style={{ display: "inline-block" }} className="card">
                    <CardMedia
                      className="img"
                      style={{ objectFit: "fill" }}
                      component="img"
                      alt="green iguana"
                      height="160"
                      image={e.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="p" component="div">
                        {e.gov}
                      </Typography>
                      <small>{port}</small>
                    </CardContent>
                    <CardActions>
                      {loading === true ? (
                        <>
                          {" "}
                          <Button
                            style={{
                              backgroundColor: "rgb(24, 138, 76)",
                              color: "white",
                            }}
                            size="small"
                          >
                            loading...
                          </Button>
                        </>
                      ) : (
                        <>
                          {" "}
                          <Button
                            style={{
                              backgroundColor: "rgb(24, 138, 76)",
                              color: "white",
                            }}
                            size="small"
                            >
                              {vote_count === null ?<><small style={{fontSize:"9px", color:"gold"}}>Network error</small></>:<>{vote < 1 ? (
                              "0 Vote"
                            ) : (
                              <>{vote == 1 ? "1 Vote" : <>{vote} votes</>}</>
                            )}</>}
                            
                          </Button>
                        </>
                      )}
                      {/* <Button size="small">Learn More</Button> */}
                    </CardActions>
                  </Card>
                </Link>
              </>
            );
          })}
        </>
      </div>
      <Footer />
    </>
  );
}

export default Govs;

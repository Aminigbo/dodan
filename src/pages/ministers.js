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
import images from "../static/images/ministers/ministerimg";
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

  const { setVoteModalDisplay } = useCategory();
  const [vote_count, setVote_count] = useState("");
  const [loading, setLoading] = useState(true);

  function getVotes(userId) {
    console.log("Loading");
    new_supabase
      .from("votes")
      .select("*")
      // .eq(`user`, userId)
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
      state: "Petroleum",
      gov: "Muhammadu Buhari",
      id: 1,
      image: images.petroleum,
    },
    {
      state: "FCT Abuja",
      gov: "Mohammed M. Bello",
      id: 2,
      image: images.fct,
    },
    {
      state: "Niger Delta",
      gov: "Godswill Akpabio",
      id: 3,
      image: images.niger_delta,
    },
    {
      state: "Labour/Empl.",
      gov: "Chris Ngige",
      id: 4,
      image: images.labour,
    },
    {
      state: "State, Environment",
      gov: "Sharon Ikeazor",
      id: 5,
      image: images.environment,
    },
    {
      state: "Minister of Education",
      gov: "Adamu Adamu",
      id: 6,
      image: images.education,
    },
    {
      state: "State Industry",
      gov: "Amb. Maryam Katagum",
      id: 7,
      image: images.industry,
    },
    {
      state: "State for Petroleum",
      gov: "Timipre Sylva ",
      id: 8,
      image: images.state_petroleum,
    },
    {
      state: "Special Duties",
      gov: "George Akume",
      id: 9,
      image: images.special_duties,
    },
    {
      state: "Agric/Rural Dev.",
      gov: "Mustapha Baba S.",
      id: 10,
      image: images.agric,
    },
    {
      state: "State, for Power",
      gov: "Goddy Jedy Agba",
      id: 11,
      image: images.state_power,
    },
    {
      state: "State, for Niger Delta",
      gov: "Festus Keyamo",
      id: 12,
      image: images.state_niger_delta,
    },
    {
      state: "Science and Technology",
      gov: "Ogbonnaya Onu",
      id: 13,
      image: images.science,
    },
    {
      state: "Minister of Health",
      gov: "Osagie Ehanire",
      id: 14,
      image: images.health,
    }, 
    {
      state: "Industry, Trade and Investment",
      gov: "Richard A. Adebayo",
      id: 16,
      image: images.industry,
    },
    {
      state: "Foreign Affairs",
      gov: "Geoffrey Onyeama",
      id: 17,
      image: images.foreign,
    },
    {
      state: "Communication",
      gov: "Ali Isa Pantami",
      id: 18,
      image: images.communication,
    },
    {
      state: "State for Education",
      gov: "Emeka Nwajiuba",
      id: 19,
      image: images.state_education,
    },
    {
      state: "Water Resources",
      gov: "Suleiman Adamu ",
      id: 20,
      image: images.water,
    },
    {
      state: "Finance",
      gov: "Zainab Ahmed",
      id: 21,
      image: images.finance,
    },
    {
      state: "Environment",
      gov: "Muhammad Mahmood",
      id: 22,
      image: images.environment,
    },
    // {
    //   state: "Agriculture and Rural Development",
    //   gov: "Sabo Nanono",
    //   id: 23,
    //   image: images.Kwara,
    // },
    {
      state: "Defence",
      gov: "Bashir Salihi Magashi",
      id: 24,
      image: images.defence,
    },
    {
      state: "Aviation",
      gov: "Hadi Sirika",
      id: 25,
      image: images.aviation,
    },
    {
      state: "Justice/A.G of the Federation",
      gov: "Abubakar Malami",
      id: 26,
      image: images.justice,
    },
    {
      state: "State, Federal Capital Territory (FCT)",
      gov: "Ramatu Tijjani",
      id: 27,
      image: images.state_fct,
    },
    {
      state: "Information and Culture",
      gov: "Lai Mohammed",
      id: 28,
      image: images.information,
    },
    {
      state: "State, Transportion",
      gov: "Gbemisola Saraki",
      id: 29,
      image: images.state_transportation,
    },
    {
      state: "Works and Housing",
      gov: "Babatunde Fashola",
      id: 30,
      image: images.works,
    },
    {
      state: "State for Health",
      gov: "Adeleke Mamora",
      id: 31,
      image: images.state_health,
    },
    {
      state: "State, Science and Technology",
      gov: "Mohammed H. A.",
      id: 32,
      image: images.state_science,
    },
    {
      state: "State, Foreign Affairs",
      gov: "Zubair Dada",
      id: 33,
      image: images.state_foreign,
    },
    {
      state: "Mines and Steel Development",
      gov: "Olamilekan Adegbite",
      id: 34,
      image: images.mines,
    },
    {
      state: "State, Labour and Employment",
      gov: "Tayo Alasoadura",
      id: 35,
      image: images.state_labour,
    },
    {
      state: "Interior",
      gov: "Rauf Aregbesola",
      id: 36,
      image: images.interior,
    },
    {
      state: "Youth and Sports",
      gov: " Sunday Dare",
      id: 37,
      image: images.youth,
    },{
      state: "Women Affairs",
      gov: "Paulen Tallen",
      id: 37,
      image: images.women,
    },{
      state: "Transportation",
      gov: "Rotimi Amaechi",
      id: 37,
      image: images.transport,
    },{
      state: "Police Affairs",
      gov: "Maigari Dingyadi",
      id: 37,
      image: images.police,
    },{
      state: "Power",
      gov: " Sale Mamman",
      id: 37,
      image: images.power,
    },{
      state: "State, Works and Housing",
      gov: "Abubakar D. Aliyu",
      id: 37,
      image: images.state_works,
    },{
      state: "Humanitarian Affairs, Disaster Management",
      gov: " Sadiya Umar Faruk",
      id: 37,
      image: images.humaniterian,
    },{
      state: "State Mines and Steel",
      gov: " Dr. Ikechukwu Ogah",
      id: 37,
      image: images.state_mines,
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
              label="Ministers"
              deleteIcon={<ExpandMoreIcon />} 
            />
          </Breadcrumbs>
          </div>
        <div
          style={{
            color: "rgb(24, 138, 76)",
          }}
        >
         <h2> Which Minister do you think deserves the Legacy Award?</h2>
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
            return (
              <>
                <Link
                  to={`/vote/ministers/${id}`}
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
                      <Typography gutterBottom variant="h" component="div">
                        {e.gov}
                      </Typography>
                      <small>Minister of {e.state}</small>
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

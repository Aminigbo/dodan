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
import role_model_images from "../static/images/role-model/role-model-image";
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
      .eq(`category`, 'role-model')
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
      state: "Dr. Dakuku Peterside",
      gov: "Fmr. Director General, NIMASA",
      id: 1,
      image:role_model_images.one,
    },
    {
      state: "Dr. Donald Duke",
      gov: "Fmr. Governor, Cross River State",
      id: 2,
      image:role_model_images.two,
    },
    {
      state: "Dr. Ngozi Okonjo-Iewala",
      gov: "Fmr. Minister of finance",
      id: 3,
      image:role_model_images.three,
    },
    {
      state: "Dr. Oboageli Ezekwesili",
      gov: "Former. Minister of Education",
      id: 4,
      image:role_model_images.four,
    },
    {
      state: "Dr. Peter Obi",
      gov: "Fmr. Governor of Anambra State",
      id: 5,
      image:role_model_images.five,
    },
    {
      state: "H.R.H. Sanusi Lamido Sanusi",
      gov: "Fmr. CBN Governor",
      id: 6,
      image:role_model_images.six,
    },
    {
      state: "Prof. Akinwumi Adesina",
      gov: "Former. Minister of Agriculture",
      id: 7,
      image:role_model_images.seven,
    },
    {
      state: "Prof. Charlse C. Soludo",
      gov: "Former Governor Central Bank of Nigeria",
      id: 8,
      image:role_model_images.eight,
    },
    {
      state: "Prof. Dora Akunyili",
      gov: "Fmr. Director General, NAFDAC",
      id: 9,
      image:role_model_images.nine,
    },
    {
      state: "Proffesor Ishaq Oloyede",
      gov: "Current JAMB Registrar",
      id: 10,
      image:role_model_images.ten,
    },
    {
      state: "Reno Omokri",
      gov: "SA to Fmr.President G.E Jonathan",
      id: 11,
      image:role_model_images.eleven,
    },
    {
      state: "Rt. Hom. Rotimi Chibuike Amaechi",
      gov: "Fmr. Governor Rivers State",
      id: 12,
      image:role_model_images.twelve,
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
            <StyledBreadcrumb
              component="a"
              href="/category/1"
              label="Category"
            />
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
          <h2>Role model of democracy</h2>
        </div>
        <br />
        <br />
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
                  to={`/vote/role-model/${id}`}
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
                        {e.state}
                      </Typography>
                      <small>{e.gov}</small>
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
                            {vote_count === null ? (
                              <>
                                <small
                                  style={{ fontSize: "9px", color: "gold" }}
                                >
                                  Network error
                                </small>
                              </>
                            ) : (
                              <>
                                {vote < 1 ? (
                                  "0 Vote"
                                ) : (
                                  <>
                                    {vote == 1 ? "1 Vote" : <>{vote} votes</>}
                                  </>
                                )}
                              </>
                            )}
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

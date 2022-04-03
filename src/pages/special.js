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
import role_model_images from "../static/images//special/special";
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

  
 
  const allStates = [
    {
      state: "Dr. Goodluck Jonathan",
      gov: "Fmr. President, Federal Republic of Nigeria",
      id: 1,
      image:role_model_images.one,
    }, {
      state: "Dr. Patience Jonathan",
      gov: "Fmr. First Lady, Federal Republic of Nigeria",
      id: 2,
      image:role_model_images.two,
    },
    {
      state: "Gen. Abdusalami Abubakar",
      gov: "Fmr. Head Of State, Nigeria",
      id: 3,
      image:role_model_images.three,
    },
    {
      state: "H.E. Olusegun Obasanjo",
      gov: "Fmr. President, Federal Republic of Nigeria",
      id: 4,
      image:role_model_images.four,
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

         
        <div
          style={{
            color: "rgb(24, 138, 76)",
          }}
        >
          <h2>The award is meant for very outstanding individuals</h2>
        </div>
        <br />
        <br />
         

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
                  </Card>
                </Link>
              </>
            );
          })}
        </>
        </div>
        <br /><br />
      <Footer />
    </>
  );
}

export default Govs;

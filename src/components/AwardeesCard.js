import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ContainedButton from "./ContainedButton";
import { Link } from "react-router-dom";

function AwardeesCard({ image, name, post, id }) {
  const useStyles = makeStyles({
    container: {
      width: "100%",
      height: "auto",
      overflow: "hidden",
      borderRadius: "5px 5px 5px 5px",
      transition: ".3s ease-in",
      "& img": {
        width: "100%",
        height: "320px",
        objectFit: "cover",
        borderRadius: "5px 5px 5px 5px",
        transition: ".3s ease-in",
      },
      "& h3": {
        fontWeight: 500,
        fontSize: 24,
        padding: "5px 0",
        transition: ".3s ease-in",
      },
      "& p": {
        fontWeight: 300,
        fontSize: 18,
        transition: ".3s ease-in",
      },
      "& div": {
        opacity: "0",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "10px 0 10px 0",
        transition: ".3s ease-in",
      },
      "&:hover": {
        boxShadow: "1px 1px 30px #8080804f",
        "& img": {
          width: "100%",
          height: "270px",
          objectFit: "cover",
          borderRadius: "5px 5px 0 0",
        },
        "& div": {
          opacity: "1",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "10px 0 10px 0",
        },
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={image} alt="" />
      <Typography variant="h6" align="center" component="h3">
        {name}
      </Typography>
      <Typography variant="body1" align="center" component="p">
        {post}
      </Typography>
      <div>
        <Link to={`/category/${id}`}>
          <ContainedButton
            text={"Enter"}
            textStyle={{ color: "#fff" }}
            styles={{ backgroundColor: "#188A4C" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default AwardeesCard;

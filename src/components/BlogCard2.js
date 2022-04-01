import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function BlogCard({ image, title, link }) {
  const useStyles = makeStyles({
    container: {
      width: "100%",
      height: "auto",
      borderRadius: "5px",
      overflow: "hidden",
      // background: "red",
      margin: "10px 0px",
      transition: ".3s ease-in",
      "& button": {
        backgroundColor: "#188A4C",
        padding: "7px 30px",
        borderRadius: "5px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        cursor: "pointer",
        margin: "10px 0",
        border: "1px solid #188A4C",
        transition: ".3s ease-in",
        "& p": {
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: ".3s ease-in",
        },
        "&:hover": {
          backgroundColor: "#fff",
          padding: "7px 30px",
          border: "1px solid #188A4C",
          borderRadius: "5px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
          cursor: "pointer",
          margin: "10px 0",
          transition: ".3s ease-in",
          "& p": {
            color: "#188A4C",
            transition: ".3s ease-in",
          },
        },
      },
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        src={image}
        alt=""
        style={{ width: "100%", height: " ", objectFit: "fit" }}
      />
      <Typography
        variant="body2"
        style={{ fontSize: 12, fontWeight: 600, padding: "10px 0 10px 0" }}
      >
        {title}
      </Typography>
      <a href={link} target="__blank">
        <button>
          <Typography variant="body1">
            Read More <ArrowRightAltIcon style={{ marginLeft: "6px" }} />
          </Typography>
        </button>
      </a>
    </div>
  );
}

export default BlogCard;

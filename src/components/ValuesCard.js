import React from "react";
import { Paper, Typography } from "@mui/material";

function ValuesCard({ title, text, image }) {
  return (
    <Paper
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#71C798",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={image}
          alt=""
          style={{ width: "20%", height: "auto", margin: "20px auto" }}
        />
      </div>
      <Typography
        variant="h6"
        align="center"
        color="white"
        style={{
          padding: "10px 20px 10px 20px",
          fontSize: 22,
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="white"
        style={{
          padding: "10px 15px 15px 15px",
          fontSize: 16,
          //   lineHeight: 19.2,
        }}
      >
        {text}
      </Typography>
    </Paper>
  );
}

export default ValuesCard;

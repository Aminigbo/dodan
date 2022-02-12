import React from "react";
import { Typography } from "@mui/material";

function NomineeCard({ name, title, image }) {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "130px",
            height: "130px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
      <Typography
        variant="h6"
        style={{ fontSize: "20px", fontWeight: "600", paddingBottom: "1px" }}
        align="center"
      >
        {name}
      </Typography>
      <Typography
        variant="body1"
        // style={{ fontSize: "16px", fontWeight: "300" }}
        align="center"
      >
        {title}
      </Typography>
    </div>
  );
}

export default NomineeCard;

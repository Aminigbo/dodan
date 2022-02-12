import React from "react";
import { Typography } from "@mui/material";

function ContainedButton({ styles, text, textStyle }) {
  return (
    <button
      style={{
        padding: "7px 30px",
        border: "none",
        borderRadius: "5px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        cursor: "pointer",
        ...styles,
      }}
    >
      <Typography variant="body1" style={{ ...textStyle }}>
        {text}
      </Typography>
    </button>
  );
}

export default ContainedButton;

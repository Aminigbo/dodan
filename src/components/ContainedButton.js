import React from "react";
import { Typography } from "@mui/material";

function ContainedButton({ styles, text, textStyle, onClick, disabled, cursor }) {
  return (
    <button
      style={{
        padding: "7px 20px",
        border: "none",
        borderRadius: "5px",
        margin:"6px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        cursor: cursor || "pointer",
        ...styles,
      }}
      onClick={onClick}
      disabled={disabled || false}
    >
      <Typography variant="body1" style={{ ...textStyle }}>
        {text}
      </Typography>
    </button>
  );
}

export default ContainedButton;

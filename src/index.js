import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import CategoryContextProvider from "./context/CategoryContext";

const theme = createTheme({
  typography: {
    fontFamily: ['"Lato"', "san-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#188A4C",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

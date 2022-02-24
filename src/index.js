import React from "react";
import ReactDOM from "react-dom";
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@mui/private-theming";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App.tsx";
import "./i18n";
import "./index.css";
import "./colors.css";

const primaryColor = "#4D6A8E";
const secondaryColor = "#282828";
const fontFamily = "montserrat, sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily,
    fontSize: 12,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

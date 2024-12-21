import { createTheme } from "@mui/material";

const muiTheme = () =>
  createTheme({
    palette: {
      common: {
        black: "rgba(47, 53, 66,1.0)",
        white: "#fff",
      },
      primary: {
        main: "rgba(55, 66, 250,1.0)",
      },
      secondary: {
        main: "rgba(116, 125, 140,.8)",
      },
      success: {
        main: "rgba(46, 213, 115,1.0)",
      },
      error: {
        main: "rgba(255, 99, 72,1.0)",
      },
      warning: {
        main: "rgba(255, 165, 2,1.0)",
      },
    },
  });

export default muiTheme;

import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import "./static/fonts/fonts.css";
import cursor from "./static/images/cursor.png";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {}

  interface ThemeOptions {}
}

const darkTheme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    type: "dark",
    primary: {
      light: "rgba(229,34,49,0.86)",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    secondary: {
      main: "#f48fb1",
      light: "rgb(246, 165, 192)",
      dark: "rgb(170, 100, 123)",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: "#a3877d",
      secondary: "rgba(86,4,5,0.87)",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#424242",
      default: "#121212"
    },
    action: {
      active: "#fff",
      hover: "rgba(255, 255, 255, 0.1)",
      hoverOpacity: 0.1,
      selected: "rgba(255, 255, 255, 0.2)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)"
    }
  },
  typography: {
    fontFamily: ["Upheaval", "Roboto"].join(",")
  },
  overrides: {
    MuiInput: {
      input: {
        //backgroundColor: "rgba(25, 18, 18, 0.58)",
        fontSize: "120%"
      }
    }
  }
});

const IsaacCssBaseline = withStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "rgb(4,4,4)",
      cursor: `url("${cursor}"), auto`,
      scrollBehavior: "smooth"
    },
    "*::-webkit-scrollbar": {
      background: "transparent",
      width: "8px"
    },
    "*::-webkit-scrollbar-thumb": {
      background: "#3d2e27"
    },
    // todo fix the mozilla scrollbar
    ".scroller": {
      width: "50px",
      scrollbarColor: "rebeccapurple green",
      scrollbarWidth: "thin"
    }
  }
}))(() => null);

const ThemeConfiguration = (props: { children }) => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <IsaacCssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};

export default ThemeConfiguration;

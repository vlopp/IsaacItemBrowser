import React from "react";
import ReactDOM from "react-dom";
import App from "$root/App";
import StoreConfiguration from "$redux/StoreConfiguration";
import ThemeConfiguration from "$root/ThemeConfiguration";
import { CssBaseline, withStyles } from "@material-ui/core";

ReactDOM.render(
  <ThemeConfiguration>
    <StoreConfiguration>
      <App />
    </StoreConfiguration>
  </ThemeConfiguration>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "$root/App";
import StoreConfiguration from "$redux/StoreConfiguration";
import ThemeConfiguration from "$root/ThemeConfiguration";
import { CssBaseline, withStyles } from "@material-ui/core";

ReactDOM.render(
  <CssBaseline>
    <ThemeConfiguration>
      <StoreConfiguration>
        <App />
      </StoreConfiguration>
    </ThemeConfiguration>
  </CssBaseline>,
  document.getElementById("root")
);

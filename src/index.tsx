import React from "react";
import ReactDOM from "react-dom";
import App from "$root/App";
import StoreConfiguration from "$redux/StoreConfiguration";
import ThemeConfiguration from "$root/ThemeConfiguration";
import { CssBaseline, withStyles } from "@material-ui/core";
import { IsaacContextProvider } from "$root/IsaacContext";

ReactDOM.render(
  <CssBaseline>
    <ThemeConfiguration>
      <StoreConfiguration>
        <IsaacContextProvider>
          <App />
        </IsaacContextProvider>
      </StoreConfiguration>
    </ThemeConfiguration>
  </CssBaseline>,
  document.getElementById("root")
);

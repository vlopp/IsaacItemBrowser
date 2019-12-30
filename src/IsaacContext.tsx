import React, { createContext } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";

export const IsaacContext = createContext({
  isSmallVersion: false
});

export const IsaacContextProvider = ({ children }) => {
  const theme = useTheme();
  const isSmallVersion = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <IsaacContext.Provider value={{ isSmallVersion }}>
      {children}
    </IsaacContext.Provider>
  );
};

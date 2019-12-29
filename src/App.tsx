import React, { useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { Box } from "@material-ui/core";
import ItemIcon from "$root/components/ItemIcon";
import { useDispatch, useSelector } from "react-redux";
import { filterItems } from "$redux/actions/filterItems";
import { Store } from "$redux/store/Store";
import { ItemDescription } from "$root/components/ItemDescription";
import { TopBar } from "$root/components/TopBar";
import { ItemGrid } from "$root/components/ItemGrid";
import { Background } from "$root/components/Background";

const useStyles = makeStyles(theme => ({
  grid: {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    height: "100vh"
    //gridTemplateColumns:""
  },
  mainGrid: {
    overflow: "hidden"
  },
  itemDesc: {
    padding: theme.spacing(2),
    overflowY: "scroll",
    height: "100%",
    flexWrap: "wrap",
    direction: "rtl",
    justifyContent: "center"
  },
  itemGrid: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    height: "100%",
    overflowY: "scroll",
    justifyContent: "flex-start",
    alignContent:"flex-start",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    }
  },
  bar: {
    padding: theme.spacing(1)
  }
}));

const App = () => {
  const styles = useStyles();

  return (
    <>
      <Background />
      <div className={styles.grid}>
        <TopBar />
        <Grid container className={styles.mainGrid}>
          <Grid className={styles.itemDesc} item container xs={12} sm={3}>
            <ItemDescription />
          </Grid>
          <Grid className={styles.itemGrid} item container xs={12} sm={9}>
            <ItemGrid />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default App;

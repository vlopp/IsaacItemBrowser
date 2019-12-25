import React, { useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography
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
  itemDesc: {
    padding: theme.spacing(2)
  },
  itemGrid: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4)
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
      <Grid style={{ height: "100%" }} container>
        <Grid item xs={12} className={styles.bar}>
          <TopBar />
        </Grid>
        <Grid container></Grid>
        <Grid className={styles.itemDesc} item xs={12} sm={3}>
          <ItemDescription />
        </Grid>
        <Grid className={styles.itemGrid} item xs={12} sm={9}>
          <ItemGrid />
        </Grid>
      </Grid>
    </>
  );
};

export default App;

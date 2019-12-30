import React, { useContext, useEffect, useState } from "react";
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
import { IsaacContext } from "$root/IsaacContext";
import { useIsaacContext } from "$root/useIsaacContext";

// @ts-ignore
const useStyles = makeStyles<>(theme => ({
  grid: props => ({
    display: "grid",
    gridTemplateRows: "auto auto 1fr",
    gridTemplateColumns: "25% 1fr",
    height: "100vh",
    gridTemplateAreas: props.isSmallVersion
      ? `
    "searchBar searchBar"
    "itemGrid itemGrid"
    "itemGrid itemGrid"
    `
      : `"itemDescription searchBar"
    "itemDescription itemGrid"
    "itemDescription itemGrid"
    `
    //gridTemplateColumns:""
  }),
  mainGrid: {
    overflow: "hidden"
  },
  bar: {
    padding: theme.spacing(1)
  }
}));

const App = () => {
  const { isSmallVersion } = useIsaacContext();
  const styles = useStyles({ isSmallVersion });

  const describedItem = useSelector((store: Store) => store.describedItem);

  return (
    <>
      <Background zIndex={-666} />
      <div className={styles.grid}>
        <TopBar />
        {(!isSmallVersion || describedItem !== "") && <ItemDescription />}
        <ItemGrid />
      </div>
    </>
  );
};

export default App;

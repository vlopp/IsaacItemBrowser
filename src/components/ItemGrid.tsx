import React, { useMemo } from "react";
import ItemIcon from "$root/components/ItemIcon";
import { useSelector } from "react-redux";
import { Store } from "$redux/store/Store";
import { itemNames as itemNamesImport } from "$gameData/gameData";
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { useIsaacContext } from "$root/useIsaacContext";

const itemNames = itemNamesImport;

const useStyles = makeStyles(theme => ({
  itemGrid: props => ({
    padding: props.isSmallVersion ? theme.spacing(0.5) : theme.spacing(2),
    paddingTop: theme.spacing(4),
    height: "100%",
    overflowY: "scroll" as "scroll",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    gridArea: "itemGrid",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    }
  })
}));

export const ItemGrid = () => {
  const currentItems = useSelector((x: Store) => x.currentItems);

  const { isSmallVersion } = useIsaacContext();
  const styles = useStyles({ isSmallVersion });

  const itemsComponents = useMemo(
    () =>
      currentItems.map(itemName => (
        <ItemIcon
          interactive={true}
          key={itemName}
          scale={isSmallVersion ? 1.25 : 2}
          itemName={itemName}
        ></ItemIcon>
      )),
    [currentItems, isSmallVersion]
  );

  return (
    <Box display={"flex"} flexWrap={"wrap"} className={styles.itemGrid}>
      {itemsComponents}
    </Box>
  );
};

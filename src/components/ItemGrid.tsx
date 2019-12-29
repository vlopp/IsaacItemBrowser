import React, { useMemo } from "react";
import ItemIcon from "$root/components/ItemIcon";
import { useSelector } from "react-redux";
import { Store } from "$redux/store/Store";
import { itemNames as itemNamesImport } from "$root/gameData/gameData";
import { Box, useMediaQuery, useTheme } from "@material-ui/core";

const itemNames = itemNamesImport;

export const ItemGrid = () => {
  const currentItems = useSelector((x: Store) => x.currentItems);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box
      display={"flex"}
      justifyContent={isXs ? "center" : "flex-start"}
      flexWrap={"wrap"}
    >
      {currentItems.map(itemName => (
        <ItemIcon key={itemName} scale={2} itemName={itemName}></ItemIcon>
      ))}
    </Box>
  );
};

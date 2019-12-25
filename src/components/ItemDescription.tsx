import React from "react";
import { useSelector } from "react-redux";
import { Store } from "$redux/store/Store";
import { items as itemsImport } from "$gameData/gameData";
import { Box, makeStyles, Typography } from "@material-ui/core";
import ItemIcon from "$root/components/ItemIcon";

const items = itemsImport;

const useStyles = makeStyles(theme => ({
  itemName: {
    fontSize: "300%",
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;",
    lineHeight: "75%",
    color: "#b8b5b3",
    margin: "5px"
  },
  itemShortDescription: {
    fontSize: "150%",
    color: "#8b8886",
    margin: "5px"
  }
}));

export const ItemDescription = () => {
  const describedItemName = useSelector((x: Store) => x.describedItem);

  const styles = useStyles();

  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <ItemIcon scale={2.6} itemName={describedItemName} />
      <Typography align={"center"} className={styles.itemName}>
        {describedItemName}
      </Typography>
      <Typography align={"center"} className={styles.itemShortDescription}>
        {items[describedItemName].shortDescription}
      </Typography>
      <Typography>{`${items[describedItemName].longDescription.effects}\n\n${items[describedItemName].longDescription.notes}`}</Typography>
    </Box>
  );
};

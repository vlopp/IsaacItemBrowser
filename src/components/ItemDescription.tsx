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
    textShadow: "10px 6px 5px black",
    lineHeight: "75%",
    color: "#e3e3e3",
    margin: "5px"
  },
  itemShortDescription: {
    fontSize: "150%",
    color: "#959595",
    margin: "5px",
    textShadow: "5px 4px 5px black"
  },
  ul: {
    alignSelf: "normal"
  },
  silom: {
    fontFamily: "Silom",
      textShadow:"5px 4px 5px black"
  }
}));

export const ItemDescription = () => {
  const describedItem = useSelector((x: Store) => x.describedItem);

  const styles = useStyles();

  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <ItemIcon scale={2.6} itemName={describedItem} />
      <Typography align={"center"} className={styles.itemName}>
        {items[describedItem].readableName}
      </Typography>
      <Typography align={"center"} className={styles.itemShortDescription}>
        {items[describedItem].shortDescription}
      </Typography>
      <ul className={styles.ul}>
        {items[describedItem].longDescription.effects
          .split("\n")
          .filter(x => !/(^$|\n|\t+)/.test(x))
          .map(x => (
            <li key={x}>
              <Typography className={styles.silom}>{x}</Typography>
            </li>
          ))}
      </ul>
      <ul className={styles.ul}>
        {items[describedItem].longDescription.notes
          .split("\n")
          .filter(x => !/(^$|\n|\t+)/.test(x))
          .map(x => (
            <li key={x}>
              <Typography className={styles.silom}>{x}</Typography>
            </li>
          ))}
      </ul>
    </Box>
  );
};

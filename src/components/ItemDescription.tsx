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
    alignSelf: "normal",
    margin: "20px 0px"
  },
  silom: {
    fontFamily: "Silom",
    textShadow: "5px 4px 5px black"
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
        <ListEntry entryString={items[describedItem].longDescription.effects}></ListEntry>

      </ul>
      <ul className={styles.ul}>
          <ListEntry entryString={items[describedItem].longDescription.notes}></ListEntry>
      </ul>
    </Box>
  );
};

const ListEntry = ({ entryString }) => {
  const styles = useStyles();

  return (
    <>
      {entryString
        .split("\n")
        .filter(x => !/(^$|\n|\t+)/.test(x))
        .map(x => (
          <li
              key={x}
            style={
              x.startsWith("  ")
                ? {
                    margin: "4px 5px",
                    marginLeft: `${Math.floor(
                      (/ +/.exec("  ") as any)[0].length / 2
                    ) * 20}px`
                  }
                : { margin: "8px 5px" }
            }
          >
            <Typography className={styles.silom}>{x}</Typography>
          </li>
        ))}
    </>
  );
};

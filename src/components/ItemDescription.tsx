import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "$redux/store/Store";
import { items as itemsImport } from "$gameData/gameData";
import { Box, makeStyles, Typography } from "@material-ui/core";
import ItemIcon from "$root/components/ItemIcon";
import { useIsaacContext } from "$root/useIsaacContext";
import { Background } from "$root/components/Background";
import { describeItem } from "$redux/actions/describeItem";
import { viewItemOnWiki } from "$root/viewItemOnWiki";

const items = itemsImport;

// @ts-ignore
const useStyles = makeStyles(theme => ({
  itemDesc: props => ({
    position: "relative",
    padding: props.isSmallVersion ? theme.spacing(1) : theme.spacing(2),
    overflowY: "scroll",
    flexWrap: "wrap",
    direction: "rtl",
    width: "100%",
    justifyContent: "center",
    gridArea: "itemDescription",
    ...(props.isSmallVersion
      ? {
          position: "absolute",
          zIndex: 666,
          height: "100%"
        }
      : {})
  }),
  mainBox: {
    direction: "ltr"
  },
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

    textShadow: "5px 4px 5px black"
  },
  ul: {
    alignSelf: "normal",
    margin: "0px 0px"
  },
  silom: {
    fontFamily: "Silom",
    textShadow: "5px 4px 5px black"
  },
  itemType: {
    color: "#faebd7"
  },
  xButton: {
    position: "absolute",
    right: "10px",
    top: "5px",
    fontSize: "200%"
  },
  goToWikiButton: {
    top: "5px",
    fontSize: "150%",
    color: "#aa7e5a",
    transition: "transform 0.07s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      transform: `scale(1.2)`,
      transitionTimingFunction: "ease-out",
      transition: "transform 0.07s"
    }
  },
  sectionName: { marginTop: "20px", fontSize: "150%", color: "#c8b7b3" }
}));

export const ItemDescription = () => {
  const describedItem =
    useSelector((x: Store) => x.describedItem) || "Undefined";

  const { isSmallVersion } = useIsaacContext();
  const styles = useStyles({ isSmallVersion });

  const dispatch = useDispatch();
  const xClickedHandler = e => {
    dispatch(describeItem(""));
  };

  const seeOnWikiClickedHandler = e => {
    viewItemOnWiki(describedItem);
  };
  return (
    <>
      {isSmallVersion && <Background zIndex={664} />}
      <div className={styles.itemDesc}>
        {isSmallVersion && (
          <span className={styles.xButton} onClick={xClickedHandler}>
            X
          </span>
        )}
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          className={styles.mainBox}
        >
          <div
            className={styles.goToWikiButton}
            onClick={seeOnWikiClickedHandler}
          >
            See on Wiki
          </div>

          <ItemIcon interactive={false} scale={2.6} itemName={describedItem} />
          <Typography align={"center"} className={styles.itemName}>
            {items[describedItem].readableName}
          </Typography>
          <Typography align={"center"} className={styles.itemShortDescription}>
            {items[describedItem].shortDescription}
          </Typography>
          <Typography align={"center"} className={styles.itemType}>
            {items[describedItem].type}
          </Typography>
          {Object.entries(items[describedItem].longDescription).map(
            ([sectionName, sectionContent]) => (
              <React.Fragment key={sectionName}>
                <Typography className={styles.sectionName}>
                  {sectionName}
                </Typography>
                <ul className={styles.ul}>
                  <ListEntry entryString={sectionContent} />
                </ul>
              </React.Fragment>
            )
          )}
        </Box>
      </div>
    </>
  );
};

const ListEntry = ({ entryString }) => {
  const styles = useStyles();

  const generateStyle = str => {
    if (str.startsWith("  ")) {
      return {
        margin: "4px 5px",
        marginLeft: `${Math.floor((/ +/.exec("  ") as any)[0].length / 2) *
          20}px`
      };
    } else {
      return { margin: "8px 5px" };
    }
  };

  return (
    <>
      {entryString
        .split("\n")
        .filter(x => !/(^$|\n|\t+)/.test(x))
        .map(x => (
          <li key={x} style={generateStyle(x)}>
            <Typography className={styles.silom}>{x}</Typography>
          </li>
        ))}
    </>
  );
};

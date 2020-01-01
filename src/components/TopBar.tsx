import React, { useState } from "react";
import { Box, InputBase, makeStyles, TextField } from "@material-ui/core";
import { filterItems } from "$redux/actions/filterItems";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "$redux/store/Store";
import cursor from "$root/static/images/cursor.png";

const useStyles = makeStyles(theme => ({
  input: {
    color: "black",
    backgroundColor: "transparent",
    border: "none",
    textAlign: "center",
    fontSize: "140%",
    letterSpacing: "2px",
    cursor: `url("${cursor}"), auto`
  },
  pictureDiv: {
    backgroundImage: 'url("https://i.imgur.com/TECtBmf.png")',

    backgroundSize: "100% 100%",
    height: "90px",
    width: "676px",
    margin: "10px",
    padding: "5px 30px",
    maxWidth: "95%",
    cursor: `url("${cursor}"), auto`
  },
  box: {
    gridArea: "searchBar",
    width: "100%"
  }
}));

export const TopBar = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const styles = useStyles();

  const items = useSelector((x: Store) => x.currentItems);

  const tokenizeSearchString = (searchString: string): string[] => {
    const tokensWithSpace = [
      "damage up",
      "spun set",
      "belzebub set",
      "yes mother set",
      "guppy set",
      "leviathan set",
      "bob set",
      "seraphim set",
      "fun guy set",
      "conjoined set",
      "oh crap set",
      "super bum set",
      "bookworm set",
      "spider baby set",
      "stompy set"
    ];

    return searchString
      .split(new RegExp(`(${tokensWithSpace.join("|")}| )`, "g"))
      .filter(phrase => !["", " "].includes(phrase));
  };

  const onChangeHandle = e => {
    setState(e.target.value);
    dispatch(
      filterItems(...tokenizeSearchString(e.target.value.toLowerCase()))
    );
  };

  return (
    <Box display={"flex"} justifyContent={"center"} className={styles.box}>
      <InputBase
        className={styles.pictureDiv}
        placeholder={"XVII: May you find what you desire..."}
        type={"text"}
        onChange={onChangeHandle}
        value={state}
        inputProps={{ className: styles.input }}
      ></InputBase>
    </Box>
  );
};

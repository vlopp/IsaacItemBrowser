import React from "react";
import { makeStyles } from "@material-ui/core";

// @ts-ignore
const useStyles = makeStyles(theme => ({
  root: props => ({
    height: "100%",
    width: "100%",
    backgroundImage: 'url("https://i.imgur.com/e6oKG78.gif")',
    backgroundAttachment: "fixed",
    backgroundPosition: "center 0",
    position: "fixed",
    zIndex: props.zIndex
  }),
  viginette: props => ({
    background:
      "-webkit-radial-gradient(50% 20%,ellipse cover,rgba(255,255,255,0),rgba(8,4,2,.9) 100%)",
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: props.zIndex + 1
  })
}));

export const Background = (props: { zIndex: number }) => {
  const styles = useStyles({ zIndex: props.zIndex });

  return (
    <>
      <div className={styles.root}></div>
      <div className={styles.viginette}></div>
    </>
  );
};

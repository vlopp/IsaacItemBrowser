import React, { useRef } from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import {
  items as itemsImport,
  sprites as spritesImport
} from "$gameData/gameData.js";
import { useDispatch } from "react-redux";
import { describeItem } from "$redux/actions/describeItem";

// todo Generalize browser detection and move it to a more sensible place.
// @ts-ignore
const isMozilla = typeof InstallTrigger !== "undefined";

/* Rebinding for debugging, see https://github.com/webpack/webpack/issues/3957 and https://github.com/babel/babel/issues/1468*/
const items = itemsImport;
const sprites = spritesImport;

type ItemIconProps = {
  itemName: string;
  scale?: number;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const defaultScale = 2;

const useStyles = makeStyles(theme => ({
  root: props => ({
    background: `url(${sprites}) top left no-repeat`,
    backgroundPosition: `-${items[props.itemName].offset}px 0px`,
    height: `32px`,
    width: `32px`,
    transform: `scale(${props.scale})`,
    margin: `${props.scale * 16 - 16}px`,
    imageRendering: isMozilla ? "-moz-crisp-edges" : ("pixelated" as any),
    display: "inline-block",
    transition: "transform 0.07s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      transform: `scale(${props.scale * 1.5})`,
      transitionTimingFunction: "ease-out",
      transition: "transform 0.07s"
    }
  })
}));

const ItemIcon = (props: ItemIconProps) => {
  const { itemName, scale, ...rest } = props;
  const styles = useStyles({ itemName, scale: scale || defaultScale });

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  const dispatch = useDispatch();
  const onMouseDownHandle = e => {
    dispatch(describeItem(itemName));
  };

  const wikiOpen = () => {
    window.open(
      `https://bindingofisaacrebirth.gamepedia.com/${itemName}`,
      "_blank"
    );
  };

  const onAuxClickHandle = e => {
    e.preventDefault();
    wikiOpen();
  };

  const maxDoubleTapInterval = 300; // ms
  const lastTapped = useRef(0);
  const onLostPointerCaptureHandle = e => {
    const now = new Date().getTime();
    if (now - lastTapped.current < maxDoubleTapInterval) {
      wikiOpen();
    } else {
      if (isXs) {
        setTimeout(() => {
          dispatch(describeItem(itemName));
          window.scrollTo(0, 0);
        }, maxDoubleTapInterval);
      }
    }
    lastTapped.current = now;
  };

  return (
    <div
      onLostPointerCapture={onLostPointerCaptureHandle}
      onAuxClick={onAuxClickHandle}
      onMouseDown={onMouseDownHandle}
      {...rest}
      className={styles.root}
    ></div>
  );
};

export default ItemIcon;

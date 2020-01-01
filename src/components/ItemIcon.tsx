import React, { useRef } from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import {
  items as itemsImport,
  sprites as spritesImport
} from "$gameData/gameData";
import { useDispatch } from "react-redux";
import { describeItem } from "$redux/actions/describeItem";
import { viewItemOnWiki } from "$root/viewItemOnWiki";

// todo Generalize browser detection and move it to a more sensible place.
// @ts-ignore
const isMozilla = typeof InstallTrigger !== "undefined";

/* Rebinding for debugging, see https://github.com/webpack/webpack/issues/3957 and https://github.com/babel/babel/issues/1468*/
const items = itemsImport;
const sprites = spritesImport;

type ItemIconProps = {
  itemName: string;
  interactive: boolean;
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
    "&:hover": props.interactive ? {
      transform: `scale(${props.scale * 1.5})`,
      transitionTimingFunction: "ease-out",
      transition: "transform 0.07s"
    } : {}
  })
}));

const ItemIcon = (props: ItemIconProps) => {
  const { itemName, interactive, scale, ...rest } = props;
  const styles = useStyles({ itemName, interactive, scale: scale || defaultScale });

  const dispatch = useDispatch();
  const onClick = e => {
    if (!interactive) return;

    dispatch(describeItem(itemName));
  };

  const onAuxClickHandle = e => {
    if (!interactive) return;

    viewItemOnWiki(itemName);
  };

  return (
    <div
      onAuxClick={onAuxClickHandle}
      onClick={onClick}
      {...rest}
      className={styles.root}
    ></div>
  );
};

export default ItemIcon;

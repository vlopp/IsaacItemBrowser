import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  items as itemsImport,
  sprites as spritesImport
} from "$gameData/gameData.js";
import { useDispatch } from "react-redux";
import { describeItem } from "$redux/actions/describeItem";

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
    imageRendering: ("pixelated" as any),
    display: "inline-block"
  })
}));

const ItemIcon = (props: ItemIconProps) => {
  const { itemName, scale, ...rest } = props;
  const styles = useStyles({ itemName, scale: scale || defaultScale });

  const dispatch = useDispatch();
  const onClickOrHoverHandle = e => {
    dispatch(describeItem(itemName));
  };

  const onAuxClickHandle = (e) => {
    e.preventDefault();
    window.open(
      `https://bindingofisaacrebirth.gamepedia.com/${items[itemName].encodedName}`,
      "_blank"
    );
  };

  return (
    <div
      onAuxClick={onAuxClickHandle}
      onClick={onClickOrHoverHandle}
      onMouseEnter={onClickOrHoverHandle}
      {...rest}
      className={styles.root}
    ></div>
  );
};

export default ItemIcon;

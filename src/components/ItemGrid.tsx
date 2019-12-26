import React, { useMemo } from "react";
import ItemIcon from "$root/components/ItemIcon";
import { useSelector } from "react-redux";
import { Store } from "$redux/store/Store";
import { itemNames as itemNamesImport } from "$root/gameData/gameData";

const itemNames = itemNamesImport;

export const ItemGrid = () => {
  const currentItems = useSelector((x: Store) => x.currentItems);

  return (
    <>
      {currentItems.map(itemName => (
        <ItemIcon key={itemName} scale={2} itemName={itemName}></ItemIcon>
    ))}
    </>
  );
};

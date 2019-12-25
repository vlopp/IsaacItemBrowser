import React from "react";
import ItemIcon from "$root/components/ItemIcon";
import { useSelector } from "react-redux";
import { Store } from "$redux/store/Store";

export const ItemGrid = () => {
  const items = useSelector((x: Store) => x.currentItems);

  return <>{items.map(x => <ItemIcon key={x} scale={2} itemName={x}></ItemIcon>)}</>;
};

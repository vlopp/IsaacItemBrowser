import * as React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const withStore = <T extends object>(storeOrStoreFn: T) => (
  element: React.ReactNode
) => () => {
  const [isReady, setReady] = useState(false);

  /* Store dispatches are asynchronous, wait rendering the target component till the 2nd tick. */
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof storeOrStoreFn === "function") {
      dispatch({ type: "REPLACE_ALL", payload: storeOrStoreFn() });
    } else {
      dispatch({ type: "REPLACE_ALL", payload: storeOrStoreFn });
    }
  }, []);
  useEffect(() => {
    setReady(true);
  }, []);

  return isReady ? element : <p>Loading.</p>;
};

export default withStore;

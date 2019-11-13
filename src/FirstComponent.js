import React from "react";
import { StoreContext } from "./Store.js";

const MyComponent = props => {
  let store = React.useContext(StoreContext);

  let handleClick = () => {
    store.newState(store.age + 1);
  };

  return (
    <React.Fragment>
      <div>age = {store.age} (in First Component)</div>
      <button onClick={handleClick}>button in first component</button>
    </React.Fragment>
  );
};

export default MyComponent;

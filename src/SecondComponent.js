import React from "react";
import { StoreContext } from "./Store.js";

const SecondComponent = props => {
  let context = React.useContext(StoreContext);

  let handleClick = () => {
    context.newState(context.age + 1);
  };

  return (
    <>
      <div />
      <button onClick={handleClick}>button in second component</button>
    </>
  );
};

export default SecondComponent;

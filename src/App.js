import React from "react";
import FirstComponent from "./FirstComponent.js";
import SecondComponent from "./SecondComponent";
import { StoreContext } from "./Store";

const App = props => {
  let store = React.useContext(StoreContext);
  return (
    <>
      age = {store.age} (in App)
      <FirstComponent />
      <SecondComponent />
    </>
  );
};

export default App;

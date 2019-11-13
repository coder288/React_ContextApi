import React, { useState } from "react";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [state, setState] = useState(30);

  const store = {
    age: state,
    newState: value => {
      setState(value);
    }
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

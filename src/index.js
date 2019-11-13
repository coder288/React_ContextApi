import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import StoreProvider from "./Store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  rootElement
);

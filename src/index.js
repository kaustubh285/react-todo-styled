import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import styled from "styled-components";

const Titles = styled.h1`
  color: red;
  text-align: center;
`;
ReactDOM.render(
  <div>
    <Titles>Welcome To Notes</Titles>
    <App />
  </div>,
  document.getElementById("root")
);

document.getElementById("root").classList += "container";

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

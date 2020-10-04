import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 1200px;
    color: #2f2d2d;
    font-family: "Helvetica CE";
    font-size: 21px;
    line-height: 1.25rem;
  }
  #root {
    height: 100%;
  }

  h1 {
    color: #ececec;
    font-size: 38px;
    font-weight: 700;
    padding: 0%;
    margin: 5px 0;
  }

  h2 {
    color: #2f2d2d;
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
  }

  h3 {
    color: #2f2d2d;
    font-family: Lato;
    font-size: 23px;
    font-weight: 700;
  }

  h4 {
    color: #2f2d2d;
    font-size: 21px;
    font-weight: 700;
  }

  p {
    color: #2f2d2d;
    font-size: 21px;
    font-family: "Helvetica CE";
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

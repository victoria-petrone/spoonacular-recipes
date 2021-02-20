import React from "react";
import "regenerator-runtime/runtime.js";

import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import App from "./App";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById("root")
);

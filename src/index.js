import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import App from "./App";
import "./index.css";
import $ from "jquery";
window.$ = $;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

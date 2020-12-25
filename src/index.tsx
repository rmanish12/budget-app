import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import axios from 'axios'

import App from "./components/App";

import store from "./store"

const root = document.getElementById("root");

axios.defaults.baseURL = "http://localhost:8080"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  root
);

import React from "react";
import { Switch, Route } from "react-router-dom";

import "../index.css";

import Navbar from "./navbar";
import Main from "../containers/main"
import Home from "../containers/home"

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
    </>
  );
};

export default App;

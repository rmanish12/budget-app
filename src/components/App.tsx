import React from "react";
import { Switch, Route } from "react-router-dom";

import "../index.css";

import Navbar from "./navbar";
import Main from "../containers/main"

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Main}></Route>
      </Switch>
    </>
  );
};

export default App;

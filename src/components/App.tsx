import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "../index.css";

import Navbar from "../containers/navbar";
import Main from "../containers/main";
import Home from "../containers/home";

import { IAppProps } from './types'

const App: React.FC<IAppProps> = (props): JSX.Element => {
  
  const { isAuthenticated, firstName } = props.user;

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} firstName={firstName} />
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);

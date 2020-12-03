import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "../index.css";

import Navbar from "../containers/navbar";
import Main from "../containers/main";
import Home from "../containers/home";
import UserProfile from "../containers/userProfile";
import ChangePassword from "../containers/changePassword";

import ProtectedRoute from "./ProtectedRoute";

import { IAppProps } from "./types";

import { authenticateUser } from "../store/actions/user";

const App: React.FC<IAppProps> = (props): JSX.Element => {
  const { authenticateUser } = props;

  useEffect(() => {
    authenticateUser();
  }, []);

  const { isAuthenticated, firstName } = props.user;

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} firstName={firstName} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (isAuthenticated ? <Redirect to="/home"/> : <Main />)}
        ></Route>
        <Route
          path = "/home"
          render={() => isAuthenticated ? <Home /> : <Redirect to="/"/>}
        />
        <Route
          path="/profile"
          render={() =>
            isAuthenticated ? <UserProfile /> : <Redirect to="/" />
          }
        ></Route>
        <Route path="/changePassword" component={ChangePassword}></Route>
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: () => dispatch(authenticateUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

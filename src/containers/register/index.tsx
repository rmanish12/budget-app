import React, { Component } from "react";
import autobind from "react-autobind";
import axios from "axios";

import RegisterForm from "../../components/register";

import { formatDate } from "../../util/formatDate";
import {
  validateEmail,
  validatePassword,
  validateFirstName,
  validateConfirmPassword,
} from "../../util/validator";

import AlertItem from "../../components/alert";

import { IRegisterState, IRegisterContainerProps } from "../types";

import initialState from "./initialState";

class Register extends Component<
  IRegisterContainerProps,
  Partial<IRegisterState>
> {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
    autobind(this);
  }

  // on change listener
  onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const name: string = e.target.name;
    const value: string = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  // on form submit
  onFormSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    // discarding error
    this.setState({
      registerFailure: "",
      registerSuccess: "",
    });

    if (this.validateFields()) {
      const {
        firstName,
        lastName,
        email,
        password,
        gender,
        dateOfBirth,
      } = this.state;

      const user = {
        firstName,
        lastName,
        email,
        password,
        gender,
        dateOfBirth,
      };

      axios
        .post("/user/register", user)
        .then((res) => {
          
          this.onFormReset()

          this.setState({
            registerSuccess: res.data.message,
          });
        })
        .catch((err) => {
          this.setState({
            registerFailure: err.response.data.message,
          });
        });
    }
  }

  // on form reset
  onFormReset() {
    this.setState({ ...initialState });
  }

  // form validation
  validateFields(): boolean {
    const { email, password, confirmPassword, firstName } = this.state;

    if (
      validateEmail(email) &&
      validatePassword(password) &&
      validateFirstName(firstName) &&
      validateConfirmPassword(password, confirmPassword)
    ) {
      return true;
    } else {
      if (!validateFirstName(firstName)) {
        this.setState((prevState) => {
          return {
            ...prevState,
            error: {
              ...prevState.error,
              firstName: true,
            },
          };
        });
      }

      if (!validateEmail(email)) {
        this.setState((prevState) => {
          return {
            ...prevState,
            error: {
              ...prevState.error,
              email: true,
            },
          };
        });
      }

      if (!validatePassword(password)) {
        this.setState((prevState) => {
          return {
            ...prevState,
            error: {
              ...prevState.error,
              password: true,
            },
          };
        });
      }

      if (!validateConfirmPassword(password, confirmPassword)) {
        this.setState((prevState) => {
          return {
            ...prevState,
            error: {
              ...prevState.error,
              confirmPassword: true,
            },
          };
        });
      }

      return false;
    }
  }

  // on alert close
  closeAlert(e: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      registerFailure: "",
      registerSuccess: "",
    });
  }

  render(): JSX.Element {
    return (
      <>
        <AlertItem
          message={this.state.registerSuccess}
          closeAlert={this.closeAlert}
          severity={"success"}
          openLoginForm={this.props.openLoginForm}
        />

        <AlertItem
          message={this.state.registerFailure}
          closeAlert={this.closeAlert}
          severity={"error"}
        />

        <RegisterForm
          state={this.state}
          onChangeHandler={this.onChangeHandler}
          onFormSubmit={this.onFormSubmit}
          onFormReset={this.onFormReset}
          openLoginForm={this.props.openLoginForm}
        />
      </>
    );
  }
}

export default Register;

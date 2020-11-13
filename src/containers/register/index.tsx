import React, { Component } from "react";
import autobind from "react-autobind";

import RegisterForm from "../../components/register";

import { formatDate } from "../../util/formatDate";
import {
  validateEmail,
  validatePassword,
  validateFirstName,
  validateConfirmPassword,
} from "../../util/validator";

interface IRegisterState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  dateOfBirth: string;
  error: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
  };
}

interface IRegisterContainerProps {
  openLoginForm: React.MouseEventHandler<HTMLButtonElement>
}

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "Male",
  dateOfBirth: formatDate(new Date("01/01/1990")),
  error: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  },
};

class Register extends Component<IRegisterContainerProps, Partial<IRegisterState>> {
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
    this.validateFields()
  }

  // on form reset
  onFormReset(e: React.MouseEvent<HTMLButtonElement>) {
    this.setState({ ...initialState });
  }

  // form validation
  validateFields() {
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
    }
  }

  render(): JSX.Element {
    return (
      <>
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

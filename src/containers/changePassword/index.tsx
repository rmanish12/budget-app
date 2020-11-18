import React, { useState } from "react";
import axios from "axios";
import _ from "lodash"

import ChangePassword from "../../components/changePassword";

import { validateConfirmPassword } from "../../util/validator";

const changePassword = (props) => {
  // state for current and updatedPassword
  const [state, setState] = useState<any>({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    error: "",
  });

  // state for api call response
  const [response, setResponse] = useState<any>({
    success: "",
    error: "",
  });

  // change handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  // validator to check if new password and confirmPassword is same
  const validateFields = (): boolean => {
    const { newPassword, confirmPassword } = state;
    if (validateConfirmPassword(newPassword, confirmPassword)) {
      return true;
    } else {
      setState({
        ...state,
        error: "Password does not match. Please check and try again",
      });

      return false;
    }
  };

  // on form submit
  const onFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();


    // remove error remarks
    setState({
        ...state,
        error: ''
    })
    
    if (validateFields()) {
      // make api call for changing password
      const user = _.omit(state, ["error"]);
      console.log('user: ', user)

      const token = document.cookie.split("=")[1];

      axios
        .put("/password", user, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setResponse({
            ...response,
            success: res.data.message,
          });
        })
        .catch((err) => {
          setResponse({
            ...response,
            error: err.response.data.error,
          });
        });
    }
  };

  return (
    <>
      <ChangePassword
        state={state}
        onChangeHandler={onChangeHandler}
        onFormSubmit={onFormSubmit}
      />
    </>
  );
};

export default changePassword;

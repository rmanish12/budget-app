import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import _ from "lodash";

import { getProfile } from "../../store/actions/user";
import { validateFirstName } from "../../util/validator";

import UserProfile from "../../components/userProfile";

import { IUserProfileProps } from "../types";

const userProfile: React.FC<IUserProfileProps> = (props): JSX.Element => {
  const { getProfile } = props;

  const { firstName, lastName, email, gender, dateOfBirth } = props.user;

  // setting state
  const [state, setState] = useState<any>({
    firstName,
    lastName,
    email,
    gender,
    dateOfBirth,
    error: {
      firstName: false,
    },
  });

  // setting state for response of update api call
  const [updateSuccess, setUpdateSuccess] = useState<string>("");
  const [updateFailure, setUpdateFailure] = useState<string>("");

  // get user profile on page load
  useEffect(() => {
    getProfile();
  }, []);

  // on change handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  // method to validate fields if user is updating profile
  const validateFields = (): boolean => {
    const { firstName } = state;

    if (!validateFirstName(firstName)) {
      setState({
        ...state,
        error: {
          firstName: true,
        },
      });
      return false;
    } else {
      return true;
    }
  };

  // on form submit
  const onFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // removing error remark, if any
    setState({
      ...state,
      error: {
        firstName: false,
      },
    });
    
    if (validateFields()) {
      // make API call to update profile
      const user = _.omit(state, ["error"]);
      console.log("user: ", user);
      const token = document.cookie.split("=")[1];

      axios
        .put("/profile", user, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUpdateSuccess(res.data.message);
        })
        .catch((err) => {
          setUpdateFailure(err.response.data.error);
        });
    }
  };

  return (
    <>
      <UserProfile
        state={state}
        onChangeHandler={onChangeHandler}
        onFormSubmit={onFormSubmit}
      />
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
    getProfile: () => dispatch(getProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(userProfile);

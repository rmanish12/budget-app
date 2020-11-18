import axios from "axios";

import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actionTypes";

import { User, LoginSuccessAction, LoginFailureAction } from './types'

export const onLogin = (user: User) => (dispatch) => {
  console.log("user: ", user);
  axios
    .post("/login", user)
    .then((res) => {
      document.cookie = `sessionToken=${res.data.token}`;

      const action: LoginSuccessAction = {
        type: LOGIN_SUCCESS,
        payload: {
          userId: res.data.userId,
          firstName: res.data.firstName,
          role: res.data.role,
        },
      };

      dispatch(action);
    })
    .catch((err) => {
      const action: LoginFailureAction = {
        type: LOGIN_FAILURE,
        payload: {
          loginError: err.response.data.error,
        },
      };

      dispatch(action);
    });
};

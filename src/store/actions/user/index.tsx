import axios from "axios";

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  LOGOUT
} from "../actionTypes";

import {
  User,
  LoginSuccessAction,
  FailureAction,
  GetUserProfileAction,
  UpdateProfile
} from "./types";

import store from '../../../store'

export const onLogin = (user: User) => (dispatch) => {
  
  axios
    .post("/user/login", user)
    .then((res) => {
      document.cookie = `sessionToken=${res.data.authToken}`;

      const action: LoginSuccessAction = {
        type: LOGIN_SUCCESS,
        payload: {
          userId: res.data.user.id,
          firstName: res.data.user.firstName,
          role: res.data.user.role,
        },
      };

      dispatch(action);
    })
    .catch((err) => {
      const action: FailureAction = {
        type: LOGIN_FAILURE,
        payload: {
          error: err.response.data.error,
        },
      };

      dispatch(action);
    });
};

export const authenticateUser = () => dispatch => {
  const token = document.cookie.split("=")[1];

  axios
    .get("/user/who", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      const action: LoginSuccessAction = {
        type: LOGIN_SUCCESS,
        payload: {
          userId: res.data.user.id,
          firstName: res.data.user.firstName,
          role: res.data.user.role,
        },
      };

      dispatch(action);
    })
    .catch((err) => {
      const action: FailureAction = {
        type: LOGIN_FAILURE,
        payload: {
          error: err.response.data.error,
        },
      };

      dispatch(action);
    });
}

export const getProfile = () => (dispatch) => {
  const token = document.cookie.split("=")[1];

  const userId = store.getState().user.userId

  axios
    .get(`/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      const action: GetUserProfileAction = {
        type: GET_PROFILE_SUCCESS,
        payload: {
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          gender: res.data.gender,
          dateOfBirth: res.data.dateOfBirth,
        },
      };

      dispatch(action);
    })
    .catch((err) => {
      const action: FailureAction = {
        type: GET_PROFILE_FAILURE,
        payload: {
          error: err.response.data.error,
        },
      };

      dispatch(action);
    });
};

export const onLogout = () => dispatch => {

  // remove sessionToken from cookie
  document.cookie = "sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

  dispatch({
    type: LOGOUT
  })

  location.reload()
}
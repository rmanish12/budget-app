import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS,
} from "../actionTypes";

export interface User {
  email: string;
  password: string;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    userId: number;
    firstName: string;
    role: string;
  };
}

export interface FailureAction {
  type: typeof LOGIN_FAILURE | typeof GET_PROFILE_FAILURE;
  payload: {
    error: string;
  };
}

export interface GetUserProfileAction {
  type: typeof GET_PROFILE_SUCCESS;
  payload: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    dateOfBirth: string;
  };
}

export interface UpdateProfile {
  firstName: string,
  lastName: string,
  gender: string,
  dateOfBirth: string
}
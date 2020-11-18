import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actionTypes";

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

export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: {
      loginError: string;
    };
  }
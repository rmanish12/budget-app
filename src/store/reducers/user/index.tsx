import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  LOGOUT
} from "../../actions/actionTypes";

interface IAction {
  type: string;
  payload: any;
}

interface IState {
  isAuthenticated: boolean;
  userId: number;
  firstName: string;
  role: string;
}

const initialState = {
  isAuthenticated: false,
  userId: null,
  firstName: "",
  role: "",
};

export default function userReducer(
  state: IState = initialState,
  action: IAction
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload.userId,
        firstName: action.payload.firstName,
        role: action.payload.role,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload.loginError,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        gender: action.payload.gender,
        dateOfBirth: action.payload.dateOfBirth,
      };

    case LOGOUT:
      return initialState

    default:
      return state;
  }
}

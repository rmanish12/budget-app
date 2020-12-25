import {
  GET_BUDGET_TYPES_SUCCESS,
  GET_BUDGET_TYPES_FAILURE,
  GET_BUDGET_TYPES_LOADING,
} from "../../actions/actionTypes";

const initialState = {
  budgetTypes: [],
  isError: false,
  error: "",
  isLoading: false,
};

export default function budgetTypeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BUDGET_TYPES_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_BUDGET_TYPES_SUCCESS:
      return {
        ...state,
        budgetTypes: action.payload.budgetTypes,
        isLoading: false,
      };

    case GET_BUDGET_TYPES_FAILURE:
      return {
        ...state,
        isError: true,
        error: action.payload.error,
        isLoading: false,
      };

    default:
      return { ...state };
  }
}

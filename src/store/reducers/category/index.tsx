import {
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
} from "../../actions/actionTypes";

const initialState = {
  categories: {
    income: [],
    expense: [],
  },
  isLoading: false,
  isError: false,
  error: "",
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: {
          income: action.payload.income,
          expense: action.payload.expense,
        },
        isLoading: false,
      };

    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload.error,
      };

    default:
      return { ...state }
  }
}

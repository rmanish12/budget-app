import {
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
} from "../../actions/actionTypes";

interface category {
  id: number;
  name: string;
}
interface ICategoryReducerState {
  categories: {
    income: category[];
    expense: category[];
  };
  isLoading: boolean;
  isError: boolean;
  error: string;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState = {
  categories: {
    income: [],
    expense: [],
  },
  isLoading: false,
  isError: false,
  error: "",
};

export default function categoryReducer(
  state: ICategoryReducerState = initialState,
  action: IAction
) {
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
      return { ...state };
  }
}

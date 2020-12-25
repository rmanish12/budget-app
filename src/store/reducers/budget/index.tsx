import {
  GET_MONTHLY_BUDGET_OVERVIEW_SUCCESS,
  GET_MONTHLY_BUDGET_OVERVIEW_FAILURE,
  GET_MONTHLY_BUDGET_OVERVIEW_LOADING,
  ADD_BUDGET_ITEMS_REQUEST,
  ADD_BUDGET_ITEMS_SUCCESS,
  ADD_BUDGET_ITEMS_FAILURE
} from "../../actions/actionTypes";

interface IBudgetReducerState {
  monthly: {
    income: number;
    expense: number;
    total: number;
    isLoading: boolean;
  },
  addItem: {
    isSuccess: boolean,
    success: string,
    isError: boolean,
    error: string,
    isLoading: boolean
  }
}

interface IAction {
  type: string;
  payload: any;
}

const initialState = {
  monthly: {
    income: 0,
    expense: 0,
    total: 0,
    isLoading: false,
    error: false,
    errorMessage: "",
  },
  addItem: {
    isSuccess: false,
    success: "",
    isError: false,
    error: "",
    isLoading: false
  }
};

export default function budgetReducer(
  state: IBudgetReducerState = initialState,
  action: IAction
) {
  switch (action.type) {
    case GET_MONTHLY_BUDGET_OVERVIEW_LOADING:
      return {
        ...state,
        monthly: {
          ...state.monthly,
          isLoading: true,
        },
      };

    case GET_MONTHLY_BUDGET_OVERVIEW_SUCCESS:
      return {
        ...state,
        monthly: {
          ...state.monthly,
          income: action.payload.income,
          expense: action.payload.expense,
          total: action.payload.total,
          isLoading: false,
        },
      };

    case GET_MONTHLY_BUDGET_OVERVIEW_FAILURE:
      return {
        ...state,
        monthly: {
          ...state.monthly,
          isLoading: false,
          error: true,
          errorMessage: action.payload.error,
        },
      };

    case ADD_BUDGET_ITEMS_REQUEST:
      return {
        ...state,
        addItem: {
          ...state.addItem,
          isLoading: true
        }
      }

    case ADD_BUDGET_ITEMS_SUCCESS:
      return {
        ...state,
        addItem: {
          ...state.addItem,
          isSuccess: true,
          success: action.payload.success,
          isLoading: false,
          isError: false
        }
      }

    case ADD_BUDGET_ITEMS_FAILURE:
      return {
        ...state,
        addItem: {
          ...state.addItem,
          isSuccess: false,
          success: "",
          isError: true,
          error: action.payload.error,
          isLoading: false
        }
      }

    default:
      return { ...state };
  }
}

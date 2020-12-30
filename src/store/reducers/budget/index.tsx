import {
  GET_MONTHLY_BUDGET_OVERVIEW_SUCCESS,
  GET_MONTHLY_BUDGET_OVERVIEW_FAILURE,
  GET_MONTHLY_BUDGET_OVERVIEW_LOADING,
  GET_BUDGET_ITEMS_REQUEST,
  GET_BUDGET_ITEMS_SUCCESS,
  GET_BUDGET_ITEMS_FAILURE,
} from "../../actions/actionTypes";

interface items {
  id: number;
  amount: number;
  description: string;
  dateOfTransaction: any;
  category: string;
}
interface budgetItems {
  totalCount: number;
  items: items[];
}
interface IBudgetReducerState {
  monthly: {
    income: number;
    expense: number;
    total: number;
    isLoading: boolean;
  };
  addItem: {
    isSuccess: boolean;
    success: string;
    isError: boolean;
    error: string;
    isLoading: boolean;
  };
  budgetItems: {
    income?: budgetItems;
    expense?: budgetItems;
    isLoading: boolean,
    isError: boolean,
    error: string
  };
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
    isLoading: false,
  },
  budgetItems: {
    income: {
      totalCount: 0,
      items: []
    },
    expense: {
      totalCount: 0,
      items: []
    },
    isLoading: false,
    isError: false,
    error: ""
  },
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

    case GET_BUDGET_ITEMS_REQUEST:
      return {
        ...state,
        budgetItems: {
          ...state.budgetItems,
          isLoading: true
        }
      }

    case GET_BUDGET_ITEMS_SUCCESS:
      return {
        ...state,
        budgetItems: {
          ...state.budgetItems,
          [action.payload.budgetType]: {
            totalCount: action.payload.totalCount,
            items: action.payload.budgetItems
          }
        }
      }

    case GET_BUDGET_ITEMS_FAILURE:
      return {
        ...state,
        budgetItems: {
          ...state.budgetItems,
          isLoading: false,
          isError: true,
          error: action.payload.error
        }
      }

    default:
      return { ...state };
  }
}

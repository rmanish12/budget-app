import axios from "axios";
import store from "../../../store";

import {
  GET_MONTHLY_BUDGET_OVERVIEW_SUCCESS,
  GET_MONTHLY_BUDGET_OVERVIEW_FAILURE,
  GET_MONTHLY_BUDGET_OVERVIEW_LOADING,
  GET_BUDGET_ITEMS_REQUEST,
  GET_BUDGET_ITEMS_SUCCESS,
  GET_BUDGET_ITEMS_FAILURE
} from "../actionTypes";

import {
  GetMonthlyBudgetOverviewSuccessAction,
  GetMonthlyBudgetOverviewFailureAction,
} from "./types";

const getHeader = () => {
  const token = document.cookie.split("=")[1];
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return header
}

const getUserId = () => {
  return store.getState().user.userId;
}

export const getMonthlyBudgetOverview = () => (dispatch) => {
  const userId = getUserId()

  const header = getHeader()

  dispatch({
    type: GET_MONTHLY_BUDGET_OVERVIEW_LOADING,
  });

  axios
    .get(`/budget/monthly/${userId}`, header)
    .then((res) => {
      const action: GetMonthlyBudgetOverviewSuccessAction = {
        type: GET_MONTHLY_BUDGET_OVERVIEW_SUCCESS,
        payload: {
          income: res.data.income,
          expense: res.data.expense,
          total: res.data.total,
        },
      };

      dispatch(action);
    })
    .catch((err) => {
      const action: GetMonthlyBudgetOverviewFailureAction = {
        type: GET_MONTHLY_BUDGET_OVERVIEW_FAILURE,
        payload: {
          error: err.response.data.message,
        },
      };

      dispatch(action);
    });
};

export const getBudgetItems = (params) => dispatch => {
  
  const userId = getUserId()
  const header = getHeader()

  const { fromDate, toDate, type, sortBy, orderBy, page, limit } = params

  dispatch({
    type: GET_BUDGET_ITEMS_REQUEST
  })

  const URI = `/budget/${userId}?fromDate=${fromDate}&toDate=${toDate}&type=${type}&sortBy=${sortBy}&orderBy=${orderBy}&page=${page}&limit=${limit}`

  axios
    .get(URI, header)
    .then(res => {

      const action = {
        type: GET_BUDGET_ITEMS_SUCCESS,
        payload: {
          budgetType: res.data.budgetType,
          totalCount: res.data.totalCount,
          budgetItems: res.data.budgetItems
        }
      }

      dispatch(action)

    })
    .catch(err => {
      const action = {
        type: GET_BUDGET_ITEMS_FAILURE,
        payload: err.response.data.message
      }

      dispatch(action)
    })
}
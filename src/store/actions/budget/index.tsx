import axios from "axios";
import store from "../../../store";

import {
  GET_MONTHLY_BUDGET_OVERVIEW_SUCCESS,
  GET_MONTHLY_BUDGET_OVERVIEW_FAILURE,
  GET_MONTHLY_BUDGET_OVERVIEW_LOADING,
} from "../actionTypes";

import {
  GetMonthlyBudgetOverviewSuccessAction,
  GetMonthlyBudgetOverviewFailureAction,
} from "./types";

export const getMonthlyBudgetOverview = () => (dispatch) => {
  const userId = store.getState().user.userId;

  const token = document.cookie.split("=")[1];
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

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

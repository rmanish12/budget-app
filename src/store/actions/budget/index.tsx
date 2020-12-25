import axios from "axios";
import store from "../../../store";

import {
  GET_MONTHLY_BUDGET_OVERVIEW_SUCCESS,
  GET_MONTHLY_BUDGET_OVERVIEW_FAILURE,
  GET_MONTHLY_BUDGET_OVERVIEW_LOADING,
  ADD_BUDGET_ITEMS_REQUEST,
  ADD_BUDGET_ITEMS_SUCCESS,
  ADD_BUDGET_ITEMS_FAILURE,
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

export const addBudgetItems = (allItems) => (dispatch) => {
  const userId = store.getState().user.userId;
  const items = {
    userId,
    budgetItems: allItems,
  };

  const token = document.cookie.split("=")[1];
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dispatch({
    type: ADD_BUDGET_ITEMS_REQUEST,
  });

  axios
    .post("/budget", items, header)
    .then((res) => {
      const action = {
        type: ADD_BUDGET_ITEMS_SUCCESS,
        payload: {
          success: res.data.message,
        },
      };

      dispatch(action);
    })
    .catch((err) => {
      const action = {
        type: ADD_BUDGET_ITEMS_FAILURE,
        payload: {
          error: err.response.data.message,
        },
      };
    });
};

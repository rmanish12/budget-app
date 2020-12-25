import axios from "axios";

import {
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
} from "../actionTypes";

export const getCategories = () => (dispatch) => {
  const token = document.cookie.split("=")[1];
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dispatch({
    type: GET_CATEGORIES_LOADING,
  });

  axios
    .get("/category", header)
    .then((res) => {
      const action = {
        type: GET_CATEGORIES_SUCCESS,
        payload: {
          income: res.data.income,
          expense: res.data.expense,
        },
      };

      dispatch(action);
    })
    .catch((err) => {
      const action = {
        type: GET_CATEGORIES_FAILURE,
        payload: {
          error: err.response.data.messgae,
        },
      };

      dispatch(action);
    });
};

import axios from "axios";
import {
  GET_BUDGET_TYPES_SUCCESS,
  GET_BUDGET_TYPES_FAILURE,
  GET_BUDGET_TYPES_LOADING,
} from "../actionTypes";

export const getBudgetTypes = () => (dispatch) => {
  const token = document.cookie.split("=")[1];
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dispatch({
    type: GET_BUDGET_TYPES_LOADING,
  });

  axios
    .get("/types", header)
    .then((res) => {
      const action = {
        type: GET_BUDGET_TYPES_SUCCESS,
        payload: {
          budgetTypes: res.data.budgetTypes,
        },
      };

      dispatch(action);
    })
    .catch((err) => {
      const action = {
        type: GET_BUDGET_TYPES_FAILURE,
        payload: {
          error: err.response.data.messgae,
        },
      };

      dispatch(action);
    });
};

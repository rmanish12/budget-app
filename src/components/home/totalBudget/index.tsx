import React, { useEffect } from "react";

import "../../../index.css";

import { ITotalBudgetComponentProps } from "../../types";

import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorIcon from "@material-ui/icons/Error";

const totalBudget: React.FC<ITotalBudgetComponentProps> = (
  props
): JSX.Element => {
  const { monthlyBudget, getMonthlyBudgetOverview } = props;

  const {
    income,
    expense,
    total,
    isLoading,
    error,
    errorMessgae,
  } = monthlyBudget;

  // calling API to get monthly budget overview on component load
  useEffect(() => {
    getMonthlyBudgetOverview();
  }, []);

  const getMonth = () => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${month}, ${year}`;
  };

  return (
    <>
      <div className="total-budget">
        {isLoading || error ? (
          <div className="loading-div">
            {isLoading && (
              <div className="loader-div">
                <CircularProgress />
              </div>
            )}

            {error && (
              <div className="error-div">
                <div className="ml-30">
                  <span>
                    <ErrorIcon />
                  </span>
                </div>
                <div>
                  <span>Error while loading monthly budget details</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <div>
              <span className="budget-title">
                Available budget in {getMonth()}
              </span>
              <span
                className={
                  total >= 0
                    ? "budget-value budget-income-text"
                    : "budget-value budget-expense-text"
                }
              >
                {total}
              </span>
            </div>

            <div className="mt-1">
              <span className="budget-title budget-income-text">
                Income this month
              </span>
              <span className="budget-value budget-income-text">{income}</span>
            </div>

            <div className="mt-1">
              <span className="budget-title budget-expense-text">
                Expense this month
              </span>
              <span className="budget-value budget-expense-text">
                {expense}
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default totalBudget;

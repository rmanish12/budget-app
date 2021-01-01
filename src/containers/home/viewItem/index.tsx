import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import SeachItem from "../../../components/home/viewItem/SearchItem";
import TableComponent from "../../../components/home/viewItem/TableComponent";

import { getFirstAndLastDate } from "../../../util/formatDate";

import { Grid } from "@material-ui/core";

import { getBudgetItems } from "../../../store/actions/budget";

import {
  BUDGET_ITEM,
  PAGINATION_SIZE,
  DEFAULT_QUERY_PARAMS,
} from "../../../util/constants";

const viewItem = (props) => {
  const { budget, getBudgetItems } = props;
  const { budgetItems } = budget;

  // getting first and last date of the month to set from and toDate accordingly
  const { startDate, endDate } = getFirstAndLastDate();

  // setting states from view items components
  const [state, setState] = useState({
    dates: {
      fromDate: startDate,
      toDate: endDate,
    },
    items: {
      income: BUDGET_ITEM,
      expense: BUDGET_ITEM,
    },
    queryParams: {
      income: DEFAULT_QUERY_PARAMS,
      expense: DEFAULT_QUERY_PARAMS,
    },
  });

  // adding property of isChecked to each budgetitem of income type
  useEffect(() => {
    const incomeItems = budgetItems.income.items;
    let items = [];

    _.forEach(incomeItems, (item) =>
      items.push(_.assign(item, { isChecked: false }))
    );

    // setting state to update items list with isChecked property
    setState({
      ...state,
      items: {
        ...state.items,
        income: {
          ...state.items.income,
          items: items,
          numberOfItemsSelected: 0,
          allItemsSelected: false,
        },
      },
    });
  }, [budgetItems.income.items]);

  // adding property of isChecked to each budgetitem of expense type
  useEffect(() => {
    const expenseItems = budgetItems.expense.items;
    let items = [];

    _.forEach(expenseItems, (item) =>
      items.push(_.assign(item, { isChecked: false }))
    );

    // setting state to update items list with isChecked property
    setState({
      ...state,
      items: {
        ...state.items,
        expense: {
          ...state.items.expense,
          items: items,
        },
      },
    });
  }, [budgetItems.expense.items]);

  // calling get budget items API whenever queryParams for income changes
  useEffect(() => {
    const incomeParams = _.clone(state.queryParams.income);

    // to prevent API call on page load
    if (!_.isEqual(incomeParams, DEFAULT_QUERY_PARAMS)) {
      incomeParams.type = "income";

      getBudgetItems(incomeParams);
    }
  }, [state.queryParams.income]);

  // calling get budget items API whenever queryParams expense changes
  useEffect(() => {
    const expenseParams = _.clone(state.queryParams.expense);

    // to prevent API call on page load
    if (!_.isEqual(expenseParams, DEFAULT_QUERY_PARAMS)) {
      expenseParams.type = "expense";

      getBudgetItems(expenseParams);
    }
  }, [state.queryParams.expense]);

  // on date change handler
  const onDateChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      dates: {
        ...state.dates,
        [name]: value,
      },
    });
  };

  // handler when user clicks on check box of a particular item
  const onCheckedChange = (e, type, index) => {
    const newBudgetItems = { ...state.items[type] };
    const allItems = newBudgetItems.items;
    const item = allItems[index];

    item.isChecked = e.target.checked;

    const itemsSelected = allItems.filter((item) => item.isChecked === true);
    setState({
      ...state,
      items: {
        ...state.items,
        [type]: {
          ...state.items[type],
          numberOfItemsSelected: itemsSelected.length,
          allItemsSelected:
            itemsSelected.length === allItems.length ? true : false,
          items: allItems,
        },
      },
    });
  };

  // handler when user clicks on the checkbox on table header to select all items
  const onCheckAllItems = (e, type) => {
    const newBudgetItems = { ...state.items[type] };

    newBudgetItems.allItemsSelected = e.target.checked;
    newBudgetItems.items.forEach((item) => (item.isChecked = e.target.checked));

    if (e.target.checked) {
      newBudgetItems.numberOfItemsSelected = newBudgetItems.items.length;
    } else {
      newBudgetItems.numberOfItemsSelected = 0;
    }

    setState({
      ...state,
      items: {
        ...state.items,
        [type]: newBudgetItems,
      },
    });
  };

  // handler when number of items per page is changed
  const onRowsPerPageChange = (e, type) => {
    const params = _.clone(state.queryParams[type]);
    params.page = 0;
    params.limit = e.target.value;

    setState({
      ...state,
      queryParams: {
        ...state.queryParams,
        [type]: params,
      },
    });
  };

  // handler when user wants to move to previous page
  const onPreviousPage = (type) => {
    const page = state.queryParams[type].page;

    if (page !== 0) {
      // changing pagination params
      setState({
        ...state,
        queryParams: {
          ...state.queryParams,
          [type]: {
            ...state.queryParams[type],
            page: page - 1,
          },
        },
      });
    }
  };

  // handler when user wants to move to next page
  const onNextPage = (type) => {
    const page = state.queryParams[type].page;
    const limit = state.queryParams[type].limit;
    const totalCount = budgetItems[type].totalCount;

    if (page !== Math.ceil(totalCount / limit) - 1) {
      // changing pagination params
      setState({
        ...state,
        queryParams: {
          ...state.queryParams,
          [type]: {
            ...state.queryParams[type],
            page: page + 1,
          },
        },
      });
    }
  };

  // search handler
  const onSearchHandler = (e) => {
    e.preventDefault();

    const queryParams = _.cloneDeep(DEFAULT_QUERY_PARAMS);
    queryParams.fromDate = state.dates.fromDate;
    queryParams.toDate = state.dates.toDate;

    const incomeParams = _.clone(queryParams);
    const expenseParams = _.clone(queryParams);

    incomeParams.type = "income";
    expenseParams.type = "expense";

    // updating query params state
    // this in turn will call the API due to useEffect() used
    setState({
      ...state,
      queryParams: {
        income: incomeParams,
        expense: expenseParams,
      },
    });
  };

  return (
    <>
      <SeachItem
        dateRange={state.dates}
        onDateChangeHandler={onDateChangeHandler}
        onSearchHandler={onSearchHandler}
      />

      <Grid container justify="center" spacing={2} className="display-budget">
        {["income", "expense"].map((type, index) => {
          return (
            <>
              <Grid item xs={12} sm={5} key={index}>
                <TableComponent
                  key={index}
                  className={`${type}-table`}
                  label={type.toUpperCase()}
                  type={type}
                  itemDetails={state.items[type]}
                  totalCount={budgetItems[type].totalCount}
                  paginationSize={PAGINATION_SIZE}
                  paginationParams={state.queryParams[type]}
                  onCheckedChange={onCheckedChange}
                  onCheckAllItems={onCheckAllItems}
                  onRowsPerPageChange={onRowsPerPageChange}
                  onPreviousPage={onPreviousPage}
                  onNextPage={onNextPage}
                  // paginationParams={paginationParams[type]}
                  // paginationSize={PAGINATION_SIZE}
                  // onRowsPerPageChange={onRowsPerPageChange}
                  // onPreviousPage={onPreviousPage}
                  // onNextPage={onNextPage}
                  // onCheckedChange={onCheckedChange}
                  // onCheckAllItems={onCheckAllItems}
                  // onEdit={onEdit}
                  // onDeleteItems={onDeleteItems}
                  // showDeleteModal={showDeleteModal}
                  // handleClose={() => setShowDeleteModal(false)}
                  // onConfirmDelete={onConfirmDelete}
                  // onSortHandler={onSortHandler}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    budget: state.budget,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBudgetItems: (params) => dispatch(getBudgetItems(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(viewItem);

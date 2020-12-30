import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import SeachItem from "../../../components/home/viewItem/SearchItem";
import TableComponent from "../../../components/home/viewItem/TableComponent";

import { getFirstAndLastDate } from "../../../util/formatDate";

import { Grid } from "@material-ui/core";

import { getBudgetItems } from "../../../store/actions/budget";

import { BUDGET_ITEM } from "../../../util/constants"

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
          items: items
        },
      },
    });
  }, [budgetItems.income.items]);

  // adding property of isChecked to each budgetitem of expense type
  useEffect(() => {
    const expenseItems = budgetItems.expense.items;
    let items = [];

    _.forEach(expenseItems, (item) => items.push(_.assign(item, { isChecked: false })));

    // setting state to update items list with isChecked property
    setState({
      ...state,
      items: {
        ...state.items,
        expense: {
          ...state.items.expense,
          items: items
        },
      },
    });
  }, [budgetItems.expense.items]);

  // on date change handler
  const onDateChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name: ", name, "value: ", value);
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
          allItemsSelected: itemsSelected.length === allItems.length ? true: false,
          items: allItems,
        }
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
        [type]: newBudgetItems 
      }
    });
  };

  // search handler
  const onSearchHandler = (e) => {
    e.preventDefault();

    const params = {
      fromDate: state.dates.fromDate,
      toDate: state.dates.toDate,
      sortBy: "dateOfTransaction",
      orderBy: "desc",
      page: 0,
      limit: 5,
    };

    Promise.all[
      (getBudgetItems(_.assign(params, { type: "income" })),
      getBudgetItems(_.assign(params, { type: "expense" })))
    ];
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
                  onCheckedChange={onCheckedChange}
                  onCheckAllItems={onCheckAllItems}
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

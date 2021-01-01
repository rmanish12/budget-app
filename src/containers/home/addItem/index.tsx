import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import _ from "lodash";

import AddItemComponent from "../../../components/home/addItem/AddItem";
import DialogBox from "../../../components/dialogBox";

import { formatDate } from "../../../util/formatDate";

import { getBudgetTypes } from "../../../store/actions/types";
import { getCategories } from "../../../store/actions/category";
import { getMonthlyBudgetOverview } from "../../../store/actions/budget"

import CircularProgress from "@material-ui/core/CircularProgress";

import { IAddItemContainerProps } from "../../types"

const addItem: React.FC<IAddItemContainerProps> = (props): JSX.Element => {

  const { type, category, user, getBudgetTypes, getCategories, getMonthlyBudgetOverview } = props

  const { userId } = user;

  // calling method on component load to get all the budgetTypes
  useEffect(() => {
    if(type.budgetTypes.length===0) {
      getBudgetTypes()
    }

    if(category.categories.income.length===0 || category.categories.expense.length===0) {
      getCategories()
    }
    // Promise.all([getBudgetTypes(), getCategories()]);
  }, []);

  // new item template
  const NEW_ITEM = {
    dateOfTransaction: formatDate(new Date()),
    type: "",
    category: "",
    description: "",
    amount: "",
    categories: [],
  };

  // state for the container
  // containing types, categories and budgetItems
  const [state, setState] = useState<any>({
    items: [NEW_ITEM],
    addItemsResponse: {
      isLoading: false,
      success: "",
      error: "",
    },
  });

  // handler when add new item is clicked
  const onAddItemHandler = (e) => {
    e.preventDefault();

    // pushing new item in the array of items
    setState({
      ...state,
      items: [...state.items, NEW_ITEM],
    });
  };

  // handler when delete item button is clicked
  const onDeleteItemHandler = (e, index) => {
    const { items } = state;
    const newItems = [...items];

    // splicing that element from the list of items
    newItems.splice(index, 1);

    setState({
      ...state,
      items: newItems,
    });
  };

  const onChangeHandler = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;

    const { items } = state;

    const newArray = [...items];

    if (name === "type") {
      const selectedTypeOfTransaction = type.budgetTypes
        .find((type) => type.id === e.target.value)
        .type.toLowerCase();

      newArray[index] = {
        ...newArray[index],
        [name]: value,
        categories: category.categories[selectedTypeOfTransaction],
      };
    } else {
      newArray[index] = {
        ...newArray[index],
        [name]: value,
      };
    }

    setState({
      ...state,
      items: newArray,
    });
  };

  // handler when user clicks of save items
  const onSaveItemHandler = (e) => {
    const { items } = state;

    let budgetItems = [];
    // not working, need to be checked
    _.forEach(items, (item) => {
      budgetItems.push(_.omit(item, ["categories"]));
    });

    const allItems = {
      userId,
      budgetItems,
    };

    const token = document.cookie.split("=")[1];

    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    setState({
      ...state,
      addItemsResponse: {
        ...state.addItemsResponse,
        isLoading: true,
      },
    });

    axios
      .post("/budget", allItems, header)
      .then((res) => {
        setState({
          ...state,
          items: [NEW_ITEM], // clearing all previously entered item boxes
          addItemsResponse: {
            ...state.addItemsResponse,
            isLoading: false,
            success: res.data.message,
          },
        });

        // calling API to update monthly budget overview
        getMonthlyBudgetOverview()
      })
      .catch((err) => {
        setState({
          ...state,
          addItemsResponse: {
            ...state.addItemsResponse,
            isLoading: false,
            error: err.response.data.message,
          },
        });
      });
  };

  // handler for modal close
  const handleClose = () => {
    setState({
      ...state,
      addItemsResponse: {
        success: "",
        error: "",
      },
    });
  };

  return (
    <>
      <>
        <DialogBox
          show={(state.addItemsResponse.success || state.addItemsResponse.error) ? true : false}
          heading={state.addItemsResponse.success ? "Success" : "Error"}
          message={
            state.addItemsResponse.success
              ? state.addItemsResponse.success
              : state.addItemsResponse.error
          }
          onHide={handleClose}
          level={state.addItemsResponse.success ? "success" : "error"}
        />
      </>
      {type.isLoading ||
      category.isLoading ||
      state.addItemsResponse.isLoading ? (
        <>
          {" "}
          <div className="loading-div">
            <div className="loader-div">
              <CircularProgress />
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <AddItemComponent
            items={state.items}
            onAddItemHandler={onAddItemHandler}
            onDeleteItemHandler={onDeleteItemHandler}
            types={type}
            onChangeHandler={onChangeHandler}
            onSaveItemHandler={onSaveItemHandler}
          />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    type: state.type,
    category: state.category,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBudgetTypes: () => dispatch(getBudgetTypes()),
    getCategories: () => dispatch(getCategories()),
    getMonthlyBudgetOverview: () => dispatch(getMonthlyBudgetOverview())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addItem);

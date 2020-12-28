import React, { useState, useEffect } from "react";

import SeachItem from "../../../components/home/viewItem/SearchItem";

import { getFirstAndLastDate } from "../../../util/formatDate";

const viewItem = (props) => {
  // getting first and last date of the month to set from and toDate accordingly
  const { startDate, endDate } = getFirstAndLastDate();

  // setting states from view items components
  const [state, setState] = useState({
    dates: {
      fromDate: startDate,
      toDate: endDate,
    },
  });

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

  // search handler
  const onSearchHandler = (e) => {
    e.preventDefault();

    console.log("dates: ", state.dates);
  };

  return (
    <>
      <SeachItem
        dateRange={state.dates}
        onDateChangeHandler={onDateChangeHandler}
        onSearchHandler={onSearchHandler}
      />
    </>
  );
};

export default viewItem;

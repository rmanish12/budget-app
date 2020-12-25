import React, { useState } from "react";

import TotalBudget from "./totalBudget";
import AddItem from "../../containers/home/addItem"

import { IHomeComponentProps } from "../types";

import { Tab, Tabs, AppBar, Typography, Box } from "@material-ui/core";

import '../../index.css'

const homeComponent: React.FC<IHomeComponentProps> = (props): JSX.Element => {
  const { getMonthlyBudgetOverview, budget } = props;

  const [value, setValue] = useState<number>(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TotalBudget
        getMonthlyBudgetOverview={getMonthlyBudgetOverview}
        monthlyBudget={budget.monthly}
      />

      <div className="mt-1">
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} className="app-bar">
            <Tab label="Add Item" />
            <Tab label="View Items" />
            <Tab label="Reports" />
          </Tabs>
        </AppBar>
      </div>
      <TabPanel value={value} index={0} className="tabs">
        <AddItem />
      </TabPanel>

      <TabPanel value={value} index={1} className="tabs">
        Item 2
      </TabPanel>

      <TabPanel value={value} index={2} className="tabs">
        Item Three
      </TabPanel>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={index}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default homeComponent;

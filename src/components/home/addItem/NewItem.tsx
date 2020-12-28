import React from "react";

import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  TextareaAutosize,
  Fab,
  Tooltip,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

import { Card } from "react-bootstrap";

import "../../../index.css";

import { INewItemContainerProps } from "../../types"

const newItem: React.FC<INewItemContainerProps> = (props): JSX.Element => {
  const { item, index, onDeleteItemHandler, types, onChangeHandler } = props;

  const { dateOfTransaction, categories, type, category, amount, description } = item;

  return (
    <>
      <div className={index !== 0 ? "margin-top-10" : ""}>
        <Card bg="bg">
          <Card.Body>
            <Grid container>
              <Grid item xs={10} sm={4}>
                <div>
                  <InputLabel id="type_of_budget_item" className="form-label">
                    Type of Budget Item
                  </InputLabel>
                </div>

                <div>
                  <Select
                    labelId="type"
                    id="type"
                    name="type"
                    value={type}
                    onChange={(e) => onChangeHandler(e, index)}
                    label="Type Of Transaction"
                    className="form-dropdown"
                  >
                    {types.budgetTypes.map((type, index) => {
                      return (
                        <MenuItem key={index} value={type.id}>
                          {type.type}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
              </Grid>

              <Grid item xs={10} sm={4}>
                <div>
                  <InputLabel
                    id="category_of_budget_item"
                    className="form-label"
                  >
                    Category
                  </InputLabel>
                </div>

                <div>
                  <Select
                    labelId="category"
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => onChangeHandler(e, index)}
                    label="Category"
                    className="form-dropdown"
                  >
                    {categories.map((category, index) => {
                      return <MenuItem key={index} value={category.id}>{category.name}</MenuItem>
                    })}
                  </Select>
                </div>
              </Grid>

              <Grid item xs={10} sm={4}>
                <div className="text-center pd-4 mt-1">
                  <TextField
                    id="dateOfTransaction"
                    label="Date Of Transaction"
                    type="date"
                    name="dateOfTransaction"
                    className="wd-90"
                    value={dateOfTransaction}
                    onChange={(e) => onChangeHandler(e, index)}
                  />
                </div>
              </Grid>

              <Grid item xs={10} sm={4}>
                <div className="text-center pd-4 mt-1">
                  <TextField
                    id="amount"
                    label="Amount"
                    type="number"
                    name="amount"
                    className="wd-90"
                    value={amount}
                    onChange={(e) => onChangeHandler(e, index)}
                  />
                </div>
              </Grid>

              <Grid item xs={10} sm={4}>
                <div>
                  <InputLabel
                    id="description_of_budget_item"
                    className="form-label"
                  >
                    Description
                  </InputLabel>
                </div>
                <div className="text-center pd-4 mt-1">
                  <TextareaAutosize
                    rowsMin={3}
                    placeholder="Your description goes here..."
                    className="form-input"
                    name="description"
                    className="wd-90"
                    value={description}
                    onChange={(e) => onChangeHandler(e, index)}
                  />
                </div>
              </Grid>

              {index !== 0 && (
                <Grid item xs={2} sm={4}>
                  <div className="delete-item">
                    <Tooltip title="Delete item">
                      <Fab
                        color="secondary"
                        onClick={(e) => onDeleteItemHandler(e, index)}
                      >
                        <DeleteIcon />
                      </Fab>
                    </Tooltip>
                  </div>
                </Grid>
              )}
            </Grid>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default newItem;

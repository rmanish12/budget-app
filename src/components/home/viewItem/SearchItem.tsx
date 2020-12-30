import React from "react";

import { Card, Button } from "react-bootstrap";
import { Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

import "../../../index.css";

const searchItem = (props) => {
  const { dateRange, onDateChangeHandler, onSearchHandler } = props;

  const { fromDate, toDate } = dateRange

  return (
    <>
      <Card bg="bg">
        <Card.Body>
          <Grid container justify="center">
            <Grid item xs={6} sm={4}>
              <div>
                <TextField
                  id="fromDate"
                  label="From"
                  type="date"
                  name="fromDate"
                  className="wd-90"
                  value={fromDate}
                  onChange={onDateChangeHandler}
                />
              </div>
            </Grid>

            <Grid item xs={6} sm={4}>
              <div>
                <TextField
                  id="toDate"
                  label="To"
                  type="date"
                  name="toDate"
                  className="wd-90"
                  value={toDate}
                  onChange={onDateChangeHandler}
                />
              </div>
            </Grid>

            <Grid item xs={6} sm={2}>
              <div>
                <Button
                  onClick={onSearchHandler}
                  variant="light"
                  className="search-bar-buttons"
                >
                  <SearchIcon /> Search
                </Button>
              </div>
            </Grid>

            <Grid item xs={6} sm={2}>
              <div>
                <Button
                  // onClick={onExportHandler}
                  variant="light"
                  className="search-bar-buttons"
                >
                  <SaveAltIcon /> Export
                </Button>
              </div>
            </Grid>
          </Grid>
        </Card.Body>
      </Card>
    </>
  );
};

export default searchItem;

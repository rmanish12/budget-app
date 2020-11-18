import React from "react";

import "../../index.css";

import { Grid, Paper, TextField, Button } from "@material-ui/core";

import { IChangePasswordComponentProps } from '../types'

const changePassword: React.FC<IChangePasswordComponentProps> = (props): JSX.Element => {

    const { state, onChangeHandler, onFormSubmit } = props

    const { oldPassword, newPassword, confirmPassword, error } = state

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={11} sm={6}>
          <div className="mt-10">
            <Paper>
              <div className="text-center background">
                <h5 className="form-heading all-caps">Change Password</h5>
              </div>

              <div className="text-center mt-minus-2">
                <TextField
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  label="Old Password"
                  className="wd-90"
                  value={oldPassword}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="text-center mt-2">
                <TextField
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  label="New Password"
                  className="wd-90"
                  value={newPassword}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="text-center pd-4 mt-2">
                <TextField
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  className="wd-90"
                  value={confirmPassword}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="mt-minus-2">
                <span className="form-error">{error}</span>
              </div>

              <hr />

              <div className="text-center">
                <Button
                  className="background login-button"
                  onClick={onFormSubmit}
                >
                  Change Password
                </Button>
              </div>

            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default changePassword;

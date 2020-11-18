import React from "react";
import "../../index.css";

import {
  Grid,
  Paper,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { IRegisterComponentProps } from '../types'

const register: React.FC<IRegisterComponentProps> = (props): JSX.Element => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    dateOfBirth,
    gender,
    error,
  } = props.state;

  const { onChangeHandler, onFormReset, onFormSubmit, openLoginForm } = props;

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={11} sm={6}>
          <div className="mt-10">
            <Paper>
              <div className="text-center background">
                <h5 className="form-heading all-caps">Register</h5>
              </div>

              <div className="text-center mt-minus-2">
                <TextField
                  type="text"
                  id="firstname"
                  name="firstName"
                  label="First Name"
                  className="wd-90"
                  error={error.firstName}
                  helperText={
                    error.firstName ? "First Name must not be empty" : ""
                  }
                  value={firstName}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="text-center mt-2">
                <TextField
                  type="text"
                  id="lastname"
                  name="lastName"
                  label="Last Name"
                  className="wd-90"
                  value={lastName}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="text-center mt-2">
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  label="Email"
                  className="wd-90"
                  error={error.email}
                  helperText={error.email ? "Email must not be empty" : ""}
                  value={email}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="text-center mt-2">
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  className="wd-90"
                  error={error.password}
                  helperText={
                    error.password ? "Password must not be empty" : ""
                  }
                  value={password}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="text-center mt-2">
                <TextField
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  className="wd-90"
                  error={error.confirmPassword}
                  helperText={
                    error.confirmPassword ? "Password does not match" : ""
                  }
                  value={confirmPassword}
                  onChange={onChangeHandler}
                />
              </div>

              <div>
                <InputLabel id="gender-label" className="form-label">
                  Gender
                </InputLabel>
              </div>

              <div>
                <Select
                  labelId="gender"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={onChangeHandler}
                  label="Gender"
                  className="form-dropdown"
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </div>

              <div className="text-center pd-4 mt-2">
                <TextField
                  id="dateOfBirth"
                  label="Date Of Birth"
                  type="date"
                  name="dateOfBirth"
                  className="wd-90"
                  value={dateOfBirth}
                  onChange={onChangeHandler}
                />
              </div>

              <hr />

              <div>
                <Button
                  variant="contained"
                  className="reset-button"
                  onClick={onFormReset}
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  className="background register-button"
                  onClick={onFormSubmit}
                >
                  Register
                </Button>
              </div>

              <div className="text-center pd-1">
                <span className="color form-option" onClick={openLoginForm}>Already Registered?</span>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default register;

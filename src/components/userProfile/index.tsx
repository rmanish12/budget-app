import React from "react";

import {
  Grid,
  Paper,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import "../../index.css";

import { IUserProfileComponentProps } from '../types'

const userProfile: React.FC<IUserProfileComponentProps> = (props): JSX.Element => {

  const { state, onChangeHandler, onFormSubmit } = props;

  const { firstName, lastName, email, gender, dateOfBirth, error } = state;

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={11} sm={6}>
          <div className="mt-10">
            <Paper>
              <div className="text-center background">
                <h5 className="form-heading all-caps">Profile</h5>
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
                  value={email}
                  disabled
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

              <div className="text-center">
                <Button
                  className="background login-button"
                  onClick={onFormSubmit}
                >
                  Update Profile
                </Button>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default userProfile;

import React from "react";
import "../../index.css";

import { Grid, Paper, TextField, Button } from "@material-ui/core";

interface ILoginProps {
  email : string,
  password: string,
  error: string,
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>,
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>,
  onFormSubmit: React.MouseEventHandler<HTMLButtonElement>,
  openRegisterForm: React.MouseEventHandler<HTMLButtonElement>
}

const login: React.FC<ILoginProps> = (props): JSX.Element => {
  const { email, password, onEmailChange, onPasswordChange, error, onFormSubmit, openRegisterForm } = props;

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={11} sm={6}>
          
            <div className="mt-10">
              <Paper>
                <div className="text-center background">
                  <h5 className="form-heading all-caps">Login</h5>
                </div>

                <div className="text-center mt-minus-2">
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    label="Email"
                    className="wd-90"
                    value={email}
                    onChange={onEmailChange}
                  />
                </div>

                <div className="text-center pd-4 mt-2">
                  <TextField
                    type="password"
                    id="password"
                    name="password"
                    label="Password"
                    className="wd-90"
                    value={password}
                    onChange={onPasswordChange}
                  />
                </div>

                <div className="mt-minus-2">
                  <span className="form-error">{error}</span>
                </div>

                <hr />

                <div className="text-center">
                  <Button className="background login-button" onClick={onFormSubmit}>Login</Button>
                </div>

                <div className="text-center pd-1">
                  <span className="color form-option" onClick={openRegisterForm}>Create Account?</span>
                </div>
              </Paper>
            </div>
          
        </Grid>
      </Grid>
    </>
  );
};

export default login;

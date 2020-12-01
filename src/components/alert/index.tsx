import React, { SyntheticEvent } from "react";

import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

import "../../index.css";

import { IAlertProps } from '../types'

const alertItem: React.FC<IAlertProps> = (props): JSX.Element => {

  const { message, closeAlert, severity, openLoginForm } = props;

  return (
    <>
      <Snackbar
        open={message ? true : false}
        onClose={closeAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={closeAlert} severity={severity}>
          {message}{" "}
          {severity === "success" && (
            <span className="color form-option" onClick={openLoginForm}>Click here to Login</span>
          )}
        </Alert>
      </Snackbar>
    </>
  );
};

export default alertItem;

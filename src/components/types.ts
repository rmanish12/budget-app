import { Component } from "react";

export interface IProtectedRouteProps {
  Component: any,
  isAuthenticated: boolean
}

export interface IAppProps {
  user: {
    isAuthenticated: boolean;
    firstName: string;
  };
  authenticateUser: Function
  onLogout: React.MouseEventHandler<HTMLDivElement>
}

export interface IAlertProps {
  message: string;
  closeAlert: React.MouseEventHandler<HTMLButtonElement>;
  severity: any;
  openLoginForm?: React.MouseEventHandler<HTMLButtonElement>
}

export interface ILoginProps {
  email: string;
  password: string;
  error: string;
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>;
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>;
  onFormSubmit: React.MouseEventHandler<HTMLButtonElement>;
  openRegisterForm: React.MouseEventHandler<HTMLButtonElement>;
}

export interface INavbarComponentProps {
  isAuthenticated: boolean;
  toggleDrawer: any;
  isDrawerOpen: boolean;
  firstName: string
  onLogout: React.MouseEventHandler<HTMLDivElement>
}

export interface IRegisterComponentProps {
  state: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    dateOfBirth?: string;
    gender?: string;
    error?: any;
  };
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
  onFormSubmit?: React.MouseEventHandler<HTMLButtonElement>;
  onFormReset?: React.MouseEventHandler<HTMLButtonElement>;
  openLoginForm?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ISideDrawerProps {
  toggleDrawer: any;
  isDrawerOpen: boolean;
  isAuthenticated: boolean;
  firstName: string
  onLogout: React.MouseEventHandler<HTMLDivElement>
}

export interface IUserProfileComponentProps {
  state: {
      firstName: string,
      lastName: string,
      email: string,
      gender: string,
      dateOfBirth: string,
      error: {
          firstName: boolean
      }
  };
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  onFormSubmit: React.MouseEventHandler<HTMLButtonElement>
}

export interface IChangePasswordComponentProps {
  state: {
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
    error: string
  },
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>,
  onFormSubmit: React.MouseEventHandler<HTMLButtonElement>
}

export interface IHomeComponentProps {
  getMonthlyBudgetOverview: Function,
  budget: any
}

export interface ITotalBudgetComponentProps {
  getMonthlyBudgetOverview: Function,
  monthlyBudget: any
}

export interface IDialogBoxComponentProps {
  heading: string,
  message: string,
  level: string,
  onHide: React.MouseEventHandler<HTMLButtonElement>,
  show: boolean
}

export interface IAddComponentProps {
  items: any[],
  types: any,
  onAddItemHandler: any,
  onSaveItemHandler: any,
  onDeleteItemHandler: any,
  onChangeHandler: any
}

export interface INewItemContainerProps {
  item: any,
  index: number,
  types: any,
  onDeleteItemHandler: React.MouseEventHandler<HTMLDivElement>,
  onChangeHandler: any
}
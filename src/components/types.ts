export interface IAppProps {
  user: {
    isAuthenticated: boolean;
    firstName: string;
  };
}

export interface IAlertProps {
  message: string;
  closeAlert: React.MouseEventHandler<HTMLButtonElement>;
  severity: any;
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
}

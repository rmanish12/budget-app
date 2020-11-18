export interface ILoginContainerProps {
  openRegisterForm: React.MouseEventHandler<HTMLButtonElement>;
  onLogin: Function;
}

export interface INavbarContainerProps {
  isAuthenticated: boolean;
  firstName: string
}

export interface IRegisterState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  dateOfBirth: string;
  error: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
  };
  registerSuccess: string;
  registerFailure: string;
}

export interface IRegisterContainerProps {
  openLoginForm: React.MouseEventHandler<HTMLButtonElement>;
}
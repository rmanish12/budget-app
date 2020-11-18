import { formatDate } from "../../util/formatDate";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "Male",
  dateOfBirth: formatDate(new Date("01/01/1990")),
  error: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  },
  registerSuccess: "",
  registerError: "",
};

export default initialState
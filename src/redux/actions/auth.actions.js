import { LOGIN, LOGOUT, REGISTER } from "../constants/auth.action.types";
import userService from "../../services/auth.service";

export const login = (email, password) => {
  const payload = userService.login(email, password);
  return { type: LOGIN, payload };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const register = (firstname, lastname, email, password) => {
  const payload = userService.register(firstname, lastname, email, password);
  return { type: REGISTER, payload };
};

import { REGISTER, LOGIN, LOGOUT } from "../constants/auth.action.types";
import { REACT_APP_JWT_KEY } from "../../config";

export const localStorageMiddleware = store => next => action => {
  if (action.type === REGISTER || action.type === LOGIN) {
    if (!action.error && action.payload && action.payload.token) {
      window.localStorage.setItem(REACT_APP_JWT_KEY, action.payload.token);
    }
  } else if (action.type === LOGOUT) {
    window.localStorage.setItem(REACT_APP_JWT_KEY, "");
  }
  next(action);
};

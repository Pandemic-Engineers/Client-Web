import { REGISTER, LOGIN } from "../constants/auth.action.types";

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        errors: action.error ? action.payload.error : null
      };
    case LOGIN:
      return {
        ...state,
        errors: action.error ? action.payload.error : null,
        user: action.error ? null : action.payload
      };
    default:
      return state;
  }
};

import {
  ASYNC_START,
  ASYNC_END,
  REDIRECT
} from "../constants/common.action.types";
import { LOGIN, REGISTER } from "../constants/auth.action.types";
import {
  ASSET_CREATE,
  ASSET_UPDATE,
  SITE_CREATE,
  LOG_EVENT
} from "../constants/asset.action.types";

const defaultState = {
  currentUser: null,
  token: null,
  redirectTo: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirectTo: null };
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        token: action.error
          ? null
          : action.payload
          ? action.payload.token
          : null,
        currentUser: action.error ? null : action.payload,
        redirectTo: action.error ? null : action.payload.token ? "/" : ""
      };
    case ASSET_CREATE:
    case ASSET_UPDATE:
      return {
        ...state,
        redirectTo: action.error ? null : "/assets"
      };
    case SITE_CREATE:
      return {
        ...state,
        redirectTo: action.error ? null : "/sites"
      };
    case LOG_EVENT:
      let redirectTo = !action.from
        ? "/sites"
        : action.from === "site"
        ? `/sites/${action.key}`
        : `/assets/${action.key}`;
      return {
        ...state,
        redirectTo: action.error ? null : redirectTo
      };
    case ASYNC_START:
      return { ...state, inProgress: true };
    case ASYNC_END:
      return { ...state, inProgress: false };
    default:
      return state;
  }
};

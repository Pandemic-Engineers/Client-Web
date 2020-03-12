import { ASYNC_START, ASYNC_END } from "../constants/common.action.types";
import { LOGOUT } from "../constants/auth.action.types";

export const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    action.payload.then(
      res => {
        console.log("RESULT", res);
        action.payload = res;
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch(action);
      },
      error => {
        console.log("ERROR", error);
        action.error = true;
        action.payload = error.response.data;
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        //token is expired or inadequate permissions
        if (error.response.status === 401) {
          store.dispatch({ type: LOGOUT });
        }
        store.dispatch(action);
      }
    );
    return;
  }
  next(action);
};

function isPromise(v) {
  return v && typeof v.then === "function";
}

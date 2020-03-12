import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { promiseMiddleware } from "./middlewares/promise.middleware";
import { localStorageMiddleware } from "./middlewares/localStorage.middleware";
import reducer from "./reducer";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware, createLogger()));
  }
  return applyMiddleware(...middleware);
};

export const store = createStore(
  reducer,
  bindMiddleware([promiseMiddleware, localStorageMiddleware])
);

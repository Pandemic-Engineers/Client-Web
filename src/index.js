import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ErrorBoundary from "./ErrorBoundary";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { REACT_APP_SITE_NAME } from "../config";
import { redirect } from "../redux/actions/common.actions";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Assets from "./Assets";
import AssetDetail from "./AssetDetail";
import AssetAdd from "./AssetAdd";

function App() {
  const common = useSelector(state => state.common);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (common.redirectTo) {
      history.push(common.redirectTo);
      dispatch(redirect());
    }
  }, [common]);

  return (
    <div id="site-wrap">
      <Helmet>
        <title>{REACT_APP_SITE_NAME}</title>
      </Helmet>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/assets/add" component={AssetAdd} />
          <Route path="/assets/:key" component={AssetDetail} />>
          <Route path="/assets" component={Assets} />
          <Redirect from="*" to="/" />
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;

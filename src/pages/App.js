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
import Assets from "./Assets/Index";
import AssetDetail from "./Assets/AssetDetail";
import AssetAdd from "./Assets/AssetAdd";
import Sites from "./Sites/Index";
import SiteDetail from "./Sites/SiteDetail";
import SiteAdd from "./Sites/SiteAdd";
import EventAdd from "./Events/Add";

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
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/assets/add" component={AssetAdd} />
          <Route path="/assets/:key" component={AssetDetail} />>
          <Route path="/assets" component={Assets} />
          <Route exact path="/sites/add" component={SiteAdd} />
          <Route path="/sites/:key" component={SiteDetail} />>
          <Route path="/sites" component={Sites} />
          <Route path="/events/add" component={EventAdd} />
          <Redirect from="*" to="/" />
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;

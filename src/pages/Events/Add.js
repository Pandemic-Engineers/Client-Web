import React, { useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loadEventAddPage,
  unloadEventAddPage,
  logEvent
} from "../../redux/actions/asset.actions";
import ListErrors from "../../components/ListErrors";

// A custom hook that builds on useLocation to parse
// the query string for you.
// https://reacttraining.com/react-router/web/example/query-parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function() {
  const query = useQuery();
  const from = query.get("from");
  const key = query.get("key");
  const asset = useSelector(state => state.asset);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadEventAddPage());
    return () => dispatch(unloadEventAddPage());
  }, [key]);

  const handleSubmit = (asset, site) => ev => {
    ev.preventDefault();
    dispatch(logEvent(asset, site, from, key));
  };

  if (!asset.sites || !asset.assets) {
    return <div>loading...</div>;
  }
  return (
    <div id="main">
      <div id="content">
        <div id="content-clear">
          <div className="focus-wrap">
            <div className="box-header">
              <h2> Log Event</h2>
            </div>
            <Formik
              initialValues={{
                site: from === "site" ? key : "",
                asset: from === "asset" ? key : ""
              }}
              // validationSchema={AssetSchema}
            >
              {({ values }) => (
                <Form>
                  <div className={`form-item`}>
                    <label htmlFor="name">Site</label>
                    <Field as="select" name="site">
                      {asset.sites.map(item => {
                        return <option value={item.key}>{item.name}</option>;
                      })}
                    </Field>
                  </div>
                  <div className={`form-item`}>
                    <label htmlFor="name">Asset</label>
                    <Field as="select" name="asset">
                      {asset.assets.map(item => {
                        return <option value={item.key}>{item.name}</option>;
                      })}
                    </Field>
                  </div>
                  <ListErrors errors={asset.errors} />

                  <div className="form-item">
                    <button
                      className="SubmitButton"
                      onClick={handleSubmit(values.asset, values.site)}
                    >
                      Add
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

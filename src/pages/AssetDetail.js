import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAsset,
  updateAsset,
  onUnloadAssetDetail
} from "../redux/actions/asset.actions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ListErrors from "../components/ListErrors";

const AssetSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Asset name must be at least 2 letters")
    .required("Asset name is required.")
});

function Assets({}) {
  let { key } = useParams();
  const asset = useSelector(state => state.asset);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsset(key));
    return () => dispatch(onUnloadAssetDetail()); // => componentWillUnmount
  }, [key]);
  // const handleSubmit = (name) => dispatch(updateAsset(key, name));

  if (!asset.asset) {
    return <div>loading...</div>;
  }
  const handleClick = name => ev => {
    ev.preventDefault();
    // window.alert(name)
    dispatch(updateAsset(key, name));
  };

  return (
    <div id="main">
      <div id="content">
        <div id="content-clear">
          <div className="focus-wrap">
            <div className="box-header">
              <h2> Asset Detail</h2>
            </div>
            <Formik
              initialValues={{ name: asset.asset.name }}
              validationSchema={AssetSchema}
              // onSubmit={(payload, { setSubmitting }) => {
              //   handleSubmit(payload.name);
              //   setSubmitting(false);
              // }}
            >
              {({ touched, errors, isSubmitting, values }) => (
                <Form>
                  <div
                    className={`form-item ${
                      touched.name && errors.name ? "error" : ""
                    }`}
                  >
                    <label htmlFor="name">Name</label>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Enter Asset Name"
                    />
                    <ErrorMessage
                      name="name"
                      className="error-message"
                      component="div"
                    />
                  </div>
                  <ListErrors errors={asset.errors} />
                  <div className="form-item">
                    {/* <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Please wait..." : "Update"}
                    </button> */}
                  </div>
                  <div className="form-item">
                    <button
                      className="SubmitButton"
                      onClick={handleClick(values.name)}
                    >
                      Update
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

export default Assets;

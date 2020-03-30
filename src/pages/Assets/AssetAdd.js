import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createAsset } from "../../redux/actions/asset.actions";
import ListErrors from "../../components/ListErrors";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

const AssetSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Asset name must be at least 2 letters")
    .required("Asset name is required.")
});

function AssetAdd() {
  const dispatch = useDispatch();
  const asset = useSelector(state => state.asset);
  const handleSubmit = name => dispatch(createAsset(name));
  return (
    <div id="main">
      <Nav />
      <div id="content">
        <Header />
        <div className="content-wrap content-narrow">
          <div className="box-header">
            <h2>Create New Site</h2>
          </div>
          <Formik
            initialValues={{ name: "" }}
            validationSchema={AssetSchema}
            onSubmit={(payload, { setSubmitting }) => {
              handleSubmit(payload.name);
              setSubmitting(false);
            }}
          >
            {({ touched, errors, isSubmitting }) => (
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
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Please wait..." : "Add"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default AssetAdd;

import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createSite } from "../../redux/actions/asset.actions";
import ListErrors from "../../components/ListErrors";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

const SiteSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Site name must be at least 2 letters")
    .required("Site name is required.")
});

export default () => {
  const dispatch = useDispatch();
  const asset = useSelector(state => state.asset);
  const handleSubmit = name => dispatch(createSite(name));
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
            validationSchema={SiteSchema}
            onSubmit={(payload, { setSubmitting }) => {
              handleSubmit(payload.name);
              setSubmitting(false);
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form>
                <div
                  className={`form-item form-item-first ${
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
                <div className={`form-item`}>
                  <label htmlFor="name">Longitude</label>
                  <Field name="longitude" type="text" placeholder="10.001122" />
                </div>
                <div className={`form-item`}>
                  <label htmlFor="name">Latitude</label>
                  <Field name="latitude" type="text" placeholder="10.001122" />
                </div>
                <div className={`form-item`}>
                  <label htmlFor="name">Notes</label>
                  <Field name="notes" component="textarea" placeholder="" />
                </div>
                <ListErrors errors={asset.errors} />
                <div className="form-item">
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Please wait..." : "Create Site"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

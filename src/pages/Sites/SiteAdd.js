import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createSite } from "../../redux/actions/asset.actions";
import ListErrors from "../../components/ListErrors";

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
    <div id="focus">
      <div id="focus-header">
        <h1>Pellar Theia</h1>
        <div className="main">
          <div className="main-wrap">
            <div className="focus-wrap">
              <div className="box-header">
                <h2>Login</h2>
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
      </div>
    </div>
  );
};

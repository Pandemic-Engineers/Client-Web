import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/auth.actions";
import ListErrors from "../components/ListErrors";

const RegisterSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "First name must be at least 2 letters")
    .required("First name is required."),
  lastname: Yup.string()
    .min(2, "Last name must be at least 2 letters")
    .required("Last name is required."),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required")
});

function Register() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const handleSubmit = (firstname, lastname, email, password) =>
    dispatch(register(firstname, lastname, email, password));

  return (
    <div id="focus">
      <div id="focus-header">
        <h1>Pellar Theia</h1>
        <div className="main">
          <div className="main-wrap">
            <div className="focus-wrap">
              <div className="box-header">
                <h2>Register</h2>
              </div>
              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                  password: ""
                }}
                validationSchema={RegisterSchema}
                onSubmit={(payload, { setSubmitting }) => {
                  // alert(payload.email)
                  handleSubmit(
                    payload.firstname,
                    payload.lastname,
                    payload.email,
                    payload.password
                  );
                  setSubmitting(false);
                }}
              >
                {({ touched, errors, isSubmitting }) => (
                  <Form>
                    <div
                      className={`form-item ${
                        touched.firstname && errors.firstname ? "error" : ""
                      }`}
                    >
                      <label htmlFor="firstname">First Name</label>
                      <Field
                        name="firstname"
                        type="text"
                        placeholder="Enter your first name"
                      />
                      <ErrorMessage
                        name="firstname"
                        className="error-message"
                        component="div"
                      />
                    </div>
                    <div
                      className={`form-item ${
                        touched.lastname && errors.lastname ? "error" : ""
                      }`}
                    >
                      <label htmlFor="lastname">Last name</label>
                      <Field
                        name="lastname"
                        type="text"
                        placeholder="Enter your last name"
                      />
                      <ErrorMessage
                        name="lastname"
                        className="error-message"
                        component="div"
                      />
                    </div>
                    <div
                      className={`form-item ${
                        touched.email && errors.email ? "error" : ""
                      }`}
                    >
                      <label htmlFor="email">Email</label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Enter email"
                      />
                      <ErrorMessage
                        name="email"
                        className="error-message"
                        component="div"
                      />
                    </div>
                    <div
                      className={`form-item ${
                        touched.password && errors.password ? "error" : ""
                      }`}
                    >
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                      />
                      <ErrorMessage
                        name="password"
                        className="error-message"
                        component="div"
                      />
                    </div>
                    <ListErrors errors={auth.errors} />
                    <div className="form-item">
                      <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Please wait..." : "Register"}
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
}

export default Register;

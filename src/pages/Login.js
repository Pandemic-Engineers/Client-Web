import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/auth.actions";
import ListErrors from "../components/ListErrors";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required")
});

function Login() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const handleSubmit = (email, password) => dispatch(login(email, password));

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
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(payload, { setSubmitting }) => {
                  handleSubmit(payload.email, payload.password);
                  setSubmitting(false);
                }}
              >
                {({ touched, errors, isSubmitting }) => (
                  <Form>
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
                        {isSubmitting ? "Please wait..." : "Login"}
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

export default Login;

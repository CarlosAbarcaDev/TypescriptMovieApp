import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { loginService, createStorageSync } from "../Services";

const Login = () => {
  let navigate: NavigateFunction = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const initialValues: {
    username: string;
    password: string;
  } = {
    username: "",
    password: "",
  };
  // eve.holt@reqres.in
  // cityslicka

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;

    setMessage("");
    setLoading(true);

    loginService(username, password).then(
      (resp) => {
        console.log(resp);
        createStorageSync("user-token", JSON.stringify(resp.token));
          navigate("/home");
          window.location.reload();
        
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.error) ||
          error.error ||
          error.toString();

        setLoading(false);
        setMessage(resMessage.toUpperCase());
      }
    );
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      <Form>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <div className="form-outline form-white mb-4">
                        <Field
                          name="username"
                          type="text"
                          className="form-control"
                        />
                        <label className="form-label">Email</label>
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <Field
                          name="password"
                          type="password"
                          className="form-control"
                        />
                        <label className="form-label">Password</label>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>

                      <div className="form-group">
                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                          disabled={loading}
                        >
                          {loading && (
                            <span className="spinner-border spinner-border-sm m-1"></span>
                          )}
                          <span>Login</span>
                        </button>
                      </div>

                      {message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {message}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Form>
    </Formik>
    //     <div className="col-md-12 d-flex">
    //     <div className="">
    //       <img
    //         src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
    //         alt="profile-img"
    //         className="profile-img-card"
    //       />
    //       <Formik
    //         initialValues={initialValues}
    //         validationSchema={validationSchema}
    //         onSubmit={handleLogin}
    //       >
    //         <Form>
    //           <div className="form-group">
    //             <label htmlFor="username">Username</label>
    //             <Field name="username" type="text" className="form-control" />
    //             <ErrorMessage
    //               name="username"
    //               component="div"
    //               className="alert alert-danger"
    //             />
    //           </div>

    //           <div className="form-group">
    //             <label htmlFor="password">Password</label>
    //             <Field name="password" type="password" className="form-control" />
    //             <ErrorMessage
    //               name="password"
    //               component="div"
    //               className="alert alert-danger"
    //             />
    //           </div>

    //           <div className="form-group">
    //             <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
    //               {loading && (
    //                 <span className="spinner-border spinner-border-sm"></span>
    //               )}
    //               <span>Login</span>
    //             </button>
    //           </div>

    //           {message && (
    //             <div className="form-group">
    //               <div className="alert alert-danger" role="alert">
    //                 {message}
    //               </div>
    //             </div>
    //           )}
    //         </Form>
    //       </Formik>
    //     </div>
    //   </div>
  );
};

export default Login;

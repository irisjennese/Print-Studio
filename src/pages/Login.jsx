import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/login.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (values, { setSubmitting }) => {
    sessionStorage.setItem('email', values.email);
    sessionStorage.setItem('password', values.password);
    setIsLoggedIn(true);
    navigate('/checkout');
    setSubmitting(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    setIsLoggedIn(false);
  };

  return (
    <>
      <Helmet title='Login' />
      <CommonSection title='Login' />
      <div className="section">
        {isLoggedIn ? (
          <div className="row justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h4>You are logged in!</h4>
                <button type="button" className="btn mt-4" onClick={handleLogout}>Log out</button>
              </div>
            </div>
          </div>
        ) : (
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 text-center align-self-center py-5">
                    <div className="section pb-5 pt-5 pt-sm-2 text-center">
                      <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                      <label htmlFor="reg-log"></label>
                      <div className="card-3d-wrap mx-auto">
                        <div className="card-3d-wrapper">
                          <div className="card-front">
                            <div className="center-wrap">
                              <div className="section text-center">
                                <h4 className="pb-3">
                                  <img src="https://rilbesib.sirv.com/Images/Print%20Studio/print.png" alt="logo" style={{ width: "200px" }} />
                                </h4>
                                <Form>
                                  <div className="form-group">
                                    <Field type="email" name="email" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                    <i className="fa-solid fa-arrow-up-left"></i>
                                    <ErrorMessage name="email" className="text-danger" component="div" />
                                  </div>
                                  <div className="form-group mt-2">
                                    <Field type="password" name="password" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                    <ErrorMessage name="password" className="text-danger" component="div" />
                                  </div>
                                  <button type="submit" className="btn mt-4" disabled={isSubmitting}>submit</button>
                                  <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        )}
      </div>
    </>
  );
}

export default Login;

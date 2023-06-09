import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

function Signup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('email', values.email);
      localStorage.setItem('password', values.password);
      navigate('/home');
    },
  });

  return (
    <>
      <Helmet title='Sign Up'>
        <CommonSection title='Sign-up' />
        <div class="section">
          <form onSubmit={formik.handleSubmit} class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                  <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label for="reg-log"></label>
                  <div class="card-3d-wrap mx-auto">
                    <div class="card-3d-wrapper">
                      <div class="card-front">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="pb-3">
                              <img src="https://inevelle.sirv.com/assets/images/logo_white_sign%20in.svg" alt="logo" style={{width:"200px"}}/>
                            </h4>
                            <div class="form-group mt-2">
                              <input type="text" name="name" class="form-style" placeholder="Your Full Name" id="logname" required autoComplete="off" onChange={formik.handleChange} value={formik.values.name} />
                              <i class="input-icon uil uil-user"></i>
                              {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                            </div>
                            <div class="form-group mt-2">
                              <input type="email" name="email" class="form-style" placeholder="Your Email" id="logemail" required autoComplete="off" onChange={formik.handleChange} value={formik.values.email} />
                              <i class="fa-solid fa-arrow-up-left"></i>
                              {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                            </div>
                            <div class="form-group mt-2">
                              <input type="password" name="password" class="form-style" placeholder="Your Password" id="logpass" required autoComplete="off" onChange={formik.handleChange} value={formik.values.password} />
                              <i class="fa-solid fa-arrow-up-right"></i>
                              {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                            </div>
                            <button type="submit" class="btn mt-4">submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Helmet>
    </>
  );
}
export default Signup;

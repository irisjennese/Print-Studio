import React from "react";
import { useFormik } from "formik";

function Form2() {

  const formik = useFormik({
    initialValues: {
      old_password: '',
      new_password: '',
      retype_password: '',
    },
    onSubmit: values =>{
      console.log('Form data', values)
    }
  })

  // console.log('formik values', formik.values)

    return(
    <>
    <form className="mb-5" onSubmit={formik.handleSubmit}>
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="old_password"  >Old password</label>
                    <input className="form-control" id="old_password" type="password" onChange={formik.handleChange} value={formik.values.old_password} />
                  </div>
                </div>
                <div className="row gy-3">
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="new_password">New password</label>
                    <input className="form-control" id="new_password" type="password" onChange={formik.handleChange} value={formik.values.new_password} />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="retype_password">Retype new password</label>
                    <input className="form-control" id="retype_password" type="password" onChange={formik.handleChange} value={formik.values.retype_password} />
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn btn-primary" type="submit"><i className="fas fa-save me-2"></i>Change password</button>
                  </div>
                </div>
              </form>
    </>
    );
}

export default Form2;
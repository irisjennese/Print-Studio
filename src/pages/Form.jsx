import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  street: yup.string().required('street is required'),
  city: yup.string().required('street is required'),
  zip: yup.string().required('street is required'),
  region: yup.string().required('street is required'),
  province: yup.string().required('street is required'),
  phone: yup.string().required('street is required'),
  email: yup.string().required('street is required'),
});



function Form() {

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      street: '',
      city: '',
      zip: '',
      region: '',
      province: '',
      phone: '',
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="row gy-3">
          <div className="col-sm-6">
            <label className="form-label" htmlFor="firstname" required="required">Firstname</label>
            <input className="form-control" id="firstname" required="required" type="text" onChange={formik.handleChange} value={formik.values.firstname} />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="lastname" required="required" >Lastname</label>
            <input className="form-control" id="lastname" required="required" type="text" onChange={formik.handleChange} value={formik.values.lastname} />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="company" required="required">Company</label>
            <input className="form-control" id="company" required="required" type="text" />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="street" required="required">Street</label>
            <input className="form-control" id="street" required="required" type="text" onChange={formik.handleChange} value={formik.values.street} />
          </div>
          <div className="col-sm-6 col-md-3">
            <label className="form-label" htmlFor="city" required="required">City</label>
            <input className="form-control" id="city" required="required" type="text" onChange={formik.handleChange} value={formik.values.city} />
          </div>
          <div className="col-sm-6 col-md-3">
            <label className="form-label" htmlFor="zip" required="required">ZIP</label>
            <input className="form-control" id="zip" required="required" type="text" onChange={formik.handleChange} value={formik.values.zip} />
          </div>
          <div className="col-sm-6 col-md-3">
            <label className="form-label" htmlFor="region">Region</label>
            <select className="form-control" id="region" onChange={formik.handleChange} value={formik.values.region}>
              <option value="">Select Region</option>
              <option value="Luzon">Luzon</option>
              <option value="Visayas">Visayas</option>
              <option value="Mindanao">Mindanao</option>
            </select>
          </div>

          <div className="col-sm-6 col-md-3">
            <label className="form-label" htmlFor="province" required="required" >Province</label>
            <select className="form-check js-country form-control" id="province" required="required" name="province" onChange={formik.handleChange} value={formik.values.province}>
              <option value="">Select Province</option>
              <option value="Abra">Abra</option>
              <option value="Agusan del Norte">Agusan del Norte</option>
              <option value="Agusan del Sur">Agusan del Sur</option>
              <option value="Aklan">Aklan</option>
              <option value="Albay">Albay</option>
              <option value="Antique">Antique</option>
              <option value="Apayao">Apayao</option>
              <option value="Aurora">Aurora</option>
              <option value="Basilan">Basilan</option>
              <option value="Bataan">Bataan</option>
              <option value="Batanes">Batanes</option>
              <option value="Batangas">Batangas</option>
              <option value="Benguet">Benguet</option>
              <option value="Biliran">Biliran</option>
              <option value="Bohol">Bohol</option>
              <option value="Bukidnon">Bukidnon</option>
              <option value="Bulacan">Bulacan</option>
              <option value="Cagayan">Cagayan</option>
              <option value="Camarines Norte">Camarines Norte</option>
              <option value="Camarines Sur">Camarines Sur</option>
              <option value="Camiguin">Camiguin</option>
              <option value="Capiz">Capiz</option>
              <option value="Catanduanes">Catanduanes</option>
              <option value="Cavite">Cavite</option>
              <option value="Cebu">Cebu</option>
              <option value="Compostela Valley">Compostela Valley</option>
              <option value="Cotabato">Cotabato</option>
              <option value="Davao del Norte">Davao del Norte</option>
              <option value="Davao del Sur">Davao del Sur</option>
              <option value="Davao Occidental">Davao Occidental</option>
              <option value="Davao Oriental">Davao Oriental</option>
              <option value="Dinagat Islands">Dinagat Islands</option>
              <option value="Eastern Samar">Eastern Samar</option>
              <option value="Guimaras">Guimaras</option>
              <option value="Ifugao">Ifugao</option>
              <option value="Ilocos Norte">Ilocos Norte</option>
              <option value="Ilocos Sur">Ilocos Sur</option>
              <option value="Iloilo">Iloilo</option>
              <option value="Isabela">Isabela</option>
              <option value="Kalinga">Kalinga</option>
              <option value="La Union">La Union</option>
              <option value="Laguna">Laguna</option>
              <option value="Lanao del Norte">Lanao del Norte</option>
              <option value="Lanao del Sur">Lanao del Sur</option>
              <option value="Leyte">Leyte</option>
              <option value="Maguindanao">Maguindanao</option>
              <option value="Marinduque">Marinduque</option>
              <option value="Masbate">Masbate</option>
              <option value="Misamis Occidental">Misamis Occidental</option>
              <option value="Misamis Oriental">Misamis Oriental</option>
              <option value="Mountain Province">Mountain Province</option>
              <option value="Nueva Ecija">Nueva Ecija</option>
              <option value="Nueva Vizcaya">Leyte</option>
              <option value="Occidental Mindoro">Occidental Mindoro</option>
              <option value="Oriental Mindoro">Oriental Mindoro</option>
            </select>
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="phone" required="required" >Telephone</label>
            <input className="form-control" id="phone" required="required" type="text" onChange={formik.handleChange} value={formik.values.phone} />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="email" required="required" >Email</label>
            <input className="form-control" id="email" required="required" type="email" onChange={formik.handleChange} value={formik.values.email} />
          </div>
          <div className="col-sm-12 text-center">
            <button className="btn btn-primary" type="submit"><i className="fas fa-save me-2"></i>Save changes</button>
          </div>
        </div>
      </form>

    </>
  );
}
export default Form;
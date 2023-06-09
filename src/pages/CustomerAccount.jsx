import jaime from "../assets/images/jaime.jpg"
import Form from "./Form";
import Form2 from "./Form2";
import CustomerView from "./CustomerView";
import { useEffect } from "react";

function CustomerAccount() {
  useEffect(() => {
    const token = localStorage.setItem('userToken');
    if (token){
    console.log('user is logged in');
    }else {
    console.log('user is NOT logged in');
    }
    }, []);

  return (
    <>
      <div className="search-panel d-none" id="searchPanel">
        <div className="search-panel-inner p-4">
          <div className="seach-panel-close">
            <button className="btn btn-primary rounded-0 shadow-0 p-2" id="searchCloseBtn" type="button" onclick="closeSearch()">
              <svg className="svg-icon text-white mt-1">
                <use href="#shopping-bag-1"></use>
              </svg>
            </button>
          </div>
          <form className="w-100" action="#">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="d-flex align-items-center mb-3 border-bottom">
                  <input className="form-control form-control-lg bg-none border-0 shadow-0 rounded-0 px-0" type="text" placeholder="What are you searching for" aria-describedby="button-addon2" />
                  <button className="btn btn-link text-dark shadow-0 px-0 text-decoration-none" id="button-addon2" type="submit"><i className="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-9 order-2 order-lg-1">
              <h1>Your profile</h1>
            </div>
            <div className="col-lg-3 text-end order-1 order-lg-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb py-4 justify-content-lg-end mb-0">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active">Your profile</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container py-4">
          <div className="row gx-5 gy-5">

            <div className="col-xl-3 col-lg-4">
              <div className="bg-light text-center p-4 rounded-top-lg border border-bottom-0"><a className="d-inline-block" href="#Profile"><img className="{handleUpload}" src={jaime} width="150" alt="..." /></a>
                <h5>Jaime Yanoc</h5>
                <p className="text-muted text-small">Cebu, Philippines</p>
              </div>
              <CustomerView />

            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="bg-light rounded-pill px-4 py-3 mb-5">
                <h5 className="mb-0">Change password  </h5>
              </div>
              <Form2 />


              <div className="bg-light rounded-pill px-4 py-3 mb-5">
                <h5 className="mb-0">Personal details</h5>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerAccount;
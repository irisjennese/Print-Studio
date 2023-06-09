import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser, faMapMarker, faKey } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerView() {
    const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  };
//   const handleOrderClick = () => {
//     navigate('/cart');
//   }

    return (
        <>
            <nav className="list-group">
                {/* <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="/orders">
                    <span className="fw-normal text-sm text-dark py-1" onClick={handleOrderClick}>
                        <FontAwesomeIcon icon={faShoppingBag} />Orders</span></a> */}
                <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-0" href="/account" aria-current="true">
                    <span className="fw-normal text-sm py-1">
                        <FontAwesomeIcon icon={faUser} /> Profile</span></a><a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="/customer-addresses">
                    <span className="fw-normal text-sm text-dark py-1">
                        <FontAwesomeIcon icon={faMapMarker} />
                        Addresses
                    </span></a>
                <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="/logout">
                    <span className="fw-normal text-sm text-dark py-1" onClick={handleHome}>
                        <FontAwesomeIcon icon={faKey} />Log out</span></a>
            </nav>

        </>
    );
}

export default CustomerView;

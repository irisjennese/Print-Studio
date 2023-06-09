import React from 'react';
import { useSelector } from 'react-redux';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const subtotal = totalAmount + 40;

  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    navigate('/order-confirmation');
  };

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <Col className='mb-5'>
                <div className="border p-2">
                  <h5>Shipping Address</h5>

                  <div className="d-flex">
                    <p className="pe-5 fw-bold">Iris Raymundo</p>
                    <p className="fw-bold">0925682158</p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold">1125 San Agustin Novaliches Queszon City</p>
                  </div>
                </div>
              </Col>
              <Col>
                <h5>Order Details</h5>
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => {
                      console.log(item.image);
                      return (
                        <tr key={index}>
                          <td>
                            <img src={item.image} alt='' style={{ width: "50px", height: "50px" }} />
                          </td>
                          <td>{item.productName}</td>
                          <td>₱{item.price}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Col>
            </Col>
            <Col lg="4" className="border">
              <form onSubmit={formHandler}>
                <div>
                  <h5 className="py-3">Payment Section</h5>
                  <div className='border rounded-2 py-4 px-3 mt-1'>
                    <div className="form-check-reverse d-flex justify-content-between">
                      <label className="form-check-label" htmlFor="cash-on-delivery">
                        Cash On Delivery
                      </label>
                      <input className="form-check-input" type="radio" name="payment-type" id="cash-on-delivery" required />
                    </div>
                  </div>
                  <div className='border rounded-2 py-4 px-3 mt-1'>
                    <div className="form-check-reverse d-flex justify-content-between">
                      <label className="form-check-label" htmlFor="credit-debit-card">
                        Credit / Debit Card
                      </label>
                      <input className="form-check-input" type="radio" name="payment-type" id="credit-debit-card" required />
                    </div>
                  </div>
                  <div className='border rounded-2 py-4 px-3 mt-1'>
                    <div className="form-check-reverse d-flex justify-content-between">
                    <label className="form-check-label" htmlFor="gcash">
                      Gcash
                    </label>
                    <input className="form-check-input" type="radio" name="payment-type" id="gcash" required/>
                  </div>
                </div>
              </div>
              <div className="border-top mt-3">
                <h5 className="py-3 ">Order Summary:</h5>
                <div className='d-flex justify-content-between'><span>Subtotal</span> <span>P{Number(totalAmount).toFixed(2)}</span></div>
                <div className='d-flex justify-content-between'><span className="pb-2">Shipping fee</span> <span>P40</span></div>
              </div>
              <div className='d-flex justify-content-between border-top'><span className="fw-bold fs-5">Total</span><span className="fw-bold fs-5">P{Number(subtotal).toFixed(2)}</span></div>
              <button className='btn btn-primary my-3 d-flex mx-auto'  >Place Order</button>
            </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );


                  };
export default Checkout;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../redux/slices/cartSlice';
import { motion } from 'framer-motion';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (index) => {
    dispatch(cartActions.removeItem(index));
  };

  const navigateToCheckOut = () => {
    if (user && user.isLoggedIn) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <Helmet title='Cart'>
      <CommonSection title='Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length === 0 ? (
                <h2 className='fs-4 text-center'>No item added to the cart</h2>
              ) : (
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <motion.th whileTap={{ scale: 1.2 }}>Delete</motion.th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => {
                      console.log(item.image);
                      return (
                        <tr key={index}>
                          <td>
                            <img src={item.image} alt='' style={{width:"50px", height:"50px"}}/>
                          </td>
                          <td>{item.productName}</td>
                          <td>₱{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>
                            <i
                              className='fa fa-trash'
                              onClick={() => handleRemoveItem(index)}
                              style={{ cursor: 'pointer' }}
                            ></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg='3'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>Total Amount:</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>₱{Number(totalAmount).toFixed(2)}</h6>
                  <button className='btn btn-primary' onClick={navigateToCheckOut}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;

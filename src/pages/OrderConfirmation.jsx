import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../redux/slices/cartSlice';
// import { px } from 'framer-motion';
import CommonSection from '../components/UI/CommonSection';



const OrderConfirmation = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const subtotal = totalAmount + 40;
    const current = new Date();
    const current1 = new Date();
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    current.setDate(current.getDate() + 2);
    current1.setDate(current1.getDate() + 3);

    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate('/shop');
    };

    const shopMore = ()=>{
        handleRemoveFromCart();
        navigateToShop();
     }

     const dispatch = useDispatch();
     const handleRemoveFromCart = (index) => {
       dispatch(cartActions.clearCart(index));
     }

    return (
        <>
            <Helmet title='OrderConfirmation'>
                <CommonSection title='Order Details' />
                <section>
                    <Container >
                        <div>
                            <h3 className="text-center">Thank you for your purchase</h3>
                            <h2 className="text-center"> P{subtotal}</h2>
                            <p className="text-center fw-bold mb-3">Your order number is 01520</p>
                            <p className="text-center fw-bold mb-1">Delivery Dates:</p>
                        </div>
                        <Row>
                            <Col   className="d-flex align-items-center justify-content-evenly">
                                <p className="fw-bold fs-5 text-center" style={{minWidth:"240px"}}> Est: {current.toDateString()} - {current1.toDateString()}</p>
                            </Col>
                            <Col>
                                <ul className=" d-flex flex-wrap justify-content-center " style={{minWidth:"240px", margin:"0px", padding:"0px"}}>
                                    {cartItems.map((item) => {
                                        console.log(item.image);
                                        return (
                                            <li className="p-1 border rounded "> <img src={item.image} alt='' style={{ width: "100px", height: "100px" }} /></li>

                                        )
                                    })}
                                </ul>
                            </Col>

                        </Row>
                        <Row className="bg-light p-4 "style={{margin:"10px 0px"}} >
                            <Col>
                                <div className='text-center'><h5>Order Summary:</h5></div>
                            </Col>
                            <Col><p className="fs-4 fw-bold text-center">P{subtotal}</p></Col>
                            <Col><p className="fs-4 fw-bold text-center">Qty:{totalQuantity}</p></Col>
                            <Col>
                                <p>
                                    <a data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        <span className="d-flex align-items-center justify-content-center"><p className="me-3">View Order Details</p><i className="fa-solid fa-chevron-down fa-lg"></i></span>
                                    </a>
                                </p>
                            </Col>
                        </Row>
                        <div className="collapse p-0 m-0" id="collapseExample">
                            <div  className=" m-auto">
                                <h5 className="text-center pt-3">Order Details</h5>
                                <Row>
                                <Col lg="8">
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
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </Col>
                                <Col lg="4">
                                    <div className=" p-3 ">
                                        <h5>Shipping Address</h5>
                                    
                                        <div className="d-flex py-1">
                                            <p className="pe-5 fw-bold">Iris Raymundo</p> <p className="fw-bold">0925682158</p>
                                        </div>
                                        <div className="d-flex ">
                                            <p className="fw-bold">1125 San Agustin Novaliches Queszon City</p>
                                        </div>
                                    </div>
                                </Col>
                                </Row>
                            </div>
                        </div>
                        <div>
                            <button className='btn btn-primary my-3 d-flex mx-auto' onClick={shopMore} >Shop More</button>
                        </div>
                    </Container>
                </section>
            </Helmet>
        </>

    )
}

export default OrderConfirmation;
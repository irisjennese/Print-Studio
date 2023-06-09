import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import CustomerAccount from '../pages/CustomerAccount';
import CustomerAddresses from '../pages/CustomerAddresses';
import Form from '../pages/Form';
import Orders from '../pages/Orders';
import OrderConfirmation from '../pages/OrderConfirmation';
import Logout from '../pages/Logout';
// import RegisterForm from '../UI/RegisterForm';


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetails />} />
      <Route path='cart' element={<Cart />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='/login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/account' element={<CustomerAccount />} />
      <Route path='/form' element={<Form />} />
      <Route path='/home' element={<Logout />} />
      {/* <Route path='/register' element={<RegisterForm />} /> */}
      <Route path='/customer-addresses' element={<CustomerAddresses />} />
      <Route path='/order-confirmation' element={<OrderConfirmation />} />
    </Routes>
  );
};

export default Routers;

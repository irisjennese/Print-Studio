import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/logo/logo.svg';
// import userIcon from '../../assets/images/user-icon.png';
// import { motion } from 'framer-motion';
import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const nav_links = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'about-us',
    display: 'About Us',
  },
  {
    path: 'contact-us',
    display: 'Contact Us',
  },
  {
    path: 'login',
    display: 'Login', 
  },
  {
    path: 'signup',
    display: 'Signup', 
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    };

    window.addEventListener('scroll', stickyHeaderFunc);

    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle('active_menu');

  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate('/cart');
  };

  // const handleProfileClick = () => {
  //   navigate('/login');
  // }
 
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
            </div>
            <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'nav_active' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className='nav_icons'>
              <span className='cart_icon' onClick={navigateToCart}>
                <i class='ri-shopping-bag-line'></i>
                <span className='badge'>{totalQuantity}</span>
              </span>
              {/* <span onClick={handleProfileClick}> 
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt='usericon'
                /></span> */}
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};


export default Header;

import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/ps.gif';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/counter-timer-img.gif';
import jayson from "../assets/images/jayson.jpg"
import jaime from "../assets/images/jaime.jpg"
import marty from "../assets/images/marty.jpg"
import iris from "../assets/images/iris.jpg"

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [capProducts, setcapProducts] = useState([]);
  const [jacketProducts, setjacketProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'Tshirt'
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'Jersey'
    );

    const filteredcapProducts = products.filter(
      (item) => item.category === 'Cap'
    );

    const filteredjacketProducts = products.filter(
      (item) => item.category === 'Jacket'
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === 'Mug'
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setcapProducts(filteredcapProducts);
    setjacketProducts(filteredjacketProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <>
      <Helmet title={'Home'}>
        <section className='hero_section'>
          <Container>
            <Row>
              <Col lg='4' md='4'>
                <div className='hero_content'>
                  <p className='hero_subtitle'>Print Studio {year}</p>
                  <h2>High-quality solutions for all your printing needs!</h2>
                  <p>
                    Welcome to our Print Studio, where creativity meets technology. Our team of experts is dedicated to
                    providing high-quality printing services that exceed your expectations. From graphic design to
                    large-format printing, we offer a wide range of solutions to suit your needs. Let us bring your
                    ideas to life and make your vision a reality.
                  </p>

                  <motion.button whileTap={{ scale: 1.2 }} className='shop_btn'>
                    <Link to='/shop'>SHOP NOW</Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg='8' md='8'>
                <div className='hero_img'>
                  <img src={heroImg} alt='hero-banner' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Services />
        <section className='trending_products'>
          <Container>
            <Row>
              <Col lg='12' className='text-center mb-5'>
                <h2 className='section_title'>Trending Products</h2>
              </Col>
              <ProductList data={trendingProducts} />
            </Row>
          </Container>
        </section>

        <section className='best_sales'>
          <Container>
            <Row>
              <Col lg='12' className='text-center mb-5'>
                <h2 className='section_title'>Best Sales</h2>
              </Col>
              <ProductList data={bestSalesProducts} />
            </Row>
          </Container>
        </section>

        <section className='timer_count'>
          <Container>
            <Row>
              <Col lg='6' md='12' className='count_down-col'>
                <div className='clock_top-content'>
                  <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                  <h3 className='text-white fs-5 mb-3'>Quality Customise Jersey</h3>
                </div>
                <Clock />

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className='shop_btn store_btn'
                >
                  <Link to='/shop'>Visit Store</Link>
                </motion.button>
              </Col>
              <Col lg='6' md='12' className='text-end counter_img'>
                <img src={counterImg} alt='sale_jersey' />
              </Col>
            </Row>
          </Container>
        </section>

        <section className='new_arrivals'>
          <Container>
            <Row>
              <Col lg='12' className='text-center mb-5'>
                <h2 className='section_title'>New Arrivals</h2>
              </Col>
              <ProductList data={capProducts} />
              <ProductList data={jacketProducts} />
            </Row>
          </Container>
        </section>

        <section className='popular_category'>
          <Container>
            <Row>
              <Col lg='12' className='text-center mb-5'>
                <h2 className='section_title'>Popular in Category</h2>
              </Col>
              <ProductList data={popularProducts} />
            </Row>
          </Container>
        </section>
      </Helmet>

      <section className="section-white">
        <div className="container">
          <div className="row">

            <div className="col-md-12 text-center">
              <h2 className="section-title">
                The Team Behind Print Studio
              </h2>
              <p className="section-subtitle">
                PrintStudio is a team of passionate and talented individuals dedicated to providing high-quality printing solutions to clients across various industries.
              </p>
            </div>

            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={jayson} alt="Avatar" style={{ width: "100%", borderRadius: "10px" }} />
                  </div>
                  <div className="flip-card-back">
                    <h3>Jayson Herrera</h3>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={jaime} alt="Avatar" style={{ width: "100%", borderRadius: "10px" }} />
                  </div>
                  <div className="flip-card-back">
                    <h3>Jaime Yanoc</h3>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={marty} alt="Avatar" style={{ width: "100%", borderRadius: "10px" }} />
                  </div>
                  <div className="flip-card-back">
                    <h3>Marty D. Marbella</h3>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={iris} alt="Avatar" style={{ width: "100%", borderRadius: "10px" }} />
                  </div>
                  <div className="flip-card-back">
                    <h3>Iris Raymundo</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};


export default Home;

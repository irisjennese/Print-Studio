import React, { useState } from 'react';
import SortDropdown from '../components/UI/SortDropdown';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductList';

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const [sortOption, setSortOption] = useState('best-match');


  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'Jersey') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Jersey'
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === 'Cap') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Cap'
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === 'Jacket') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Jacket'
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === 'Mug') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Mug'
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === 'Tshirt') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Tshirt'
      );

      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  const handleSort = (sortValue) => {
    setSortOption(sortValue);

    let sortedProducts = [...productsData];
    switch (sortValue) {
      case 'popularity':
        sortedProducts.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'top-rated':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // no sorting
        break;
    }

    setProductsData(sortedProducts);
  };

  return (
    <Helmet title='shop'>
      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className='filter_widget'>
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value='Tshirt'>Tshirt</option>
                  <option value='Mug'>Mug</option>
                  <option value='Jacket'>Jacket</option>
                  <option value='Cap'>Cap</option>
                  <option value='Jersey'>Jersey</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className='filter_widget'>
              <SortDropdown sortOption={sortOption} onSort={handleSort} />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='search_box'>
                <input
                  type='text'
                  placeholder='Search......'
                  onChange={handleSearch}
                />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className='text-center fs-4'>No products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;

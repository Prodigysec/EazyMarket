import React, { useState, useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import axios from 'axios';
import { UserProvider } from './Context/UserContext';
import ProductList from './Components/ProductList';
import SearchBar from './Components/SearchBar';
import Footer1 from './Components/Footer1';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <UserProvider>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">EazyMarket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBar setSearchQuery={setSearchQuery} />
          </Navbar.Collapse>
        </Navbar>
        <Container className="mt-4">
          <h1 className="mb-4">EazyMarket</h1>
          <ProductList products={products} searchQuery={searchQuery} />
        </Container>
      </UserProvider>
      <Footer1 />
    </>
  );
};

export default App;

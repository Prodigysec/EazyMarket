import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { ProductsProvider } from './Context/ProductsContext';
import { UserProvider } from './Context/UserContext';
import ProductList from './Components/ProductList';
import SearchBar from './Components/SearchBar';
import Footer1 from './Components/Footer1';
import Navbar from './Components/Navbar';

function App() {
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
      <Navbar />
      <UserProvider>
        <Container className="mt-4">
          <h1 className="mb-4">EazyMarket</h1>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ProductsProvider>
            <ProductList products={products} searchQuery={searchQuery} />
          </ProductsProvider>
        </Container>
      </UserProvider>
      <Footer1 />
    </>
  );
}

export default App;

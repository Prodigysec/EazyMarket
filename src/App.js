import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'; // Remove the import for Navbar
import axios from 'axios';
import { ProductsProvider } from './Context/ProductsContext';
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
      {/* We wrap some parts of our web page inside the 'ProductsProvider' and 'UserProvider' boxes. */}
      {/* These boxes will provide special data to our components inside them. */}
      <ProductsProvider>
        <UserProvider>
          {/* The 'Container' is like a special box that holds everything inside it. */}
          <Container className="mt-4">
            {/* We show a big title "EazyMarket" inside the container. */}
            {/* <h1 className="mb-4">EazyMarket</h1> */}
            <SearchBar setSearchQuery={setSearchQuery} />

            {/* We show the 'ProductList' component inside the container. */}
            {/* The 'ProductList' will show a list of products and handle search and filtering. */}
            {/* We pass some messages (props) to it, like the list of products and the user's search query. */}
            <ProductList products={products} searchQuery={searchQuery} />
          </Container>
        </UserProvider>
      </ProductsProvider>

      {/* Finally, we show the 'Footer1' component at the bottom of our web page. */}
      {/* It's like a special message or information at the end. */}
      <Footer1 />
    </>
  );
};

export default App;

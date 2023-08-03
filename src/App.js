import React, { useState, useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import axios from 'axios';
import { ProductsProvider } from './Context/ProductsContext'; // Import ProductsProvider from the correct location
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
          {/* The 'Navbar' is like a special bar at the top of the web page. */}
          <Navbar bg="light" expand="lg">
            {/* The 'Navbar.Brand' is like a big title at the top of the bar. */}
            <Navbar.Brand href="#home">EazyMarket</Navbar.Brand>
            {/* The 'Navbar.Toggle' is like a little menu that opens for smaller screens. */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* The 'Navbar.Collapse' is where we put the things we want to show inside the bar. */}
            <Navbar.Collapse id="basic-navbar-nav">
              {/* Inside the 'Navbar.Collapse', we show the 'SearchBar' component. */}
              {/* The 'SearchBar' will help us search for specific products. */}
              {/* We pass a special spell (function) called 'setSearchQuery' to the 'SearchBar'. */}
              {/* This spell will remember what the user is searching for and update our 'searchQuery' box. */}
              <SearchBar setSearchQuery={setSearchQuery} />
            </Navbar.Collapse>
          </Navbar>

          {/* The 'Container' is like a special box that holds everything inside it. */}
          <Container className="mt-4">
            {/* We show a big title "EazyMarket" inside the container. */}
            <h1 className="mb-4">EazyMarket</h1>

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

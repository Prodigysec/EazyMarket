// First, we need some special tools to build our web page.
// The 'React' and 'useState' tools are like magic for making things on the screen change when we interact with them.
import React, { useState, useEffect } from 'react';

// Next, we get some special design elements to create our web page layout.
// We import 'Container' and 'Navbar' from the 'react-bootstrap' library.
import { Container } from 'react-bootstrap';

// We also need a magical tool called 'axios' to fetch data from an external API.
import axios from 'axios';

// Now, we want to use something called 'ProductsProvider' and 'UserProvider'.
// These are like special boxes that will hold some important data for us.
import { ProductsProvider } from './Context/ProductsContext';
import { UserProvider } from './Context/UserContext';

// Next, we need some custom components that we made in other files.
import ProductList from './Components/ProductList';
import SearchBar from './Components/SearchBar';
import Footer1 from './Components/Footer1';
import Navbar from './Components/Navbar';
import Hero1 from './Components/Hero1';

// Now, we want to make something called 'App'.
// It's like the main box that will hold everything on our web page.
function App() {
  // Inside our 'App', we need some special boxes (states) to hold the products and the user's search query.
  // We use the 'useState' tool for this.
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // We also want to do something magical when the 'App' is shown on the screen for the first time.
  // We use the 'useEffect' tool to fetch data from an external API and update our 'products' box.
  useEffect(() => {
    // We create a special function called 'fetchProducts' that will do the fetching for us.
    const fetchProducts = async () => {
      try {
        // We use 'axios' to fetch data from a specific URL (API endpoint).
        const response = await axios.get('https://fakestoreapi.com/products');
        // The data we get from the API will be put into our 'products' box using the 'setProducts' tool.
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    // We call our 'fetchProducts' function to start the fetching process.
    fetchProducts();
  }, []);

  // Finally, we return the things we want to show on the screen.
  return (
    <>
    <Navbar />
    <Hero1 />
    <UserProvider>
      {/* We say the name of our app: EazyMarket! */}
      <div className="container mt-4">
        {/* <h1 className="mb-4">EazyMarket</h1> */}
        {/* We call the SearchBar component and give it the special 'setSearchQuery' function as a present. */}
        <SearchBar setSearchQuery={setSearchQuery} />
        {/* We call the ProductList component and give it the list of things (products) and the user's search query as presents. */}
        <ProductList products={products} searchQuery={searchQuery} />
      </div>
    </UserProvider>
    <Footer1 />
    </>
  );
}

// After all this magic, we want to share our special 'App' box with others, so they can use it too!
export default App;

// Import necessary libraries and components from 'react' and 'react-bootstrap'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import other custom components used in this file
import Cart from './Cart';
import CategoryFilter from './CategoryFilter';
import ProductListDisplay from './ProductListDisplay';

// Now, we want to make something called 'ProductList'.
// It's like a special box that will hold everything related to showing products on our web page.
// It takes a special message (prop) from the parent to know what products to show and what the user is searching for.
function ProductList({ products, searchQuery }) {

  // Inside our 'ProductList', we need to remember the selected category.
  // So, we use a special tool called 'useState', which gives us a special box (state) to store the selected category.
  const [selectedCategory, setSelectedCategory] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Define a function 'handleSelectCategory' to handle the selection of a category from the filter
  // When the user selects a category, this function updates the 'selectedCategory' state
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Define functions 'addToWishlist' and 'removeFromWishlist' to add/remove products to/from the wishlist
  // These functions use the 'setWishlist' function to update the 'wishlist' state
  const addToWishlist = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    setWishlist((prevWishlist) => [...prevWishlist, productToAdd]);
  };
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== productId));
  };

  // Define functions 'addToFavorites' and 'removeFromFavorites' to add/remove products to/from favorites
  // These functions use the 'setFavorites' function to update the 'favorites' state
  const addToFavorites = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    setFavorites((prevFavorites) => [...prevFavorites, productToAdd]);
  };
  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((product) => product.id !== productId));
  };

  // Create an array 'categories' containing unique category names from the 'products' list
  const categories = [...new Set(products.map((product) => product.category))];

  // Return the JSX (React elements) to be rendered on the screen
  return (
    <Container>
      <Row>
        {/* First Column (md=8) */}
        <Col md={8}>
          {/* Render the 'CategoryFilter' component */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
         {/* We also show the 'ProductListDisplay' component inside this 'Col'. */}
          {/* The 'ProductListDisplay' will show the list of products and handle search and filtering. */}
          {/* We pass some messages (props) to it, like the list of products, the selected category, and the user's search query. */}
          <ProductListDisplay products={products} selectedCategory={selectedCategory} searchQuery={searchQuery} />
        </Col>

        {/* Second Column (md=4) */}
        <Col md={4}>
          {/* Inside this 'Col', we show the 'Cart' component. */}
          {/* The 'Cart' will help us manage the items we want to buy. */}
          <Cart />
        </Col>
      </Row>
    </Container>
  );
}

// Export the 'ProductList' component so that other parts of the app can use it
export default ProductList;

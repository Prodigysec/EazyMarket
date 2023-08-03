// Import necessary libraries and components from 'react' and 'react-bootstrap'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import other custom components used in this file
import Cart from './Cart';
import CategoryFilter from './CategoryFilter';
import ProductListDisplay from './ProductListDisplay';
import Wishlist from './Wishlist';
import Favorites from './Favorites';

// Define the main component 'ProductList' and pass it two props: 'products' and 'searchQuery'
function ProductList({ products, searchQuery }) {
  // Define some state variables using the 'useState' hook
  // 'selectedCategory' holds the currently selected category for filtering products
  // 'wishlist' holds the list of products added to the wishlist
  // 'favorites' holds the list of products marked as favorites
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
          {/* Render the 'ProductListDisplay' component */}
          <ProductListDisplay
            products={products}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onAddToWishlist={addToWishlist}
            onAddToFavorites={addToFavorites}
          />
        </Col>

        {/* Second Column (md=4) */}
        <Col md={4}>
          {/* Render the 'Cart' component */}
          <Cart />
          {/* Render the 'Wishlist' component */}
          <Wishlist wishlist={wishlist} onRemoveFromWishlist={removeFromWishlist} />
          {/* Render the 'Favorites' component */}
          <Favorites favorites={favorites} onRemoveFromFavorites={removeFromFavorites} />
        </Col>
      </Row>
    </Container>
  );
}

// Export the 'ProductList' component so that other parts of the app can use it
export default ProductList;

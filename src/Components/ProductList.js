import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Cart from './Cart';
import CategoryFilter from './CategoryFilter';
import ProductListDisplay from './ProductListDisplay';
import Wishlist from './Wishlist';
import Favorites from './Favorites';

// Define the main component 'ProductList' and pass it two props: 'products' and 'searchQuery'
function ProductList({ products, searchQuery }) {
  // Define some state variables using the 'useState' hook
  const [selectedCategory, setSelectedCategory] = useState('');
  const [wishlist, setWishlist] = useState([]); // Assuming you need these state variables.
  const [favorites, setFavorites] = useState([]); // You may need to initialize them accordingly.

  // Create an array of unique categories by extracting them from the products array
  const categories = [...new Set(products.map((product) => product.category))];

  // Define a function called handleSelectCategory that takes a category as an argument
  const handleSelectCategory = (category) => {
    // When the handleSelectCategory function is called, update the selectedCategory state with the selected category
    setSelectedCategory(category);
  };

  // Implement functions to handle adding/removing products from the wishlist and favorites lists
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== productId));
  };

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((product) => product.id !== productId));
  };

  // Return the JSX (React elements) to be rendered on the screen
  return (
    <Container>
      <Row>
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
        {/* Render the Cart component in a separate column */}
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

// Export the ProductList component so that other parts of the app can use it
export default ProductList;

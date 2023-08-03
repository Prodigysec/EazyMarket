// Import necessary libraries and components from 'react', 'react-bootstrap', and 'react-bootstrap-icons'
import React, { useState, useContext } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { CartFill, Heart, Star } from 'react-bootstrap-icons'; // Import Bootstrap Icons

// Import other custom components used in this file
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import { UserContext } from '../Context/UserContext';

// Define the 'ProductListDisplay' component and pass it props: 'products', 'selectedCategory', 'searchQuery', 'onAddToWishlist', and 'onAddToFavorites'
const ProductListDisplay = ({ products, selectedCategory, searchQuery, onAddToWishlist, onAddToFavorites }) => {
  // Define state variable 'selectedProduct' and 'setSelectedProduct' using the 'useState' hook
  // 'selectedProduct' holds the currently selected product when clicked, and 'setSelectedProduct' is used to update the state
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Use the 'useContext' hook to access the 'addToCart' function and 'cart' state from the 'UserContext'
  const { addToCart, cart } = useContext(UserContext);

  // Define a function 'handleProductClick' to handle the click event when a product is selected
  // When a product is clicked, this function updates the 'selectedProduct' state with the product ID
  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
  };

  // Filter the products based on the selected category and search query
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  const searchResults = searchQuery
    ? filteredProducts.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : filteredProducts;

  // Return the JSX (React elements) to be rendered on the screen
  return (
    <div>
      {/* Conditionally render the 'ProductDetails' component if 'selectedProduct' is not null */}
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onBackToList={() => setSelectedProduct(null)} />
      )}

      {/* Render the product cards using the 'Row', 'Col', and 'Card' components from 'react-bootstrap' */}
      <Row xs={1} md={2} lg={4} className="g-4">
        {searchResults.map((product) => (
          <Col key={product.id} className="mb-4">
            <Card className="product-card">
              {/* Display the product thumbnail image */}
              <Card.Img variant="top" src={product.image} onClick={() => handleProductClick(product.id)} />
              <Card.Body>
                {/* Display the product title */}
                <Card.Title className="card-title">{product.title}</Card.Title>
                {/* Display the product price */}
                <Card.Text className="card-text">
                  <strong>Price: Ksh {product.price}</strong>
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Render the 'Add to Cart' button */}
                  <div>
                    <Button variant="primary" onClick={() => addToCart(product)}>
                      {/* Replace the text with the cart icon using the 'CartFill' icon */}
                      <CartFill size={20} className="cart-icon" />
                    </Button>
                  </div>
                  {/* Render the 'Add to Wishlist' and 'Add to Favorites' buttons */}
                  <div className="d-flex">
                    <Button variant="outline-primary" onClick={() => onAddToWishlist(product.id)} className="logo-button">
                      {/* Display the "wishlist" logo using the 'Star' icon */}
                      <Star size={20} className="logo" />
                    </Button>
                    <Button variant="outline-danger" onClick={() => onAddToFavorites(product.id)} className="logo-button">
                      {/* Display the "love" logo using the 'Heart' icon */}
                      <Heart size={20} className="logo" />
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

// Export the 'ProductListDisplay' component so that other parts of the app can use it
export default ProductListDisplay;

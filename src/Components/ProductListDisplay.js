// First, we need some special tools to build our web page.
// The 'React' tool is like magic for making things on the screen change when we interact with them.
import React, { useState } from 'react';

// Then, we get some special design elements to create our web page layout.
// We import 'Row' and 'Col' from the 'react-bootstrap' library.
import { Row, Col } from 'react-bootstrap';

// Next, we need two custom components that we made in other files.
// These components help us show product cards and product details.
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';

// Now, we want to make something called 'ProductListDisplay'.
// It's like a special box that shows a list of products on our web page.
// It takes some special messages (props) from the parent to know what products to show, which category is selected, and what the user is searching for.
function ProductListDisplay({ products, selectedCategory, searchQuery }) {

  // Inside our 'ProductListDisplay', we need to remember the ID of the product the user clicks on.
  // So, we use a special tool called 'useState', which gives us a special box (state) to store the selected product ID.
  const [selectedProductId, setSelectedProductId] = useState(null);

  // We also need a magic spell (function) called 'handleProductClick'.
  // When the user clicks on a product, this spell will take the product's ID and put it into our special box using the 'setSelectedProductId' tool.
  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  // Now, we want to find all the unique categories from our list of products and put them in an array.
  // We use the magic tool called 'Set' to help us with this.
  const categories = [...new Set(products.map((product) => product.category))];

  // Next, we want to filter our products based on the selected category.
  // If a category is selected, we keep only the products that belong to that category; otherwise, we keep all the products.
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Now, we want to search for products if the user typed something in the search box.
  // We look for products whose title includes the search query, and we do this in a case-insensitive way to make it easy for the user.
  const searchResults = searchQuery
    ? filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredProducts;

  // After all this magic, we want to find the product that matches the selected product ID.
  // This will be the product that the user clicked on, and we'll show its details on the screen.
  const selectedProduct = filteredProducts.find((product) => product.id === selectedProductId);

  // Finally, we return the things we want to show on the screen.
  return (
    <div>
      {/* If we found a selected product (meaning the user clicked on a product), */}
      {/* we show the 'ProductDetails' component to display the product's details and a button to go back to the product list. */}
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onBackToList={() => setSelectedProductId(null)} />
      )}

      {/* We want to show the product cards in a row, and we use 'Row' and 'Col' for that. */}
      {/* Each 'Col' will contain a 'ProductCard' component to show a product's information. */}
      {/* We loop through the 'searchResults' array to show all the products that match the search or selected category. */}
      <Row xs={1} md={2} lg={4}>
        {searchResults.map((product) => (
          <Col key={product.id} className="mb-4">
            {/* We pass each product to the 'ProductCard' component to show its details. */}
            {/* We also add a magic spell (event handler) so that when the user clicks on a product, we remember its ID. */}
            <ProductCard product={product} onClick={() => handleProductClick(product.id)} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

// After all this magic, we want to share our special 'ProductListDisplay' box with others, so they can use it too!
export default ProductListDisplay;

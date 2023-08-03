// First, we need some special tools to build our web page.
// The 'React' tool is like magic for making things on the screen change when we interact with them.
import React, { useState } from 'react';

// Then, we get some special design elements to create our web page layout.
// We import 'Container', 'Row', and 'Col' from the 'react-bootstrap' library.
import { Container, Row, Col } from 'react-bootstrap';

// Next, we need three custom components that we made in other files.
// These components will help us show a list of products, a category filter, and a cart for shopping.
import ProductCard from './ProductCard';
import Cart from './Cart';
import CategoryFilter from './CategoryFilter';
import ProductListDisplay from './ProductListDisplay';
import SearchBar from './SearchBar';

// Now, we want to make something called 'ProductList'.
// It's like a special box that will hold everything related to showing products on our web page.
// It takes a special message (prop) from the parent to know what products to show and what the user is searching for.
const ProductList = ({ products, searchQuery }) => {

  // Define a state variable called selectedCategory and a function to update it called setSelectedCategory
  const [selectedCategory, setSelectedCategory] = useState('');

  // We also need a magic spell (function) called 'handleSelectCategory'.
  // When the user selects a category from the filter, this spell will remember the selected category in our special box.
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Now, we want to find all the unique categories from our list of products and put them in an array.
  // We use the magic tool called 'Set' to help us with this.
  const categories = [...new Set(products.map((product) => product.category))];

  // Finally, we return the things we want to show on the screen.
  return (
    // The 'Container' is like a special box that holds everything inside it.
    <Container>
      {/* Inside the 'Container', we have a 'Row' that holds two 'Col' components. */}
      <Row>
        {/* The first 'Col' is for the main part of our web page (the product list). */}
        <Col md={8}>
          {/* We show the 'CategoryFilter' component inside this 'Col'. */}
          {/* The 'CategoryFilter' helps us filter products by category. */}
          {/* We pass some messages (props) to it, like the list of categories, the selected category, and a spell to remember the selected category. */}
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

        {/* The second 'Col' is for the shopping cart. */}
        <Col md={4}>

          <SearchBar />
        </Col>
      </Row>
    </Container>
  );
}

// After all this magic, we want to share our special 'ProductList' box with others, so they can use it too!
export default ProductList;

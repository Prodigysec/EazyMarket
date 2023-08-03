// First, we need a special tool to build our web page.
// The 'React' tool is like magic for making things on the screen change when we interact with them.
import React from 'react';

// Next, we get some special design elements to create our web page layout.
// We import 'Container', 'Row', 'Col', and 'Button' from the 'react-bootstrap' library.
import { Container, Row, Col, Button } from 'react-bootstrap';

// Now, we want to make something called 'ProductDetails'.
// It's like a special box that will show all the details of a product on our web page.
// It takes some special messages (props) from the parent, like the product information and a spell to go back to the product list.
function ProductDetails({ product, onBackToList }) {

  // Inside our 'ProductDetails', we have a special function called 'formatPrice'.
  // This function helps us change the product's price to look like Kenyan currency (KES) with the correct formatting.
  const formatPrice = (price) => {
    // We use the 'toLocaleString' method to do the magic formatting.
    // It will make the price look like KES 1,234,567.89
    return price.toLocaleString('en-KE', { style: 'currency', currency: 'KES' });
  };

  // Finally, we return the things we want to show on the screen.
  return (
    // The 'Container' is like a special box that holds everything inside it.
    <Container>
      {/* Inside the 'Container', we have a 'Row' that holds two 'Col' components. */}
      <Row>
        {/* The first 'Col' is for the product's image, which will be shown on the left side of the container. */}
        <Col md={6}>
          {/* We show the product's image here using the 'img' element. */}
          {/* The 'src' is the link to the image, and the 'alt' is a description of the image. */}
          {/* The 'className="img-fluid"' is like magic to make the image fit nicely in the box. */}
          <img src={product.image} alt={product.title} className="img-fluid" />
        </Col>

        {/* The second 'Col' is for the product's details, which will be shown on the right side of the container. */}
        <Col md={6}>
          {/* We show the product's title, category, description, and formatted price here. */}
          {/* The 'h2' is a big title, and the 'p' elements are like paragraphs for the rest of the details. */}
          <h2>{product.title}</h2>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Price: {formatPrice(product.price)}</p>

          {/* Finally, we show a button with a label "Back to Product List". */}
          {/* When the user clicks on this button, we do something magical using the 'onClick' event. */}
          {/* We call the special spell (function) 'onBackToList' to go back to the product list. */}
          <Button variant="primary" onClick={onBackToList}>
            Back to Product List
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

// After all this magic, we want to share our special 'ProductDetails' box with others, so they can use it too!
export default ProductDetails;


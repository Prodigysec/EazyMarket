import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartFill } from 'react-bootstrap-icons';

import { UserContext } from '../Context/UserContext';

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useContext(UserContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const formatPrice = (price) => {
    // Format the price as you need
  };

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.image} onClick={onClick} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{formatPrice(product.price)}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          <CartFill size={20} />
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

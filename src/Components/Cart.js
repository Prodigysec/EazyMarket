import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { Button, Badge, Modal, Image } from 'react-bootstrap';
import { RiShoppingCartFill, RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai'; // Import the trash icon

const Cart = () => {
  // Get the cart items, clearCart, removeFromCart, and updateQuantity functions from the UserContext
  const { cartItems, clearCart, removeFromCart, updateQuantity } = useContext(UserContext);

  // State to manage the cart modal visibility and the selected product details modal
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handler for opening the cart modal
  const handleCartClick = () => {
    setShowCartModal(true);
  };

  // Handler for closing the cart modal
  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  // Handler for showing the details of a selected product
  const handleProductDetails = (product) => {
    setSelectedProduct(product);
  };

  // Handler for increasing the quantity of an item in the cart
  const handleIncreaseQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  // Handler for decreasing the quantity of an item in the cart
  const handleDecreaseQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  // Helper function to format the price into the currency format
  const formatPrice = (price) => {
    return price.toLocaleString('en-KE', { style: 'currency', currency: 'KES' });
  };

  return (
    <>
      {/* Shopping cart button */}
      <Button variant="outline-primary" onClick={handleCartClick}>
        <RiShoppingCartFill size={20} /> {/* Shopping cart icon */}
        <Badge bg="secondary">{cartItems.length}</Badge> {/* Display the number of items in the cart */}
      </Button>

      {/* Cart Modal */}
      <Modal show={showCartModal} onHide={handleCloseCartModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <h2 className="text-center mb-4">Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty.</p>
            ) : (
              <div>
                {/* List of items in the cart */}
                <ul className="list-group">
                  {cartItems.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div onClick={() => handleProductDetails(item)} style={{ cursor: 'pointer' }}>
                        <Image src={item.image} alt={item.title} width="50" height="50" rounded />
                        <span className="ms-3">{item.title}</span>
                      </div>
                      <div className="d-flex align-items-center pr-3">
                        {/* Button to decrease the quantity */}
                        <Button variant="outline-primary" size="sm" onClick={() => handleDecreaseQuantity(item.id)}>
                          <RiArrowDownSFill />
                        </Button>
                        <span className="mx-2">{item.quantity}</span> {/* Display the quantity */}
                        {/* Button to increase the quantity */}
                        <Button variant="outline-primary" size="sm" onClick={() => handleIncreaseQuantity(item.id)}>
                          <RiArrowUpSFill />
                        </Button>
                        {/* Button to remove the item from the cart */}
                        <Button variant="btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                          <AiFillDelete /> {/* Use the trash icon */}
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* Display the total price of all items in the cart */}
                <p className="text-center mt-4">Total Price: {formatPrice(cartItems.reduce((total, item) => total + item.price * item.quantity, 0))}</p>
                {/* Button to clear the cart */}
                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={clearCart} size="lg" className="mt-3">
                    Clear Cart
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCartModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal to show product details */}
      {selectedProduct && (
        <Modal show={true} onHide={() => setSelectedProduct(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <Image src={selectedProduct.image} alt={selectedProduct.title} width="200" height="200" />
            </div>
            <p className="text-center mt-3">{selectedProduct.description}</p>
            <p className="text-center mt-3">{formatPrice(selectedProduct.price)}</p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Cart;

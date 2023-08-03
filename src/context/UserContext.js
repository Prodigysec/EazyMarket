import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    // Check if the product with the same id is already in the cart
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    if (!isProductInCart) {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
      setTotalPrice((prevPrice) => prevPrice + product.price);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    const updatedTotalPrice = updatedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(updatedTotalPrice);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
    const updatedTotalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(updatedTotalPrice);
  };

  return (
    <UserContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity, totalPrice }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

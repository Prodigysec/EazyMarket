// Import the necessary libraries and hooks from 'react'
import React, { createContext, useEffect, useState } from "react";

// Create a new context using createContext
export const ProductsContext = createContext();

// Define the 'ProductsProvider' component and pass it a prop 'children'
export const ProductsProvider = ({ children }) => {
  // Create a state variable 'products' and initialize it as an empty array
  const [products, setProducts] = useState([]);

  // Use the useEffect hook to fetch data from the API when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Failed to fetch products:', error));
  }, []);

  // Define a search function called 'searchProduct'
  const searchProduct = (productName) => {
    // Filter the 'products' array based on the product name (case-insensitive)
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(productName.toLowerCase())
    );
    // Return the filtered products
    return filteredProducts;
  };

  // Return the JSX (React elements) to be rendered on the screen
  return (
    // Provide the 'products' array and the 'searchProduct' function to its children components
    <ProductsContext.Provider value={{ products, searchProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

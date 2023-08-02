import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import ProductsProvider from './Context/ProductsContext';


function App() {

  return (
    <ProductsProvider>
      <SearchBar />
    </ProductsProvider>
  )

}

export default App;

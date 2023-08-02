import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import ProductsContext from './Context/ProductsContext';

function App() {

  return (
    <ProductsContext.Provider>
      <SearchBar />
    </ProductsContext.Provider>
  )

}

export default App;

import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ProductList from './ProductList';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ProductList />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import Login from './Login';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar onSearch={handleSearch} />
        <Switch>
          <Route exact path="/" render={() => <ProductList searchTerm={searchTerm} />} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </CartProvider>
  );
};

export default App;

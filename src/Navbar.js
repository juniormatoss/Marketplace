import React, { useContext } from 'react';
import logo from './logo.png';
import cartIcon from './cart-icon.png';
import './Navbar.css';
import { CartContext } from './CartContext';

const Navbar = ({ onSearch }) => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <div className="navbar-search">
          <input type="text" placeholder="Search products" onChange={onSearch} />
        </div>
        <div className="navbar-cart">
          <button type="button">
            <img src={cartIcon} alt="Cart" className="cart-icon" />
            <span className="cart-count">{cartItemCount}</span>
          </button>
        </div>
        <div className="navbar-login">
          <button type="button">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

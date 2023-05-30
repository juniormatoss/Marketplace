import React from 'react';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <h1 className="navbar-title">Marketplace</h1>
      <div className="navbar-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/products" className="nav-link">Products</a>
          </li>
          <li className="nav-item">
            <a href="/cart" className="nav-link">Cart</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link">Login</a>
          </li>
        </ul>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Navbar;

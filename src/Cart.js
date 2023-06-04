// Cart.js

import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';

const Cart = ({ onClose }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  return (
    <div className="cart-overlay">
      <div className="cart">
        <h2 className="cart-title">Cart</h2>
        {cartItems.length > 0 ? (
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-price">{item.price}</p>
                  <p className="cart-item-description">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart-empty">Your cart is empty.</p>
        )}
        <button className="cart-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
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
                <button className="remove-button" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="cart-empty">Your cart is empty.</p>
      )}
      <Link to="/" className="continue-shopping-link">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Cart;

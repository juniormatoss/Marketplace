import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from './CartContext'
import { Link, useHistory } from 'react-router-dom'

const Cart = ({ onClose }) => {
  const { cartItems, addToCart, removeFromCart, calculateTotal } =
    useContext(CartContext)
  const history = useHistory()

  const handleIncrement = item => {
    addToCart(item)
  }

  const handleDecrement = item => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 }
      removeFromCart(updatedItem)
    }
  }

  const handleRemove = item => {
    removeFromCart(item, false)
  }

  const handleCheckout = () => {
    history.push('/checkout')
  }

  const renderCartItems = () => {
    return cartItems.map(item => (
      <div key={item.id} className="cart-item">
        <div className="cart-item-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="cart-item-details">
          <h3 className="cart-item-title">{item.title}</h3>
          <p className="cart-item-price">{item.price}</p>
          <div className="quantity-controls">
            <button
              className="decrement-button"
              onClick={() => handleRemove(item)}
            >
              -
            </button>
            <span className="quantity">{item.quantity}</span>
            <button
              className="increment-button"
              onClick={() => handleIncrement(item)}
            >
              +
            </button>
          </div>
          <button className="remove-button" onClick={() => handleRemove(item)}>
            Remove
          </button>
        </div>
      </div>
    ))
  }

  return (
    <div className="cart-overlay">
      <div className="cart">
        <Link to="/" className="back-button">
          Voltar
        </Link>
        <h2 className="cart-title">Carrinho</h2>
        {cartItems.length > 0 ? (
          <>
            <div className="cart-items">{renderCartItems()}</div>
            <div className="cart-summary">
              <h3 className="cart-summary-title">Order Summary</h3>
              <div className="cart-summary-subtotal">
                <span>Subtotal:</span>
                <span>{calculateTotal()}</span>
              </div>
              <div className="cart-summary-total">
                <span>Total:</span>
                <span>{calculateTotal()}</span>
              </div>
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="cart-empty">Your cart is empty.</p>
        )}
      </div>
    </div>
  )
}

export default Cart

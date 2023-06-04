import React, { useContext } from 'react';
import './ProductCard.css';
import { CartContext } from './CartContext';

const ProductCard = ({ title, price, description, image }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}</p>
        <p className="product-description">{description}</p>
        <button onClick={() => addToCart({ title, price, description, image })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

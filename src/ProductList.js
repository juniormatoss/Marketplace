import React, { useState, useEffect } from 'react'
import './ProductList.css'
import ProductCard from './ProductCard'

const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(products)
    }
  }, [searchTerm, products])

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  )
}

export default ProductList

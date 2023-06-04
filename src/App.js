import React, { useState } from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'
import { CartProvider } from './CartContext';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <CartProvider>
      <Navbar onSearch={handleSearch} />
      <ProductList searchTerm={searchTerm} />
      </CartProvider>
    
  )
}

export default App

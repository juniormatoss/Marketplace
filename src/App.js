import React, { useState } from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <ProductList searchTerm={searchTerm} />
    </div>
  )
}

export default App

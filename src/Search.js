import React, { useState } from 'react'

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = event => {
    setSearchTerm(event.target.value)
    onSearch(event.target.value)
  }

  return (
    <div className="navbar-search">
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search

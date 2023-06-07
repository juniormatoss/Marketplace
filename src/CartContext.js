import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = item => {
    setCartItems([...cartItems, item])
  }

  const removeFromCart = (item, removeAll) => {
    if (removeAll) {
      const updatedCartItems = cartItems.filter(
        cartItem => cartItem.id !== item.id
      )
      setCartItems(updatedCartItems)
    } else {
      const updatedCartItems = cartItems.filter(cartItem => cartItem !== item)
      setCartItems(updatedCartItems)
    }
  }

  const calculateTotal = () => {
    // Lógica para calcular o total com base nos itens do carrinho
    const total = cartItems.reduce((acc, item) => acc + item.price, 0)
    return total.toFixed(2) // Arredonda o total para 2 casas decimais
  }

  const cartItemCount = cartItems.length

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        calculateTotal,
        cartItemCount
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

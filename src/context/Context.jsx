/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    console.log("CartContext", cart);
  }, []);
  return (
    <CartContext.Provider value={{ cart, setCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

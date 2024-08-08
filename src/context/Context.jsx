/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [cartItem, setCartItems] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const priceOfCart = cart.reduce(
      (sum, acc) => sum + acc.price * acc.quantity,
      0
    );
    setPrice(priceOfCart);
  }, [cart]);

  useEffect(() => {
    const totalItems = cart.reduce((sum, acc) => sum + acc.quantity, 0);
    setCartItems(totalItems);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        isCartOpen,
        setIsCartOpen,
        price,
        finalPrice,
        setFinalPrice,
        cartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

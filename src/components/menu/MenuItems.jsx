import "./MenuItems.css";

import data from "../../lib/Data.json";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import Cart from "../cart/Cart";
const MenuItems = () => {
  const { setCart, isCartOpen } = useContext(CartContext);
  function addToCart(item) {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItemIndex >= 0) {
        return prevCart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }

  function removeFromCart(item) {
    setCart((prevCart) => {
      return prevCart
        .map((cartItem) => {
          if (cartItem.name === item.name) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);
    });
  }

  return (
    <div className="menu--items">
      {data?.map((item) => {
        return (
          <div key={item.name} className="menu--card">
            <div className="menu--image--container">
              <img className="menu--image" src={item.image} alt={item.name} />
            </div>
            <div className="menu--description">
              <h3 className="menu--title">{item.name}</h3>
              <h4 className="menu--price">₹{item.price}</h4>
              <div className="btn--container">
                <button
                  className="btn btn--blue"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <button
                  className="btn btn--red"
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <>{isCartOpen && <Cart />}</>
    </div>
  );
};

export default MenuItems;



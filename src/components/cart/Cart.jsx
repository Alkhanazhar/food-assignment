import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/Context";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart, setCart, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

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
  function handleCheckOut() {
    setCart([]);
    navigate("/checkout");
  }

  function handleCartOpen() {
    setCart([]);
    setIsCartOpen(!isCartOpen);
  }
  useEffect(() => {
    const price = cart.reduce((sum, acc) => sum + acc.price * acc.quantity, 0);
    setTotalPrice(price);
  }, [cart]);
  return (
    <div className="cart--container">
      <div className="cart--container--items">
        {cart.length == 0 && <h2>Cart is Empty</h2>}
        {cart.length > 0 && (
          <div>
            <h2>Order Summary</h2>
            {cart.map((cartItem) => {
              return (
                <div key={cartItem.name} className="cart--item">
                  <div className="cart--item--title">{cartItem.name}</div>
                  <div className="cart--item--price">{cartItem.quantity}</div>
                  <div className="cart--btn--container">
                    <button
                      className="btn btn--blue"
                      onClick={() => addToCart(cartItem)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn--red"
                      onClick={() => removeFromCart(cartItem)}
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {cart.length > 0 && (
          <div className="cart--price--container">
            <h2>Total Price</h2>₹{totalPrice.toFixed(2)}
          </div>
        )}
        <div className="btn--container">
          <div onClick={handleCheckOut} className="btn btn--blue">
            Save and Checkout
          </div>
          <button className="btn btn--red" onClick={handleCartOpen}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

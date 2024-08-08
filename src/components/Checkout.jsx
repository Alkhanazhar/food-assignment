import { useContext, useEffect } from "react";
import { CartContext } from "../context/Context";

const Checkout = () => {
  const { finalPrice, setFinalPrice, setIsCartOpen } = useContext(CartContext);
  useEffect(() => {
    return () => {
      setFinalPrice(0);
      setIsCartOpen(false);
    };
  }, []);
  return (
    <div className="checkout">
      <div className="checkout--container--message">
        {finalPrice != 0 && (
          <>
            <h2>Checkout</h2>
            <p>Thank You for order.</p>
            <p>Your order of Rs.{finalPrice} is succefully recieved</p>
          </>
        )}
        {finalPrice === 0 && <h3>There is No orders in your cart</h3>}
      </div>
    </div>
  );
};

export default Checkout;

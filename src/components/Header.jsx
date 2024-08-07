import { Link } from "react-router-dom";
import "./Header.css";
import { ShoppingCart, Utensils } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/Context";
const Header = () => {
  const { cart, isCartOpen, setIsCartOpen } = useContext(CartContext);
  function handleCartOpen() {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <header className="header">
      <div>
        <Utensils />
        <div>
          <Link to={"/"} className="logo--title">
            {"Food's "}Restaurant
          </Link>
        </div>
      </div>
      <div className="cart--header--container">
        <div>
          <ShoppingCart className="cart--icon " onClick={handleCartOpen} />
        </div>
        {cart?.length}
      </div>
    </header>
  );
};

export default Header;

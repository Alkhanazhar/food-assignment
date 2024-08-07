import { useContext } from "react";
import Cart from "../components/cart/Cart";
import Hero from "../components/Hero";
import { CartContext } from "../context/Context";

const Home = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <main>
      <Hero />
      {isCartOpen && <Cart />}
    </main>
  );
};

export default Home;

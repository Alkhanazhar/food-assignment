import { useContext } from "react";
import Cart from "../components/cart/Cart";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { CartContext } from "../context/Context";

const Home = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <main>
      <Header />
      <Hero />
      {isCartOpen && <Cart />}
    </main>
  );
};

export default Home;

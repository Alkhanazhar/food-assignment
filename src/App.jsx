import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./components/Checkout";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Menu />} path="/menu" />
        <Route element={<Checkout />} path="/checkout" />
      </Routes>
    </>
  );
};

export default App;

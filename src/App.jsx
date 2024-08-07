import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Menu />} path="/menu" />
    </Routes>
  );
};

export default App;

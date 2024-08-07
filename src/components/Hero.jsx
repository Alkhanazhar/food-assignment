import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero">
      <h1>
        Welcome to The Foods <br /> Kitchen
      </h1>
      <Link to={"/menu"} className="hero--btn">Go to Menu</Link>
    </main>
  );
};

export default Hero;

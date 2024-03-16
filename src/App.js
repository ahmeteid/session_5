import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

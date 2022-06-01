import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Products from "./Components/Products";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="products/*" element={<Products />}>
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// / is not mandatory
// for nested info we need 3 changes
// 1. 

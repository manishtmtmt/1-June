import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    if (id === 1) {
      navigate("/products/1");
    } else if (id === 2) {
      navigate("/products/2");
    }
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <button onClick={() => handleOnClick(1)}>Go to Product 1</button>
      <button onClick={() => handleOnClick(2)}>Go to Product 2</button>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order Your Food Here .</h1>
        <p>
          Rounded corners used to be the stuff of constricting solid background
          images or, for flexible boxes, numerous background images, one
          per-corner, slapped on multiple nested div elements.
        </p>
        <button>View Products</button>
      </div>
    </div>
  );
};

export default Header;

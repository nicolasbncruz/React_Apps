import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = ({cartItems}) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            amazon prime
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Productos</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/comprobantes">Comprobantes</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/carrito" className="cart">
              <i className="fas fa-shopping-cart" />
              <span className="cart-length">
                {cartItems.length  === 0 ? '': cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Banner;

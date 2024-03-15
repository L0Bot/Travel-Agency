import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button.js";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  function isItClicked() {
    if (!click) {
      return "menu-icon fas fa-bars";
    } else {
      return "menu-icon fas fa-times";
    }
  }
  function ImIActivated() {
    if (!click) {
      return "nav-menu";
    } else {
      return "nav-menu active";
    }
  }
  function handleClick() {
    setClick(!click);
  }
  function closeMobileMenu() {
    setClick(false);
  }
  function showButton() {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }
  window.addEventListener('resize', showButton);
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <i class="fa-solid fa-location-dot"></i>TRVL
      </Link>
      <i className={isItClicked()} onClick={handleClick}></i>
      <ul className={ImIActivated()}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
            Sign up
          </Link>
        </li>
      </ul>
      {button && <Button buttonStyle='btn--outline'>Sign up</Button>}
    </nav>
  );
}
export default Navbar;

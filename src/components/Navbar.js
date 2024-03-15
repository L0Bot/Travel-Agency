import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from './Button.js'
import "./Navbar.css";
import '../App.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick() {
    setClick(!click);
  }
  function closeMobileMenu() {
    setClick(false);
  }
  function isItClicked() {
    if (!click) {
      return "fas fa-bars";
    } else {
      return "fas fa-times";
    }
  }
  function ImIActivated() {
    if (!click) {
      return "nav-menu";
    } else {
      return "nav-menu active";
    }
  }
  function showButton() {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }
  useEffect(() => {showButton()}, []);
  window.addEventListener('resize', showButton);
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <i className="fa-solid fa-location-dot"></i>TRVL
      </Link>
      <div className="menu-icon" onClick={handleClick}>
      <i className={isItClicked()}></i>
      </div>
      <ul className={ImIActivated()}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Acceuil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
            Produits
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
            Connection
          </Link>
        </li>
      </ul>
      {button && <Button buttonStyle='btn--outline'>Connection</Button>}
      </div>
    </nav>
  );
}
export default Navbar;

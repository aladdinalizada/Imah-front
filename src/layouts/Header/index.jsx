import React from "react";
// Import Logo and icon
import Logo from "/logo.png";
import arrowRight from "/public/assets/icons/arrow-up-right.svg";
// Import Styles
import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <div className="logo">
          <img src={Logo} alt="Imah Logo" />
        </div>
        <ul className="navbar">
          <li>home</li>
          <li>about us</li>
          <li>services</li>
          <li>blog</li>
        </ul>
        <button className="contactBtn">
          <a href="tel:+1234567890">Contact Us</a>
          <img src={arrowRight} alt="arrow right" />
        </button>
        <input
          type="checkbox"
          role="button"
          aria-label="Display the menu"
          class="menu"
          id="MobileMenu"
        ></input>
      </div>
    </header>
  );
};

export default Header;

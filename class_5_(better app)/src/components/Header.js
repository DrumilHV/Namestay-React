import React from "react";

import LOGO_URL from "../../public/images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div id="logo-container">
        <img className="logo" src={LOGO_URL} alt="FoodGenix" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

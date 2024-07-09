import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO_URL from "../../public/images/logo.svg";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("header rendered! ");
  return (
    <div className="header">
      <div id="logo-container">
        <img className="logo" src={LOGO_URL} alt="FoodGenix" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/about"}>About Us</Link>
          </li>

          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>

          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>

          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

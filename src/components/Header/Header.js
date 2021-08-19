import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <input placeholder="Search for a city" className="search-panel"></input>
      <a href="/" className="logo">
        <img
          src="https://developers.teleport.org/assets/logo.e663724a.svg"
          alt="teleportLogo"
        />
      </a>
    </header>
  );
};

export default Header;

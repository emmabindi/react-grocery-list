import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <p>Groceries List</p>
      </header>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </div>
  );
};

const linkStyle = {
  textDecoration: "none",
  marginRight: "10px 5px 10px 5px",
  textAlign: "center",
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-red">
      <h1>
        <Link to="/">
          <i className=" fas fa-home" />
          BookMe
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/register">
            <i className="fas fa-plus" />
            Register
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="fas fa-sign-in-alt" />
            Login
          </Link>
        </li>
        <li>
          <Link to="/help">
            <i className="fas fa-hotel" />
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import AuthContext from "../../context/AuthContext";

import logo from "../../images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const { authed } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="/">
            <img src={logo} alt="Beach Resort" />
          </NavLink>
          <button
            type="button"
            className="nav-btn"
            onClick={() => handleToggle()}
          >
            <AiOutlineMenu className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <NavLink to="/rooms">Rooms</NavLink>
          </li>

          {!authed && (
            <li>
              <NavLink to="/login">Log In</NavLink>
            </li>
          )}

          {!authed && <NavLink to="/sign-up">Sign Up</NavLink>}

          {authed && (
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          )}

          {authed && <NavLink to="/login">Log Out</NavLink>}

          {authed && (
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { amount: state.amount };
};

export default connect(mapStateToProps)(Navbar);

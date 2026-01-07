import React from "react";
import "../../styles/HeaderStyle.css";
import { useNavigate, NavLink } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="header-glass">
      <div className="header-wrapper">
        {/* Logo */}
        <div className="logo-box">
          <span className="logo-text">AI Emergency Platform</span>
        </div>

        {/* Navigation */}
        <nav className="nav-glass">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {token && (
            <button className="logout-glass" onClick={handleLogout}>
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;

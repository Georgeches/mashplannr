import React from "react";
import { Link } from "react-router-dom";
function Header({ handleLogout }) {
  return (
    <div>
      <header className="header header-custom header-fixed header-one">
        <div className="container-fluid">
              <nav className="navbar container-fluid justify-content-between align-items-center">
            <div className="navbar-header">
            
              <a href="/" className="navbar-brand logo">
                {/* Your logo image */}
              </a>
              <a className="navbar-brand fw-bold">mashPlannr.</a>
            </div>
            <div className="main-menu-wrapper d-flex align-items-center">
              <div className="menu-header">
                <a href="/" className="menu-logo">
                  {/* Your logo image */}
                </a>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="#"
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
                <li className="has-submenu megamenu">
                  <a href="/">
                    Home <i className="fas fa-chevron-down"></i>
                  </a>
                  
                  <ul className="submenu mega-submenu">
                    {/* ... Mega Submenu Content ... */}
                  </ul>
                </li>
                <li className="has-submenu megamenu">
                  <Link to="/merchants">
                    Merchants <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="submenu mega-submenu">
                    {/* ... Mega Submenu Content ... */}
                  </ul>
                </li>

                <li className="has-submenu">
                  <a href="/login">
                    Admin <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">{/* ... Submenu Content ... */}</ul>
                </li>

                <li className="login-link">
                  <a href="/login">Login / Signup</a>
                </li>
                <li className="register-btn">
                  <a
                    href="/login
                  "
                    className="btn reg-btn"
                  >
                    <i className="feather-user"></i>Register
                  </a>
                </li>
                <li className="register-btn">
                  {/** 
                  <a href="/logout" className="btn btn-primary log-btn">
                    <i onClick={handleLogout} className="feather-lock"></i>
                    Logout
                  </a>
                  */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

    </div>
  );
}

export default Header;

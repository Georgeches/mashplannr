import React from "react";
import { Link } from "react-router-dom";
function Header({ handleLogout }) {
  return (
    <div>
      <header className="header header-custom header-fixed header-one">
        <div className="container-fluid">
              <nav className="navbar container-fluid justify-content-between align-items-center">
            <div className="navbar-header">
            <button className="btn btn-link d-lg-none text-dark border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav" aria-controls="offcanvasTop"><i className="fa-solid fa-bars" style={{fontSize: "25px"}}></i></button>
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
                  <a href="/logout" className="btn btn-primary log-btn">
                    <i onClick={handleLogout} className="feather-lock"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/**offcanvas*/}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNav" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <h4 id="offcanvasTopLabel"></h4>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                <div className="main-menu-wrapper">
              <div className="menu-header">
                <a href="/" className="menu-logo">
                  {/* Your logo image */}
                </a>
              </div>
              <ul className="main-nav">
                <li className="has-submenu megamenu">
                  <a href="/">
                    Home
                  </a>
                  <ul className="submenu mega-submenu">
                    {/* ... Mega Submenu Content ... */}
                  </ul>
                </li>
                <li className="has-submenu megamenu">
                  <Link to="/merchants">
                    Merchants
                  </Link>
                  <ul className="submenu mega-submenu">
                    {/* ... Mega Submenu Content ... */}
                  </ul>
                </li>

                <li className="has-submenu">
                  <a href="/login">
                    Admin
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
                  <a href="/logout" className="btn btn-primary log-btn">
                    <i onClick={handleLogout} className="feather-lock"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
                </div>
            </div>
    </div>
  );
}

export default Header;

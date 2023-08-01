import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [submenuActive, setSubmenuActive] = useState(false);

  const handleSidebarToggle = () => {
    setSubmenuActive(!submenuActive);
    setSidebarOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (index) => {
    setSubmenuActive(!submenuActive);
  };

  const handleSubmenuTitleClick = () => {
    setSubmenuActive(false);
  };

  return (
    <>
    
      <div className="sidebar" style={{width: submenuActive?"260px":"50px"}}>
        <div className="d-flex align-items-center justify-content-between">
        {submenuActive&&
            <a href="#" className="logo">
                mashPlannr.
            </a>
        }
          <i
            style={{ fontSize: "17px", color: "white", cursor: "pointer", position: "fixed", top: "25px", left:  submenuActive?"220px":"15px"}}
            className="fa-solid fa-bars"
            id="sidebar-close"
            onClick={handleSidebarToggle}
          ></i>
        </div>

        <div className="menu-content">
          <ul className="menu-items">
            <li className="item" onClick={() => handleMenuItemClick(0)}>
              <a href="/">Dashboard</a>
            </li>

            <li className="item" onClick={() => handleMenuItemClick(2)}>
              <a href="/merchants">Merchants</a>
            </li>

            <li className="item" onClick={() => handleMenuItemClick(3)}>
              <a href="#">Orders</a>
            </li>

            <li className="item" onClick={() => handleMenuItemClick(4)}>
              <a href="#">Leave Management</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Dashdark X</h1>
        <div className="search-box">
          <input type="text" placeholder="Search for..." />
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3 className="nav-section-title">Dashboard</h3>
          <ul className="nav-links">
            <li>
              <Link to="/dashboard">All pages</Link>
            </li>
            <li>
              <Link to="/dashboard">All pages</Link>
            </li>
            <li>
              <Link to="/dashboard">All pages</Link>
            </li>
            <li>
              <Link to="/dashboard">All pages</Link>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-section-title">Features</h3>
          <ul className="nav-links">
            <li>
              <Link to="/dashboard">All pages</Link>
            </li>
            <li>
              <Link to="/dashboard">All pages</Link>
            </li>
            <li>
              <Link to="/dashboard">All pages</Link>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-section-title">Settings</h3>
          <ul className="nav-links">
            <li>
              <Link to="/dashboard">All pages</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar"></div>
          <div className="user-info">
            <span className="user-name">John Carter</span>
            <span className="user-settings">Account settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Neighborhood Share</h2>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-item">
            Add Item
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-requests">
            My Requests
          </NavLink>
        </li>
        <li>
  <NavLink to="/profile">
    Profile
  </NavLink>
</li>
<li>
  <NavLink to="/map">
    Map View
  </NavLink>
</li>
</ul>
    </nav>
  );
}

export default Navbar;

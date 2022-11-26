import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../Images/logo (1).png';

// this component returns our navbar ultimately //

function Header  ()  {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" width="120px" />
        </NavLink>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activenav" : "")}
            >
              ResumeTemplates
            </NavLink>
          </li>
          <li>
            <NavLink >
             
       
            
              My Resumes </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "activenav" : "")}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
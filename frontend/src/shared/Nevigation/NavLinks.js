import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import './NavLinks.css'

const NavLinks = props => {
  return (
    <Navbar className="navbar">
        
        <NavLink to="/" className="Logo">Ron. </NavLink>
      
      <ul className="nav-links">
        <li>
          <NavLink to="/home" >Home</NavLink>
        </li>
        
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
  
         <li>
            <NavLink to="/contact">Contact</NavLink>
        </li> 
  
      </ul>
    </Navbar>
  );
};

export default NavLinks;

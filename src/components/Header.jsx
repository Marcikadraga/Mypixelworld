import React from 'react';
import '../css/Header.css';
import NavItem from './NavItem';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent text-white">
      <div className="container-fluid">
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem to="/" label="Home" />
            <NavItem to="/adminPage" label="admin" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;



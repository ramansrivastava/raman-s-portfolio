// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="custom-navbar navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        {/* Left-aligned name */}
        <a className="navbar-brand header-title" href="#home">Jyotirmaan Srivastava</a>

        {/* Right-aligned navigation links */}
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import './index.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#features">Pricing</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
}

export default Header;



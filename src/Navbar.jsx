import React from 'react';
import './style.css';

const Navigation = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Amazon</div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
      </div>
      <div className="navbar-icons">
        <span className="user-icon">User</span>
        <div className="cart-icon">
          <span>Cart</span> {cartCount}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

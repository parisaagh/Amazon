import React from 'react';
import './style.css';

const Searchbar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search..." />
      <button type="button">Search</button>
    </div>
  );
};

export default Searchbar;

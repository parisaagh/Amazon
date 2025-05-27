import React from 'react';
import './style.css';

const Tile = ({ imgSrc, title, description, price, onAddToCart }) => {
  return (
    <div className="tile">
      <img src={imgSrc} alt={title} className="tile-img" />
      <div className="tile-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">{price}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Tile;

import React, { useState } from 'react';
import Navigation from './Navbar';
import Tile from './Tile';
import Searchbar from './Searchbar';
import './style.css';

const items = [
  {
    id: 1,
    imgSrc: "https://m.media-amazon.com/images/I/81qzZf+2LyL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Premium Saffron",
    description: " ",
    price: "$75"
  },
  {
    id: 2,
    imgSrc: "https://m.media-amazon.com/images/I/8149ciz87fL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Pistachio Nuts",
    description: " ",
    price: "$10"
  },
  {
    id: 3,
    imgSrc: "https://m.media-amazon.com/images/I/71ite41DWtL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Persian Carpet",
    description: " ",
    price: "$100"
  },
  {
    id: 4,
    imgSrc: "https://m.media-amazon.com/images/I/31-LNX4BoKL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Persian Tea",
    description: " ",
    price: "$15"
  },
];

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <Navigation cartCount={cartCount} />
      <div className="container">
        <Searchbar />
        <div className="tiles">
          {items.map(item => (
            <Tile
              key={item.id}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              price={item.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Store from './components/Store';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Header />
      <Store addToCart={addToCart} />
      <ShoppingCart cart={cart} />
      <Footer />
    </div>
  );
}

export default App;

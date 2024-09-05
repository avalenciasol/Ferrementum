import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; // Importar Route y Routes
import Store from './components/Store';
import ShoppingCart from './components/ShoppingCart';
import PurchaseForm from './components/PurchaseForm'; // Importar PurchaseForm
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
      <Routes>
        <Route path="/" element={<Store addToCart={addToCart} />} />
        <Route path="/shopping-cart" element={<ShoppingCart cart={cart} />} />
        <Route path="/purchase-form" element={<PurchaseForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Store from './components/Store';
import ShoppingCart from './components/ShoppingCart';
import PurchaseForm from './components/PurchaseForm';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Importar estilos globales

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div id="root">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Store addToCart={addToCart} />} />
          <Route path="/shopping-cart" element={<ShoppingCart cart={cart} />} />
          <Route path="/purchase-form" element={<PurchaseForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

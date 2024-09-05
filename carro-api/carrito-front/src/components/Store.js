// src/components/Store.js
import React, { useState, useEffect } from 'react';
import './Store.css';
import PurchaseForm from './PurchaseForm';

function Store({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleBuy = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseForm = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="store">
      <div className="container">
        <div className="items">
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="item shadow mb-4">
                  <h3 className="item-title">{product.nombre}</h3>
                  <img className="item-image" src={product.imagen} alt={product.nombre} />
                  <div className="item-details">
                    <h4 className="item-price">${product.precio.toLocaleString()}</h4>
                    <button
                      className="item-button btn btn-primary"
                      onClick={() => handleBuy(product)}
                    >
                      AÑADIR AL CARRITO
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <PurchaseForm product={selectedProduct} onClose={handleCloseForm} />
      )}
    </section>
  );
}

export default Store;

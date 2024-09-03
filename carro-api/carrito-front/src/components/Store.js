// src/components/Store.js
import React, { useState, useEffect } from 'react';
import './Store.css';
import PurchaseForm from './PurchaseForm'; // Importa el formulario

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
    setSelectedProduct(product); // Mostrar el formulario
  };

  const handleCloseForm = () => {
    setSelectedProduct(null); // Ocultar el formulario
  };

  return (
    <section className="store">
      <div className="container">
        <div className="items">
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="item shadow mb-4">
                  <h3 className="item-title">{product.title}</h3>
                  <img className="item-image" src={product.image} alt={product.title} />
                  <div className="item-details">
                    <h4 className="item-price">${product.price.toLocaleString()}</h4>
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

      {/* Mostrar formulario de compra si hay un producto seleccionado */}
      {selectedProduct && (
        <PurchaseForm product={selectedProduct} onClose={handleCloseForm} />
      )}
    </section>
  );
}

export default Store;

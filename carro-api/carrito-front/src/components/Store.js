// src/components/Store.js
import React, { useState, useEffect } from 'react';
import './Store.css';
import PurchaseForm from './PurchaseForm';

function Store({ addToCart }) {
  const [products, setProducts] = useState([]); // Estado para productos
  const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado
  const [error, setError] = useState(null); // Estado para manejar errores

  // Cargar productos desde el backend
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/productos/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener productos');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data); // Guardar productos en el estado
        } else {
          throw new Error('Formato de datos incorrecto');
        }
      })
      .catch(error => setError(error.message)); // Guardar errores
  }, []);

  // Función para añadir producto al carrito
  const handleBuy = (product) => {
    setSelectedProduct(product);
    addToCart(product); // Llamar a la función para añadir al carrito
  };

  // Cerrar el formulario de compra
  const handleCloseForm = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="store">
      <div className="container">
        <div className="items">
          <div className="row">
            {error ? (
              <p>Error: {error}</p> // Mostrar errores si los hay
            ) : products.length > 0 ? (
              products.map((product, index) => (
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
              ))
            ) : (
              <p>Cargando productos...</p> // Mostrar mensaje mientras se cargan los productos
            )}
          </div>
        </div>
      </div>

      {/* Mostrar formulario de compra si se selecciona un producto */}
      {selectedProduct && (
        <PurchaseForm product={selectedProduct} onClose={handleCloseForm} />
      )}
    </section>
  );
}

export default Store;

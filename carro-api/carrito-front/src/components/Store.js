import React, { useState, useEffect } from 'react';
import './Store.css';

function Store({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    fetch('http://localhost:5000/api/products') // Cambia esta URL a la ruta de tu API
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

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
                      onClick={() => addToCart({ title: product.title, price: product.price })}
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
    </section>
  );
}

export default Store;

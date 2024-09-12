import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
  const [products, setProducts] = useState([]); // Estado para almacenar productos
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.precio, 0).toFixed(2);
  };

  const handleBuy = () => {
    navigate('/purchase-form');
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/productos/'); // Asegúrate de que esta URL es correcta
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data); // Guardar productos en el estado
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="shopping-cart">
      <div className="container">
        <h1 className="text-center">CARRITO</h1>
        <hr />
        {error && <p>Error: {error}</p>}
        <div className="row">
          <div className="col-6">
            <div className="shopping-cart-header">
              <h6>Producto</h6>
            </div>
          </div>
          <div className="col-2">
            <div className="shopping-cart-header">
              <h6 className="text-truncate">Precio</h6>
            </div>
          </div>
          <div className="col-4">
            <div className="shopping-cart-header">
              <h6>Cantidad</h6>
            </div>
          </div>
        </div>
        <div className="shopping-cart-items">
          {products.map((product, index) => (
            <div key={index} className="shoppingCartItem">
              <div className="row">
                <div className="col-6">
                  <p className="shoppingCartItemTitle">{product.nombre}</p>
                </div>
                <div className="col-2">
                  <p className="shoppingCartItemPrice">${product.precio}</p>
                </div>
                <div className="col-4">
                  <p className="shoppingCartItemQuantity">{product.cantidad}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="shopping-cart-total d-flex align-items-center">
              <p className="mb-0">Total</p>
              <p className="ml-4 mb-0 shoppingCartTotal">${calculateTotal()}</p>
              <button className="btn btn-success ml-auto comprarButton" type="button" onClick={handleBuy}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;

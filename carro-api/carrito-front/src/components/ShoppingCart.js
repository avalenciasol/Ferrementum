import React from 'react';
import './ShoppingCart.css';

function ShoppingCart({ cart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleBuy = () => {
    // Aquí puedes enviar los datos del carrito a tu API
    fetch('http://localhost:5000/api/checkout', { // Cambia esta URL a la ruta de tu API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    })
    .then(response => response.json())
    .then(data => {
      alert('Compra realizada con éxito');
      // Aquí puedes limpiar el carrito si lo deseas
    })
    .catch(error => console.error('Error during checkout:', error));
  };

  return (
    <section className="shopping-cart">
      <div className="container">
        <h1 className="text-center">CARRITO</h1>
        <hr />
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
          {cart.map((item, index) => (
            <div key={index} className="shoppingCartItem">
              <div className="row">
                <div className="col-6">
                  <p className="shoppingCartItemTitle">{item.title}</p>
                </div>
                <div className="col-2">
                  <p className="shoppingCartItemPrice">${item.price}</p>
                </div>
                <div className="col-4">
                  <p className="shoppingCartItemQuantity">1</p>
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

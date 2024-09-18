import React, { useState } from 'react';
import '../styles/cart.css';

const Cart = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      producto: "Lijadora Orbital",
      marca: "BauKer",
      precio: 159.920,
      cant: 1,
      imagen: "../../assets/images/products/lijadora-orbital.png"
    },
    {
      id: 2,
      producto: 'Lijadora Orbital',
      marca: 'BauKer',
      precio: 159.900,
      cant: 1,
      imagen: "../../assets/images/products/lijadora-orbital.png"
    },
    {
      id: 3,
      producto: "Lijadora Orbital",
      marca: "BauKer",
      precio: 159.920,
      cant: 1,
      imagen: "../../assets/images/products/lijadora-orbital.png"
    } 
  ])

  const incrementarCant = (id) => {
    setCartItems(
      cartItems.map((item) =>
      item.id === id ? {...item, cant: item.cant + 1}: item
      )
    );
  };

  const decrementCant = (id) => {
    setCartItems(
      cartItems.map((item) => 
      item.id === id && item.cant > 1 ? {...item, cant: item.cant - 1 }: item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.precio * item.cant, 0);

  return (
    <div className='cart-container'>
      <div className='cart-left'>
        <div className='cart-items'>
          <h3>Mi carrito ({cartItems.length})</h3>
          {cartItems.map((item) => (
            <div className='cart-item'>
              <img src={item.imagen} alt={item.producto} className='item-image'></img>
              <div className='item-details'>
                <h4>{item.producto}</h4>
                <p>${(item.precio ? (item.precio * item.cant).toFixed(3) : '0')}</p>
                <div className='item-actions'>
                  <button onClick={() => decrementCant(item.id)}>-</button>
                  <span>{item.cant}</span>
                  <button onClick={() => incrementarCant(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>Eliminar</button>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className='cart-right'>
          <div className='direccion'>
            <h4>Dirección de Envío</h4>
            <p>Kr 96 C # 22 H - 30</p>
            <button>Cambiar</button>
          </div>
          <div className='resumen-pago'>
            <h4>Resumen de Pago</h4>
            <p>Compra: ${totalAmount.toFixed(2)}</p>
            <p>Envío: 7,000</p>
            <h4>Total: ${(totalAmount ? (totalAmount - 7000).toFixed(3) : '0')}</h4>
            <button className='orden-btn'>Comprar</button>
          </div>
        </div>
    </div>
  );

};


export default Cart;
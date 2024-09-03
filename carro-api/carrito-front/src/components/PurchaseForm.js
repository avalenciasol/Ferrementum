// src/components/PurchaseForm.js
import React, { useState } from 'react';
import './PurchaseForm.css'; // Archivo CSS para el formulario

function PurchaseForm({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const orderData = {
      productId: product.id,
      quantity,
      address,
      paymentMethod,
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Order placed successfully!');
      onClose(); // Close the form after submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="purchase-form">
      <h2>Compra</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Cantidad:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          Dirección:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Método de Pago:
          <input
            type="text"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </label>
        <button type="submit">Realizar Compra</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
}

export default PurchaseForm;

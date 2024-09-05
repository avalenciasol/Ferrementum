import React, { useState } from 'react';

function PurchaseForm({ products, onClose }) {
  // Estados para los campos de formulario
  const [metodoPago, setMetodoPago] = useState('');
  const [direccion, setDireccion] = useState('');
  const [numSeg, setNumSeg] = useState('');
  const usuarioId = 1; // Aquí podrías obtener el ID del usuario actual logueado

  // Manejar la compra
  const handlePurchase = () => {
    // Crear el objeto del pedido que será enviado
    const pedidoData = {
      usuario_id: usuarioId,
      fecha_pedido: new Date().toISOString(),
      estado: 'pendiente',
      num_seg: numSeg,
      metodo_pago_id: metodoPago,
      direccion_id: direccion,
      productos: products.map(product => ({ id: product.id, cantidad: 1 })) // Mapeamos los productos
    };

    // Enviar la compra a la API
    fetch('http://localhost:5001/api/pedido', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pedidoData),
    })
      .then(response => response.json())
      .then(data => {
        alert('Compra realizada con éxito');
        onClose(); // Cerrar el formulario después de realizar la compra
      })
      .catch(error => console.error('Error en la compra:', error));
  };

  return (
    <div className="purchase-form">
      <h2>Formulario de Compra</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="metodoPago">Método de Pago:</label>
          <select
            id="metodoPago"
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
          >
            <option value="">Selecciona un método de pago</option>
            <option value="1">Tarjeta de Crédito</option>
            <option value="2">PayPal</option>
            {/* Aquí debes cargar los métodos de pago desde la base de datos */}
          </select>
        </div>

        <div>
          <label htmlFor="direccion">Dirección:</label>
          <select
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          >
            <option value="">Selecciona una dirección</option>
            <option value="1">Dirección 1</option>
            <option value="2">Dirección 2</option>
            {/* Aquí también puedes cargar las direcciones del usuario desde la base de datos */}
          </select>
        </div>

        <div>
          <label htmlFor="numSeg">Número de Seguimiento (opcional):</label>
          <input
            type="text"
            id="numSeg"
            value={numSeg}
            onChange={(e) => setNumSeg(e.target.value)}
          />
        </div>

        <button type="button" onClick={handlePurchase}>
          Confirmar Compra
        </button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default PurchaseForm;

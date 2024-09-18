import React, { useState, useEffect } from 'react';

import "../styles/adminDashboard.css"

const AdminDashboard = () => {
    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [productoForm, setProductoForm] = useState({ id: null, nombre: '', marca:'', precio: '', stock: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const mockProductos = [
          { id: 1, nombre: 'Lijadora Orbital', precio: 159.950, stock: 20 },
          { id: 2, nombre: 'Pintura Interiores - Blanca 5Gl', precio: 224.950, stock: 5 },
          { id: 3, nombre: 'Porta Herramientas', precio: 58.900, stock: 30 },
        ];
    
        const mockUsuarios = [
          { id: 1, tipo_doc: 'CC', doc: '1001329907', nombre: 'Ana', apellido: 'Valencia', email: 'ana.valencia@gmail.com', tel: '3197280842' },
          { id: 2, tipo_doc: 'TI', doc: '1012597861', nombre: 'Camilo', apellido: 'García', email: 'garca@hotmail.com', tel: '3147427313' },
          { id: 3, tipo_doc: 'CC', doc: '20369156', nombre: 'Laura', apellido: 'López', email: 'LoLa01@gmail.com', tel: '3102267389' },
        ];
    
        setProductos(mockProductos);
        setUsuarios(mockUsuarios);
      }, []);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductoForm({ ...productoForm, [name]: value });
      };

      const agregarProducto = () => {
        const nuevoProducto = {
          id: productos.length + 1,
          nombre: productoForm.nombre,
          marca: productoForm.marca,
          precio: parseFloat(productoForm.precio),
          stock: parseInt(productoForm.stock),
        };
        setProductos([...productos, nuevoProducto]);
        resetForm();
      };

      const editarProducto = (producto) => {
        setProductoForm(producto);
        setIsEditing(true);
      };

      const actualizarProducto = () => {
        setProductos(
          productos.map((producto) =>
            producto.id === productoForm.id ? productoForm : producto
          )
        );
        resetForm();
        setIsEditing(false);
      };

      const eliminarProducto = (id) => {
        setProductos(productos.filter((producto) => producto.id !== id));
      };

      const resetForm = () => {
        setProductoForm({ id: null, nombre: '', marca:'', precio: '', stock: '' });
      };

      const eliminarUsuario = (id) => {
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
      };

    return (
        <div>
            <section className='productsAdmin-area'>
                <div className='productsAdmin-wrapper-one'>
                    <div className="admin-container">
                        <h2>Panel de Administración</h2>
                    </div>
                    {/* CRUD PRODUCTOS */}
                    <div className='crud-productos-admin'>
                        <h3>Administrar Productos</h3>
                        <form className='product-form' onSubmit={(e) => { e.preventDefault(); isEditing ? actualizarProducto(): agregarProducto();}}>
                            <input type='text' name='nombre' placeholder='Nombre del producto' value={productoForm.nombre} onChange={handleInputChange} required></input>
                            <input type='text' name='marca' placeholder='Marca del producto' value={productoForm.marca} onChange={handleInputChange} required></input>
                            <input type='number' name='precio' placeholder='Precio del producto' value={productoForm.precio} onChange={handleInputChange} required></input>
                            <input type='number' name='stock' placeholder='cantidad de unidades disponibles' value={productoForm.stock} onChange={handleInputChange} required></input>
                            <button type='submit' className='save-btn'>
                                {isEditing ? 'Actualizar Producto' : 'Agregar Producto'}
                            </button>
                            {isEditing && <button type='button' className='cancel-btn' onClick={resetForm}>Cancelar</button>}
                        </form>

                        <div className='product-list'>
                            {productos.map((producto) => (
                                <div key={producto.id} className='product-item'>
                                    <h4>{producto.nombre}</h4>
                                    <p>{producto.marca}</p>
                                    <p>Precio: {producto.precio.toFixed(3)} COP</p>
                                    <p>Cantidad: {producto.stock}</p>
                                    <div className='product-actions'>
                                        <button onClick={() => editarProducto(producto)} className='edit-btn'>Editar</button>
                                        <button onClick={() => eliminarProducto(producto.id)} className='remove-btn'>Eliminar</button>
                                    </div>
                                </div>
                            ))};
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN USUARIOS */}
            <section className='usersAdmin-area'>
                <div className='usersAdmin-wrapper-one'>
                    <div className='admin-section'>
                        <h3>Usuarios</h3>
                        <div className='user-list'>
                            {usuarios.map((usuario) => (
                                <div key={usuario.id} className='user-item'>
                                    <h4>{usuario.nombre}</h4>
                                    <h4>{usuario.apellido}</h4>
                                    <p>Tipo Documento: {usuario.tipo_doc}</p>
                                    <p>Documento: {usuario.doc}</p>
                                    <p>Email: {usuario.email}</p>
                                    <p>Teléfono: {usuario.tel}</p>
                                    <button onClick={() => eliminarUsuario(usuario.id)} className='remove-btn'>Eliminar</button>

                                </div>
                            ))};
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default AdminDashboard;
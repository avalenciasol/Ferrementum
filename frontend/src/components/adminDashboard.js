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
        { id: 1, tipo_doc: 'CC', doc: '1001329907', nombre: 'Ana', apellido: 'Valencia', email: 'ana@gmail.com', tel: '3197280842' },
        { id: 2, tipo_doc: 'CC', doc: '3214569870', nombre: 'Joseph', apellido: 'Rivera', email: 'jprivera@gmail.com', tel: '3226738910' },
        { id: 3, tipo_doc: 'CC', doc: '20369156', nombre: 'Laura', apellido: 'López', email: 'lola1@gmail.com', tel: '3102267389' },
        { id: 4, tipo_doc: 'TI', doc: '1234567890', nombre: 'Andrés', apellido: 'Barrera', email: 'andy@outlook.com', tel: '3108642962' },
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
      <div className='admin-dashboard'>
        {/* <aside className="admin-sidebar">
          <nav className="admin-nav">
            <ul>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#usuarios">Usuarios</a></li>
              <li><a href="/logout">Cerrar Sesión</a></li>
            </ul>
          </nav>
        </aside> */}
        {/* Banner Admin */}
        <section className='banner-area'>
          <div className='admin-banner-wrapper-one'>
            <div className='banner-container'>
              <div className='col-lg-8'>
                <div className='banner-content'>
                  <h1 className="fadeInUp" style={{ animationDelay: "30ms" }}>
                    Hola Ana,
                  </h1>
                  <h3 className="fadeInDown" style={{ animationDelay: "50ms" }}> 
                    Bienvenid@ a tu panel de administrador  
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='productos' className='admin-section productos'>
          {/* CRUD PRODUCTOS */}
          <h3>Administrar Productos</h3>
          <div className='productos-content'>
            <form className='product-form' onSubmit={(e) => { e.preventDefault(); isEditing ? actualizarProducto(): agregarProducto();}}>
              <h2>Agregar / Editar</h2>
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
                  <p>{producto.precio.toFixed(3)} COP</p>
                  <p>{producto.stock}</p>
                  <div className='product-actions'>
                    <button onClick={() => editarProducto(producto)} className='edit-btn'>Editar</button>
                    {/* <button onClick={() => eliminarProducto(producto.id)} className='remove-btn'>Eliminar</button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN USUARIOS */}
        <section id="usuarios" className="admin-section usuarios">
          <h3>Usuarios</h3>
          <div className="user-list">
            {usuarios.map((usuario) => (
              <div key={usuario.id} className="user-item">
                <h4>{usuario.nombre} {usuario.apellido}</h4>
                <p>Documento: {usuario.doc}</p>
                <p>Email: {usuario.email}</p>
                <p>Teléfono: {usuario.tel}</p>
                <button
                  onClick={() => eliminarUsuario(usuario.id)}
                  className="remove-btn"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    );

};

export default AdminDashboard;
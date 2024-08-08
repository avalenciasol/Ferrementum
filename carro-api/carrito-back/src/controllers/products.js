const pool = require('../config/db');

// Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM producto');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM producto WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  const { nombre, descripcion, precio, cantidad, imagen, categoria_id } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO producto (nombre, descripcion, precio, cantidad, imagen, categoria_id) VALUES (?, ?, ?, ?, ?, ?)', [nombre, descripcion, precio, cantidad, imagen, categoria_id]);
    res.status(201).json({ id: result.insertId, nombre, descripcion, precio, cantidad, imagen, categoria_id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, cantidad, imagen, categoria_id } = req.body;
  try {
    const [result] = await pool.query('UPDATE producto SET nombre = ?, descripcion = ?, precio = ?, cantidad = ?, imagen = ?, categoria_id = ? WHERE id = ?', [nombre, descripcion, precio, cantidad, imagen, categoria_id, id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json({ id, nombre, descripcion, precio, cantidad, imagen, categoria_id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM producto WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

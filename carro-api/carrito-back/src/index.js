const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

app.use(cors());
app.use(bodyParser.json());

// Registrar rutas
app.use('/api', productRoutes);

// Manejo de errores
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo salió mal' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

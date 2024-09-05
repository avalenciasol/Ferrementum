const express = require('express');
const app = express();
const errorHandler = require('./Middlewares/errorHandler');
const productRoutes = require('./routes/products');

app.use(express.json());

// Usar las rutas de productos
app.use('/api/products', productRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

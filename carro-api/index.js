const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

let cart = [];

// Obtener el carrito de compras
app.get('/cart', (req, res) => {
    res.json(cart);
});

// Agregar un artículo al carrito
app.post('/cart', (req, res) => {
    const item = req.body;
    cart.push(item);
    res.json(cart);
});

// Eliminar un artículo del carrito
app.delete('/cart/:id', (req, res) => {
    const id = req.params.id;
    cart = cart.filter(item => item.id !== id);
    res.json(cart);
});

// Limpiar el carrito
app.delete('/cart', (req, res) => {
    cart = [];
    res.json(cart);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

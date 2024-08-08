import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Cambia esto a la URL de tu API

export const getProducts = () => axios.get(`${API_URL}/products`);

export const addToCart = (product) => axios.post(`${API_URL}/cart`, product);

export const getCart = () => axios.get(`${API_URL}/cart`);

export const updateCart = (product) => axios.put(`${API_URL}/cart`, product);

export const checkout = () => axios.post(`${API_URL}/checkout`);

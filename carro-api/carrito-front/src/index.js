import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Importar BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolver la aplicación con BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

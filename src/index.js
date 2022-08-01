import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss'
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { CartProvider } from './context/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  
  // Strict mode used during production
  // <React.StrictMode>
  <Router>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </Router>
  // </React.StrictMode>
);
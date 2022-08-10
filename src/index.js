import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss'
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { CartProvider } from './context/CartProvider';
import { MessageProvider } from './context/MessageProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  
  // Strict mode used during production
  // <React.StrictMode>
  <Router>
    <AuthProvider>
      <CartProvider>
        <MessageProvider>
          <App />
        </MessageProvider>
      </CartProvider>
    </AuthProvider>
  </Router>
  // </React.StrictMode>
);
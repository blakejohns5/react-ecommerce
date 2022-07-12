import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  // Strict mode used during production
  // <React.StrictMode>
  <Router>
    <App />
  </Router>
  // </React.StrictMode>
);
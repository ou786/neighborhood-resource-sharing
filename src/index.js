// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ItemProvider } from './context/ItemContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* ✅ Only one Router here */}
    <ItemProvider>
      <App />
    </ItemProvider>
  </BrowserRouter>
);

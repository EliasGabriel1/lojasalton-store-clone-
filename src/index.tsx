import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Producto from './pages/Producto';
import Category from './pages/Category';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./Context/AppContext";
import "./Geral/reset.css";
import "./Geral/geral.css";
import Busca from './pages/Busca';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Category" element={<Category />} />
        <Route path="Busca" element={<Busca />} />
        <Route path="Producto" element={<Producto />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </AppProvider>
  </BrowserRouter>
);
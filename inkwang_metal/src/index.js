import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './layout/header';
import Footer from './layout/footer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header/>
    <App />
    <Footer/>
  </BrowserRouter>
);
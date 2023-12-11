import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Form from './Form';
import './App.css';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Form />
    <Footer />
  </React.StrictMode>
);
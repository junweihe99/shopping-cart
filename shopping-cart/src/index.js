import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouteSwitch />
  </React.StrictMode>
);
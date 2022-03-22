import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <App />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

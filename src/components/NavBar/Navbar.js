import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>ECOMMER</h3>
      <ul className="categories">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/novela">Novela</Link></li>
        <li><Link to="/ciencia-ficcion">Ciencia Ficción</Link></li>
        <li><Link to="/fantasia">Fantasía</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default Navbar;

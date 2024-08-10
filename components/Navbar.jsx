import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css'; 
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="navbar-title">Compra expres</h1>
      </div>
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li className="dropdown">
          <Link to="#" className="dropbtn">Categorías <span>&#9660;</span></Link>
          <div className="dropdown-content">
            <Link to="/products/madera">Madera</Link>
            <Link to="/products/rodados">Rodados</Link>
            <Link to="/products/computacion">Computación</Link>
          </div>
        </li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


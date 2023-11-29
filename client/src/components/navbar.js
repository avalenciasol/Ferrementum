import React from "react";
import "../styles/style.css";
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
    return (

        <div>
            <nav className="navbar">
                <NavLink className="navbar-logo" to="/">
                    <img alt="Ferrementum logo" src="../assets/logo.png"></img>
                </NavLink>
                <div className="page-name">
                    <h1>Ferrementum</h1>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar..." />
                    <button type="submit">Buscar</button>
                </div>
                <div className="buttons">
                    <NavLink className="btn-acceso" to="/access">Iniciar Sesión</NavLink>
                    <NavLink className="navbar-cart" to="/cart">
                        <img alt="cart logo" src="../assets/cart.png"></img>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}
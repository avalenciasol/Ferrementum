import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import "../styles/navbar.css";

export default function Navbar() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    console.log('Estado de isLoggedIn:', isLoggedIn);

    const [menuVisible, setMenuVisible] = useState(false);
    const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div>
            <nav className="navbar">
                    <NavLink className="navbar-logo" to="/home">
                        <img alt="Ferrementum logo" src="../assets/images/navbar/logo.png" className="logo"></img>
                    </NavLink>
                    <div className="page-name">
                        <h1>Ferrementum</h1>
                </div>
                {/* <div className="search-bar">
                    <input type="text" placeholder="Buscar productos, marcas y más..." />
                    <button tupe="submit" className="btn-search">Buscar</button>
                </div> */}
                <div className="buttons">
                    {isLoggedIn ? (
                        <NavLink className="link-acceso" to="/profile">
                            <img alt="profile logo" src="../assets/images/navbar/profile.png"></img>
                        </NavLink>
                    ) : (
                        <NavLink className="link-acceso" to="/access">
                            Iniciar Sesión
                        </NavLink>
                    )}
                    <NavLink className="navbar-cart" to="/cart">
                        <img alt="cart logo" src="../assets/images/navbar/cart.png"></img>
                    </NavLink>
                    {isSmallScreen && (
                        <div className="menu-icon" onClick={() => setMenuVisible(!menuVisible)}>
                            <img alt="menu" src="../assets/images/navbar/menu.png"></img>
                        </div>
                    )}
                </div>
            </nav>
            {isSmallScreen && menuVisible && (
                <div className="mobile-menu">
                    {isLoggedIn ? (
                        <NavLink className="link-acceso" to="/profile">
                            Perfil
                        </NavLink>
                    ) : (
                        <NavLink className="link-acceso" to="/access">
                            Iniciar Sesión
                        </NavLink>
                    )}
                    <NavLink  className="navbar-cart" to="/cart">Carrito</NavLink>
                </div>
            )}
        </div>
    );
}
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { removeToken } from "../slices/authSlice";
import "../styles/profile.css";

import { store } from '../store';

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log('Estado de Redux:', store.getState());

    useEffect(() => {
        const fetchUserData = async () => {
            console.log('Token actual:', token);
            if (token) {
                try {
                    const response = await fetch("http://127.0.0.1:8000/usuarios/perfil", {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        } 
                    });
                    console.log('fetch:', response);

                    if(response.ok) {
                        const data = await response.json();
                        setUserData(data);
                        console.log('Datos usuario:', data)
                    } else {
                        throw new Error('Failed to fetch user data');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    dispatch(removeToken());
                    navigate('/access');
                }
            } else {
                navigate("/home");
            }
        };

        fetchUserData();
    }, [token, dispatch, navigate]);

    const handleLogout = () => {
        dispatch(removeToken());
        navigate('/access');
    };

    const handleDeleteUser = async () => {
        const userConfirmed = window.confirm('¿Está seguro de que desea eliminar este usuario? Esta acción no se puede deshacer.');
        
        if (userConfirmed) {
            try {
                const response = await fetch('http://localhost:8000/usuarios/delete/', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });

                if (response.ok) {
                    dispatch(removeToken());
                    navigate('/register');
                } else {
                    throw new Error('Error al eliminar el usuario');
                }
            } catch (error) {
                console.error('No se pudo eliminar el usuario', error);
            }
        } else {
            console.log('Eliminación cancelada por el usuario.');
        }

    };

    return (
        <div className='profile'>
            {userData ? (
                <div className="profile-container">
                    <aside className="sidebar">
                        <div className="sidebar-header">
                            <h2>{userData.nombre} {userData.apellido}</h2>
                        </div>
                        <nav className="sidebar-nav">
                            <ul>
                                <li><Link to="/history" className='sidebar-link'>Mis Compras</Link></li>
                                <li><Link to="/adress" className='sidebar-link'>Mis Direcciones</Link></li>
                                <li><Link onClick={handleLogout} className='sidebar-link'>Cerrar Sesión</Link></li>
                            </ul>
                            <button type="button" onClick={handleDeleteUser} className='btn-DeleteUser'>
                                Eliminar cuenta
                            </button>
                        </nav>
                    </aside>

                    <section className="profile-content">
                        <div className="profile-details">
                            <h1 className='profile-content-title'>Perfil de Usuario</h1>
                            <div className="personal-details">
                                <p><strong>Nombre: </strong> {userData.nombre}</p>
                                <p><strong>Apellido:</strong>  {userData.apellido}</p>
                                <p><strong>Correo:</strong>  {userData.email}</p>
                                <p><strong>Teléfono:</strong>  {userData.telefono}</p>
                            </div>
                        </div>
                        <button type="button" className='btn-EditProfile'><Link to="/editProfile" className='editProfile-link'>Editar Perfil</Link></button>
                    </section>
                </div>
            ) : (
                <p>Cargando datos del usuario...</p>
            )
            }
        </div >    
    );
};
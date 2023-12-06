import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { removeToken } from "../slices/authSlice";
import "../styles/profile.css";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            if (token) {
                try {
                    const response = await fetch("http://localhost:5050/users/profile", {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setUserData(data);
                    } else {
                        throw new Error('Failed to fetch user data');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    dispatch(removeToken());
                    navigate('/access');
                }
            } else {
                navigate("/access");
            }
        };

        fetchUserData();

    }, [token, dispatch, navigate]);

    const handleLogout = () => {
        dispatch(removeToken());
        navigate('/access');
    };

    const handleDeleteUser = async () => {
        try {
            const response = await fetch('http://localhost:5050/users/delete-user', {
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
                throw new Error('Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className='profile'>
            {userData ? (
                <div className="profile-container">
                    <aside className="sidebar">
                        <div className="sidebar-header">
                            <h2>{userData.firstname} {userData.lastname}</h2>
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
                                <p><strong>Nombre: </strong> {userData.firstname}</p>
                                <p><strong>Apellido:</strong>  {userData.lastname}</p>
                                <p><strong>Correo:</strong>  {userData.email}</p>
                                <p><strong>Teléfono:</strong>  {userData.phone}</p>
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

export default Profile;
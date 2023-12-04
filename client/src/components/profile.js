import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { removeToken } from "../slices/authSlice";

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
                            'Authorization': `Bearer ${ token }` // Asegúrate de usar el esquema de autorización correcto
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
            }
        };

        fetchUserData();

    }, [token, dispatch, navigate]);

    if (!token) {
        // Si no hay token, se podría mostrar un mensaje o redirigir
        return <p>Cargando...</p>;
    }

return (
    <div>
        <h2>Perfil de Usuario</h2>
        {userData ? (
            <div>
                <p>Nombre: {userData.firstname}</p>
                <p>Apellido: {userData.lastname}</p>
                <p>Email: {userData.email}</p>
            </div>
        ) : (
            <p>Cargando datos del usuario...</p>
        )}
    </div>
);
};

export default Profile;
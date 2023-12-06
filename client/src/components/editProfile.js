import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../slices/authSlice";
import "../styles/profile.css"

const EditProfile = () => {
    const [newUserData, setNewUserData] = useState({
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setNewUserData({
            ...newUserData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (newUserData.password !== newUserData.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        try {
            const response = await fetch('http://localhost:5050/users/edit-profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(newUserData),
            });

            if (response.ok) {
                dispatch(setUserData(newUserData));
                navigate('/profile');
            } else {
                throw new Error('Failed to update user data');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <div className="edit-profile">
            <h1>Editar Perfil</h1>
            <form onSubmit={handleFormSubmit} className="editProfile-form">
                <div className="fields">
                    <div className="field input-field">
                        <label htmlFor="email">
                            Correo:
                            <input
                                type="text"
                                placeholder="Ingresa tu correo"
                                id="email"
                                name="email"
                                value={newUserData.email}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="phone">
                            Teléfono:
                            <input
                                type="text"
                                placeholder="Ingresa tu número de telefono"
                                id="phone"
                                name="phone"
                                value={newUserData.phone}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="password">
                            Contraseña:
                            <input
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                id="password"
                                name="password"
                                value={newUserData.password}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="confirmPassword">
                            Confirmar contraseña:
                            <input
                                type="password"
                                placeholder="Confirma tu contraseña"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={newUserData.confirmPassword}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="field button-field">
                    <button type="submit" className="btn-edited">Guardar</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
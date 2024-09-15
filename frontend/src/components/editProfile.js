import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../slices/authSlice";
import "../styles/profile.css"

const EditProfile = () => {
    const [newUserData, setNewUserData] = useState({
        email: '',
        telefono: '',
        password: '',
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

        const filteredData = {};
        Object.keys(newUserData).forEach(key => {
            if (newUserData[key]) {
            filteredData[key] = newUserData[key];
            }
        });

        console.log("Token: ", token)
        console.log("User Data: ", newUserData)

        try {
            const response = await fetch('http://127.0.0.1:8000/usuarios/editarPerfil/', {
                method: 'PUT',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(filteredData),
            });
            console.log("Token: ", token)
            console.log("Response: ",response)
            if (response.ok) {
                dispatch(setUserData(newUserData)); 
                navigate('/profile');
            } else {
                throw new Error('Failed to update user data', Error);
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
                                placeholder="Ingresa tu nuevo correo"
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
                                placeholder="Ingresa tu nuevo número de telefono"
                                id="phone"
                                name="phone"
                                value={newUserData.telefono}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="field input-field">
                        <label htmlFor="password">
                            Contraseña:
                            <input
                                type="password"
                                placeholder="Ingresa tu nueva contraseña"
                                id="password"
                                name="password"
                                value={newUserData.password}
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
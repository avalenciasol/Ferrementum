import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../slices/authSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../styles/access.css";

export default function Access() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function updateForm(value) {
        setForm((prev) => ({ ...prev, ...value }));
    }

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5050/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                }),
            });

            console.log('Response:', response);

            if (response.ok) {
                const result = await response.json();
                
                dispatch(setToken(result.token));

                console.log('Login successful, navigating to /profile');
                navigate("/profile");
            } else {
                console.error("Error en el inicio de sesión:", response.status, response.statusText);
              }

        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <div className="acceso">
            <div className="form-content">
                <header className="hd-access">Inicia Sesión</header>
                <form onSubmit={onSubmit} className="access-form">
                    <div className="access fields">
                        <div className="field input-field">
                            <label htmlFor="email">Correo</label>
                            <input
                                type="text"
                                placeholder="Correo"
                                id="email"
                                value={form.email}
                                onChange={(e) => updateForm({ email: e.target.value })}
                            />
                        </div>

                        <div className="field input-field">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                id="password"
                                value={form.password}
                                onChange={(e) => updateForm({ password: e.target.value })}
                            />
                            <i className='bx bx-hide eye-icon'></i>
                        </div>

                        <div className="form-link">
                            <Link to="/" className="link-style">¿Olvidaste la contraseña?</Link>
                        </div>

                    </div>

                    <div className="field button-field">
                        <button type="submit" className="btn-access">Acceder</button>
                    </div>
                </form>

                <div className="form-link">
                    <span>¿No tienes una cuenta? <Link to="/register" className="link-style">Registrarse</Link></span>
                </div>

            </div>
        </div>
    );
}

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Access() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [token, setToken] = useState(null);

    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5050/users/access", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                }),
            });

            if (response.ok) {
                const { token } = await response.json();
                setToken(token);
                navigate("/");
            } else {
                const errorData = await response.json();
                console.error("Error en el inicio de sesión:", errorData.error);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    if (token) {
        alert("Usuario autenticado");
    }

    return (
        <div className="form acceso">
            <div className="form-content">
                <header>Inicia Sesión</header>
                <form onSubmit={onSubmit}>
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

                        {/* <label className="checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Recuérdame
                        </label> */}
                    </div>

                    <div className="field button-field">
                        <button type="submit">Acceder</button>
                    </div>
                </form>

                <div className="form-link">
                    <span>¿No tienes una cuenta? <Link to="/register" className="link-style">Registrarse</Link></span>
                </div>

            </div>
        </div>
    );
}

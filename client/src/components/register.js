import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Register() {
    const [form, setForm] = useState({
        document: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [selectedDocumentType, setSelectedDocumentType] = useState("CC");

    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    const handleDocumentTypeChange = (e) => {
        setSelectedDocumentType(e.target.innerText);
    };

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form, documentType: selectedDocumentType };

        await fetch("http://localhost:5050/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })

            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({
            document: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        });

        setSelectedDocumentType("CC");

        if (Response.ok) {
            alert("Usuario creado exitosamente");
        }

        navigate("/");
    }

    // this effect is applied on the dropdown selection for the documentType
    useEffect(() => {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const select = dropdown.querySelector('.select');
            const caret = dropdown.querySelector('.caret');
            const menu = dropdown.querySelector('.menu');
            const options = dropdown.querySelectorAll('.menu li');
            const selected = dropdown.querySelector('.selected');

            select.addEventListener('click', () => {
                select.classList.toggle('select-clicked');
                caret.classList.toggle('caret-rotate');
                menu.classList.toggle('menu-open');
            });

            options.forEach(option => {
                option.addEventListener('click', () => {
                    selected.innerText = option.innerText;
                    select.classList.remove('select-clicked');
                    caret.classList.remove('caret-rotate');
                    menu.classList.remove('menu-open');
                    options.forEach(option => {
                        option.classList.remove('selected');
                    });
                    option.classList.add('selected');
                });
            });
        });
    }, []);

    return (
        <div className="form registro">
            <div className="form-content">
                <header>Crea una cuenta nueva</header>
                {/* <!-- Campos formulario --> */}
                <form onSubmit={onSubmit}>
                    <div className="fields">
                        <div className="field input-field">
                            <label htmlFor="firstname">Primer Nombre</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu nombre"
                                id="firstname"
                                value={form.firstname}
                                onChange={(e) => updateForm({ firstname: e.target.value })}
                            />
                        </div>
                        <div className="field input-field">
                            <label htmlFor="lastname">Primer Apellido</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu apellido"
                                id="lastname"
                                value={form.lastname}
                                onChange={(e) => updateForm({ lastname: e.target.value })}
                            />
                        </div>
                        <div className="field input-field dropdown">
                            <label htmlFor="documentType">Tipo de documento</label>
                            <div className="select">
                                <span className="selected">{selectedDocumentType}</span>
                                <div className="caret"></div>
                            </div>
                            <ul id="documentType" name="documentType" className="menu">
                                <li value="1" onClick={handleDocumentTypeChange}>TI</li>
                                <li value="2" onClick={handleDocumentTypeChange} className={selectedDocumentType === 'CC' ? 'selected' : ""}>CC</li>
                                <li value="3" onClick={handleDocumentTypeChange}>CE</li>
                                <li value="4" onClick={handleDocumentTypeChange}>NIT</li>
                                <li value="5" onClick={handleDocumentTypeChange}>PAS</li>
                            </ul>
                        </div>
                        <div className="field input-field">
                            <label htmlFor="document">Número de documento</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu número de documento"
                                id="document"
                                value={form.document}
                                onChange={(e) => updateForm({ document: e.target.value })}
                            />
                        </div>
                        <div className="field input-field">
                            <label htmlFor="email">Correo</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu correo"
                                id="email"
                                value={form.email}
                                onChange={(e) => updateForm({ email: e.target.value })}
                            />
                        </div>
                        <div className="field input-field">
                            <label htmlFor="phone">Teléfono</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu número de teléfono"
                                id="phone"
                                value={form.phone}
                                onChange={(e) => updateForm({ phone: e.target.value })}
                            />
                        </div>
                        <div className="field input-field">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                placeholder="Crea una contraseña"
                                id="password"
                                value={form.password}
                                onChange={(e) => updateForm({ password: e.target.value })}
                            />
                        </div>
                        <div className="field input-field">
                            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                            <input
                                type="password" // Cambiado a tipo password para ocultar la entrada
                                placeholder="Confirma tu contraseña"
                                id="confirmPassword"
                                value={form.confirmPassword}
                                onChange={(e) => updateForm({ confirmPassword: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="field button-field">
                        <button type="submit">Registrarse</button>
                    </div>
                </form>
                <div className="form-link">
                    <span>¿Ya tienes una cuenta? <Link to="/access" className="link-style">acceder</Link></span>
                </div>
            </div>
        </div>
    );
}
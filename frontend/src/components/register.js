import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../styles/register.css";

export default function Register() {
    const [form, setForm] = useState({
        doc: "",
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        contrasena: "",
        confirmPassword: "",
    });

    const [tipoDocSeleccionado, setTipoDocSeleccionado] = useState("CC");

    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    const handleDocumentTypeChange = (e) => {
        setTipoDocSeleccionado(e.target.getAttribute('data-tipo'));
    };

    async function onSubmit(e) {
        e.preventDefault();

        if (form.contrasena !== form.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const { confirmPassword, contrasena: password, ...formData } = form;
        const newPerson = { ...formData, password, tipo_doc: tipoDocSeleccionado };


        console.log(JSON.stringify(newPerson));

        try {
            const response = await fetch("http://127.0.0.1:8000/usuarios/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPerson),
            });
    
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
    
            alert("Usuario creado exitosamente");
            navigate("/profile");
        } catch (error) {
            console.error('Error fetching user data:', error);
            window.alert("Hubo un problema con la solicitud de registro.");
        }

        setForm({
            doc: "",
            nombre: "",
            apellido: "",
            email: "",
            telefono: "",
            contrasena: "",
            confirmPassword: "",
        });

        setTipoDocSeleccionado("CC");
    }

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
        <div className="registro">
            <div className="form-content">
                <header className="hd-registro">Crea una cuenta nueva</header>
                {/* <!-- Campos formulario --> */}
                <form onSubmit={onSubmit} className="register-form">
                    <div className="fields">
                        <div className="field input-field">
                            <label htmlFor="nombre">Primer Nombre</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu nombre"
                                id="nombre"
                                value={form.nombre}
                                onChange={(e) => updateForm({ nombre: e.target.value })}
                            />
                        </div>
                        <div className="field input-field">
                            <label htmlFor="apellido">Primer Apellido</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu apellido"
                                id="apellido"
                                value={form.apellido}
                                onChange={(e) => updateForm({ apellido: e.target.value })}
                            />
                        </div>
                        <div className="field input-field dropdown">
                            <label htmlFor="tipoDocumento">Tipo de documento</label>
                            <div className="select">
                                <span className="selected">{tipoDocSeleccionado}</span>
                                <div className="caret"></div>
                            </div>
                            <ul id="tipoDocumento" name="tipoDocumento" className="menu">
                                <li data-tipo="TI" onClick={handleDocumentTypeChange}>TI</li>
                                <li data-tipo="CC" onClick={handleDocumentTypeChange} className={tipoDocSeleccionado === 'CC' ? 'selected' : ""}>CC</li>
                                <li data-tipo="CE" onClick={handleDocumentTypeChange}>CE</li>
                                <li data-tipo="NIT" onClick={handleDocumentTypeChange}>NIT</li>
                                <li data-tipo="PAS" onClick={handleDocumentTypeChange}>PAS</li>
                            </ul>
                        </div>
                        <div className="field input-field">
                            <label htmlFor="documento">Número de documento</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu número de documento"
                                id="documento"
                                value={form.doc}
                                onChange={(e) => updateForm({ doc: e.target.value })}
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
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu número de teléfono"
                                id="telefono"
                                value={form.telefono}
                                onChange={(e) => updateForm({ telefono: e.target.value })}
                            />
                        </div>
                        <div className="field input-field">
                            <label htmlFor="contrasena">Contraseña</label>
                            <input
                                type="password"
                                placeholder="Crea una contraseña"
                                id="contrasena"
                                value={form.contrasena}
                                onChange={(e) => updateForm({ contrasena: e.target.value })}
                            />
                        </div>
                        <div className="field input-field">
                            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                            <input
                                type="password" 
                                placeholder="Confirma tu contraseña"
                                id="confirmPassword"
                                value={form.confirmPassword}
                                onChange={(e) => updateForm({ confirmPassword: e.target.value })}
                            />
                        </div>
                        </div>

                    <div className="field button-field">
                        <button type="submit" className="btn-register">Registrarse</button>
                    </div>
                </form>
                <div className="form-link">
                    <span>¿Ya tienes una cuenta? <Link to="/access" className="link-style">acceder</Link></span>
                </div>
            </div>
        </div>
    );
}
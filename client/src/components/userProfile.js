import React, { useEffect, useState } from 'react';

const UserProfile = () => {
    const [userData, setUserData ] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch("http://localhost:5050/auth/profile", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                console.log('Solicitud al perfil:', response);

                if (response.ok) {
                    const data = await response.json();
                    console.log('Datos del perfil:', data);
                    setUserData(data);
                } else {
                    console.error("Error al obtener datos del perfil");
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        };

        fetchProfileData();
    }, []);

    return (
        <div>
            <h2>Perfil de Usuario</h2>
            {userData && (
                <div>
                    <p>Nombre: {userData.firstname}</p>
                    <p>Apellido: {userData.lastname}</p>
                    <p>Email: {userData.email}</p>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' });
    }

    console.log('Token recibido:', token);

    jwt.verify(token, 'secreto', (err, user) => {
        if (err) {
            console.error('Error al verificar el token:', err);
            return res.status(403).json({ error: 'Acceso no autorizado. Token no válido.' });
        }

        console.log('Usuario autenticado:', user);

        // Agregar el usuario autenticado al objeto de solicitud para su uso posterior
        req.user = user;
        next();
    });
};

export default authenticateToken;
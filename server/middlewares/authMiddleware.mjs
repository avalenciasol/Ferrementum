import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' });
    }

    jwt.verify(token, 'secreto', (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Acceso no autorizado. Token no válido.' });
        }

        // Agregar el usuario autenticado al objeto de solicitud para su uso posterior
        req.user = user;
        next();
    });
};

export default authenticateToken;
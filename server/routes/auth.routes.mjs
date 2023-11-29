import { Router } from 'express';
import authenticateToken from "../middlewares/authMiddleware.mjs";
import userModel from "../schemas/users.schemas.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authRouter = Router();

authRouter.post('/access', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Correo incorrecto' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, 'secreto', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

// Ruta protegida que requiere autenticación
authRouter.get('/user-data', authenticateToken, (req, res) => {
    res.json({ userData: req.user });
});

export default authRouter;
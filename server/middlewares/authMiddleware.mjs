import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import userModel from "../schemas/users.schemas.mjs";

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from the token
            req.user = await userModel.findOne({ email: decoded.email }).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if (!token) {
        res.status(401)
        console.error('Error al verificar el token:', error);
        throw new Error('Not authorized, no token')
    }
})

export default protect;

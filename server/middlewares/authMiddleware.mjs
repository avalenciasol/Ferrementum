import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import userModel from "../schemas/users.schemas.mjs";

const protect = asyncHandler(async (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { 
            console.log("Hi xd")

            const token = req.headers.authorization.split(' ')[1];
            console.log("token:", token);

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log('Middleware: 1st step check');

            // Get user from the token
            req.user = await userModel.findOne({ email: decoded.email }).select('-password')
            console.log('Middleware: 2nd step check');

            next()
        }
        else{
            console.log('Noooo');
        }
    } catch (error) {
        console.log('Middleware: Token verification error', error);
        res.status(401).json({ error: 'Not authorized' });
    }

    if (!req.headers.authorization && !req.headers.authorization.startsWith('Bearer')) {
        res.status(401).json({ error: 'Not authorized, no token' });
    }
})

export default protect;

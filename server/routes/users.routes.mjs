import express from "express";

const router = express.Router();

import userController from "../controllers/users.controllers.mjs";
import protect  from "../middlewares/authMiddleware.mjs";

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/profile', protect, userController.profile)

export default router;
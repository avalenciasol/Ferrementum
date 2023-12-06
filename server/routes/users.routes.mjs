import express from "express";

const router = express.Router();

import userController from "../controllers/users.controllers.mjs";
import protect  from "../middlewares/authMiddleware.mjs";

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/profile', protect, userController.profile)
router.put('/edit-profile', protect, userController.editProfile)
router.delete('/delete-user', protect, userController.deleteUser)

export default router;
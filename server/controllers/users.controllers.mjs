import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import userModel from "../schemas/users.schemas.mjs";


// @desc  Register a new user in the database
// @route POST /users
// @access Public
const register = asyncHandler(async (req, res) => {
  const { documentType, document, firstname, lastname, email, phone, password, confirmPassword } = req.body;

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'Usuario ya existe' });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new userModel({
    documentType,
    document,
    firstname,
    lastname,
    email,
    phone,
    password: hashedPassword,
    confirmPassword,
  });

  await user.save();

  res.status(201).json({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    token: generateToken(user.email),
  });
});

// Authenticate a user
// @route POST /users/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user.email);

    res.status(200).json({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      token,
      message: 'Autenticación exitosa',
    });
  } else {
    res.status(400).json({ error: 'Invalid credentials' });
  }
});

// @desc Get user data
// @route GET /users/profile
// @access Private
const profile = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
})

// @desc Update user data
// @route PUT /users/edit-profile
// @access Private
const editProfile = asyncHandler(async (req, res) => {
  const { email, phone, password, confirmPassword } = req.body;

  const updatedUser = await userModel.findOneAndUpdate(
    { _id: req.user._id },
    {
      $set: {
        email: email || req.user.email,
        phone: phone || req.user.phone,
        password: password ? await bcrypt.hash(password, 10) : req.user.password,
        confirmPassword: confirmPassword || req.user.confirmPassword
      },
    },
    { new: true }
  );

  if (!updatedUser) {
    res.status(404).json({ message: 'Usuario no encontrado' });
    return;
  }

  res.status(200).json({
    firstname: updatedUser.firstname,
    lastname: updatedUser.lastname,
    email: updatedUser.email,
    message: 'Perfil actualizado exitosamente',
  });

})

// @desc Delete user data
// @route DELETE /users/delete-user
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const deletedUser = await userModel.findByIdAndDelete(req.user._id);

  if (!deletedUser) {
    res.status(404).json({ message: 'Usuario no encontrado' });
    return;
  }

  res.status(200).json({ message: 'Usuario eliminado exitosamente' });
})

// Generate JWT
const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  })
}

const userController = {
  register,
  login,
  profile,
  editProfile,
  deleteUser,
}

export default userController;
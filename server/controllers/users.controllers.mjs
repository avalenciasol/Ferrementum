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
    res.json({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      token: generateToken(user.email),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc Get user data
// @route GET /users/profile
// @access Private
const profile = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
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
  profile
}

export default userController;
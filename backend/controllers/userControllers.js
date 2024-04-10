const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

//@desc Register new User
//@route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error(`Please add all fields`);
  }

  //check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201, { _id: user.id, name: user.name, email: user.email });
  } else {
    res.status(400);
    res.json({ message: "Invalid user data" });
  }
});

//@desc Authenticate a User
//@route POST /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
  const {email,password} = req.body
  //check for user email
  const user = await User.findOne({email})
  if(user && )

  res.json({ message: "Login User" });
});

//@desc Get user data
//@route GET /api/users/me
//@access Public

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User Data" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};

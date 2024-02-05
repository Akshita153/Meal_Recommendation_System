import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json("Email already exists"); // Send error response
    }

    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password),
    });

    res.json(userDoc);
    // console.log("User registered Successfully!");
  } catch (error) {
    console.error("Error in registering user:", error);
    res.status(500).json({ error: "Registration failed" }); // Send generic error response
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email && email.trim() === "" && !password && password.trim() === "") {
    return res.status(422).json("Invalid input data!");
  }
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json("User does not exist! Please Register!");
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json("Incorrect Email or Password!");
  }
  return res.status(200).json(existingUser.id);
};

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return next(err);
  }

  if (!users) {
    return res.status(500).json({ message: "Unexpected error occurrd!" });
  }
  return res.status(200).json({ users });
};

export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid input data!" });
  }

  const hashedPassword = bcrypt.hashSync(password);
  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      name,
      email,
      password: hashedPassword,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
  res.status(200).json({ message: "User updated successfully!" });
};

export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
  res.status(200).json({ message: "User deleted successfully!" });
};

export const getUserById = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    return next(err);
  }

  if (!user) {
    return res.status(500).json({ message: "Unexpected error occurred!" });
  }
  return res.status(200).json({ user });
};

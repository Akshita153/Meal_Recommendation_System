import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Importing the jwt secret token
const jwtSecret = process.env.JWT_SECRET;
console.log(jwtSecret);

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
  // Finding user with email in database
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    // Checking password
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // creating json web token
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) {
            throw err;
          } else {
            console.log(token);
            res.cookie("token", token).json(userDoc);
          }
        }
      );
    } else {
      res.status(422).json("Password not OK");
    }
  } else {
    res.status(422).json("User not found");
  }
};

export const logout = async (req, res) => {
  // resetting the cookie
  res.cookie("token", "").json(true);
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
   id = req.params.id;
  const { name, emaiconstl, password } = req.body;
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
  const { token } = req.cookies;

  try {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) {
        throw err;
      } else {
        const userDoc = await User.findById(userData.id);
        console.log(userDoc);
        res.status(200).json({ userDoc });
      }
    });
  } catch (error) {
    console.error("Error in fetching user data!", error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
};

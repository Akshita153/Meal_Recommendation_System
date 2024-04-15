import express from "express";
import {
  getAllUsers,
  updateUser,
  deleteUser,
  login,
  getUserById,
  register,
  logout,
} from "../controllers/user.js";

const userRouter = express.Router();
userRouter.get("/getAllUsers", getAllUsers);
userRouter.post("/register", register);
userRouter.get("/getUserById/:id", getUserById);
userRouter.put("/updateUser/:id", updateUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.post("/login", login);
userRouter.post("/logout", logout);

export default userRouter;

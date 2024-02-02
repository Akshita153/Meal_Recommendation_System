import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

//middleware
app.use("/user", userRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(5000, () => console.log("Server is running on port 5000!"))
  )
  .catch((e) => console.log(e));

  
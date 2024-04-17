import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import healthDataRouter from "./routes/healthData.js";
const app = express();

// Middlewares
app.use(express.json()); // parsing incoming json data from requests
app.use(cookieParser()); // parsing cookies

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Implementing the above imported routes
app.use(userRouter);
app.use(healthDataRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(5000, () => console.log("Server is running on port 5000!"))
  )
  .catch((e) => console.log(e));

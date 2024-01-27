import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(5000, () =>
      console.log("Server is running on port 5000!")
    )
  )
  .catch((e) => console.log(e));

import express from "express";
import { addHealthDetails, getHealthDetailsByUserId } from "../controllers/HealthData";

const healthData = express.Router();
healthData.post("/healthDetails", addHealthDetails);
healthData.get("/healthDetails/:id", getHealthDetailsByUserId);

export default healthData;

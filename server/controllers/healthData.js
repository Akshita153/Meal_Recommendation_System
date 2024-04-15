import HealthData from "../models/HealthData.js";

// Importing the jwt model
import jwt from "jsonwebtoken";

// Importing the jwt secret token
const jwtSecret = process.env.JWT_SECRET;

// Store or update health data
export const addHealthDetails = async (req, res, next) => {
    const { token } = req.cookies;
    const { age, height, weight, activityLevel, totalCalories } = req.body;
  
    try {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) {
          throw err;
        } else {
          const existingHealthData = await HealthData.findOne({ user: userData.id });
  
          if (existingHealthData) {
            // If health data already exists for the user, update it
            existingHealthData.age = age;
            existingHealthData.height = height;
            existingHealthData.weight = weight;
            existingHealthData.activityLevel = activityLevel;
            existingHealthData.totalCalories = totalCalories;
  
            const updatedHealthData = await existingHealthData.save();
            res.json(updatedHealthData);
            console.log("Health details updated in database!");
          } else {
            // If no health data exists for the user, create a new document
            const newHealthData = await HealthData.create({
              user: userData.id,
              age,
              height,
              weight,
              activityLevel,
              totalCalories,
            });
            res.json(newHealthData);
            console.log("Health details added in database!");
          }
        }
      });
    } catch (error) {
      console.log(error);
      res.status(422).json(error);
      console.log("Health details not added in database!");
    }
  };

// Fetch health data by user ID
export const getHealthDetailsByUserId = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const healthData = await HealthData.find({ user: userId });
    res.status(200).json({ healthData });
  } catch (error) {
    console.error("Error in fetching health data:", error);
    res.status(500).json({ error: "Failed to fetch health data" });
  }
};

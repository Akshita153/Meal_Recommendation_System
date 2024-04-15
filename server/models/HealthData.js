import mongoose from "mongoose";

const Schema = mongoose.Schema;

const healthDataSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  activityLevel: {
    type: Number,
    required: true,
  },
  totalCalories: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("HealthData", healthDataSchema);

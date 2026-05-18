// require("dotenv").config({ path: "./env" });
// OR
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {});
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
  })
  .catch((error) => {
    console.error("Connection Failed:", error);
  });

/* 1. Connect to MongoDB using Mongoose first approach
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.mongoodb_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.log("ERROR:", error);
  }
})();
*/

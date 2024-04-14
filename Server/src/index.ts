import express from "express";
import mongoose from "mongoose";

// ENV CONFIG
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.listen(process.env.PORT, async () => {
  const DATABASE = await mongoose.connect(process.env.DATABASE as string);
  try {
    if (DATABASE) {
      console.log(`Server started on port ${process.env.PORT}`);
    }
  } catch (error) {
    console.log(error);
  }
});

// IMPORT ROUTES
import router from "./routes/user_routes";
app.use("/api", router);

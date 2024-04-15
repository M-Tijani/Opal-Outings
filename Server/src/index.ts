import express from "express";
const app = express();

// MONGOOSE
import mongoose from "mongoose";
mongoose.set("strictQuery", true);

// ENV CONFIG
import dotenv from "dotenv";
dotenv.config();
// Session
import session from "express-session";
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
// Cors
import cors from "cors";
app.use(
  cors({
    origin: (origin, callback) => {
      const origins = String(process.env.CORS_ORIGIN).split(",");
      if (!origin || origins.includes(String(origin))) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed."), false);
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
// Cookies
import cookieParser from "cookie-parser";
app.use(cookieParser());

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

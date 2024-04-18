import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

import { User } from "../models/user_schema";

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  const Authorization = req.cookies.Authorization;
  // console.log(token);
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    console.log(decoded);
    req.body.user = decoded;
    next();
  }
};
export { checkAuth };

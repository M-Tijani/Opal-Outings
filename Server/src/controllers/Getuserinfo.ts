import { Request, Response, NextFunction } from "express";
// Shema Model
import { User } from "../models/user_schema";
const Getuserinfo = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.headers.authorization;
  // console.log(id);
  try {
    const user = await User.findById(id);
    res.status(200).send({ message: "User fetched successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};

export { Getuserinfo };

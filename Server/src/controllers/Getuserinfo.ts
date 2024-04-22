import { Request, Response, NextFunction } from "express";
// Shema Model
import { User } from "../models/user_schema";
const Getuserinfo = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.cookies.Authorization;
  try {
    const user = await User.findById(id);

    const userJson = JSON.stringify(user);

    res.status(200).send({ message: "User fetched successfully", userJson });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};

export { Getuserinfo };

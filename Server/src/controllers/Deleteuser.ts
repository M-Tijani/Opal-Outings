import { Request, Response, NextFunction } from "express";

import { User } from "../models/user_schema";
const Deleteuser = async (req: Request, res: Response, next: NextFunction) => {
  // Delete User
  const _id = req.cookies.Authorization;
  try {
    const user = await User.findByIdAndDelete(_id);
    res.status(200).send({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export { Deleteuser };

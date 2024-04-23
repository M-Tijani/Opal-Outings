import { Request, Response, NextFunction } from "express";

import { User } from "../models/user_schema";

import bcrypt from "bcrypt";
const saltRounds = 10;
const Updateuser = async (req: Request, res: Response, next: NextFunction) => {
  // Check user _id in database
  const input = req.body;
  const _id = req.headers.authorization;
  // const _id = req.cookies.Authorization;
  try {
    // input.password = await bcrypt.hash(input.password, saltRounds);
    const userupdate = await User.findByIdAndUpdate({ _id }, input, {
      new: true,
    });
    res.status(200).json({ message: "User updated successfully", userupdate });
  } catch (error) {
    console.log(error);
    res.status(500).send({ massega: error });
  }
};
export { Updateuser };

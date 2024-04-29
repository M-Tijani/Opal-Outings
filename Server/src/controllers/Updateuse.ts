import { Request, Response, NextFunction } from "express";
// shema Model
import { User } from "../models/user_schema";

import bcrypt from "bcrypt";
const saltRounds = 10;
const Updateuser = async (req: Request, res: Response, next: NextFunction) => {
  // Check user _id in database
  const input = req.body;
  // Tokens
  const _id = req.headers.authorization;
  // const _id = req.cookies.Authorization;

  // Check is email already exists
  const email = await User.findOne({ _id });
  let emailcomper = email?.email;
  // function
  if (emailcomper !== input.email) {
    try {
      // input.password = await bcrypt.hash(input.password, saltRounds);
      const userupdate = await User.findByIdAndUpdate({ _id }, input, {
        new: true,
      });
      res
        .status(200)
        .json({ message: "User updated successfully", userupdate });
    } catch (error) {
      console.log(error);
      res.status(500).send({ massega: error });
    }
  } else {
    res.status(400).send({ message: "Email already exists" });
  }
};
const Updatepassowrd = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const input_1 = req.body;
  const input_2 = req.body;
  const _id = req.headers.authorization;
  // const _id = req.cookies.Authorization;

  if (input_1.password !== input_2.conformPassword) {
    // console.log("Password does not match");
    return res.status(400).send({ message: "Password does not match" });
  } else {
    // console.log("Password match");
    input_1.password = await bcrypt.hash(input_1.password, saltRounds);
    try {
      const passowrdupdate = await User.findByIdAndUpdate({ _id }, input_1, {
        new: true,
      });
      res
        .status(200)
        .json({ message: "Passowrd updated successfully", passowrdupdate });
    } catch (error) {
      console.log(error);
      res.status(500).send({ massega: error });
    }
  }
};
export { Updateuser, Updatepassowrd };

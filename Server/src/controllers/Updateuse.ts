import { Request, Response, NextFunction } from "express";

import { User } from "../models/user_schema";

import bcrypt from "bcrypt";
const saltRounds = 10;
const Updateuser = async (req: Request, res: Response, next: NextFunction) => {
  const user = new User(req.body);
  if (!user.name) {
    return res.status(400).send({ message: "Please enter Username" });
  } else if (!user.email) {
    return res.status(400).send({ message: "Please enter Email" });
  } else if (!user.password) {
    return res.status(400).send({ message: "Please enter Password" });
  }
  user.password = await bcrypt.hash(user.password, saltRounds);
  try {
    const userExists = await User.findOne({ email: user.email });
    if (userExists) {
      await userExists.updateOne({ $set: user });
      res.send({ message: "User updated successfully", user });
    } else {
      return res
        .status(400)
        .send({ message: "User with this email does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
};
export { Updateuser };

import { Request, Response, NextFunction } from "express";
// Shema Model
import { User } from "../models/user_schema";
// Crypt password
import bcrypt from "bcrypt";
const saltRounds = 10;
const Ceateuser = async (req: Request, res: Response, next: NextFunction) => {
  const user = new User(req.body);
  //   Check if fields are empty
  if (!user.name) {
    return res.status(400).send({ message: "Please enter Username" });
  } else if (!user.email) {
    return res.status(400).send({ message: "Please enter Email" });
  } else if (!user.password) {
    return res.status(400).send({ message: "Please enter Password" });
  }
  user.password = await bcrypt.hash(user.password, saltRounds);
  //   Check if user already exists
  if (await User.findOne({ email: user.email })) {
    return res
      .status(400)
      .send({ message: "User with this email already exists" });
  }
  try {
    await user.save();
    res.send({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
  }
};

export { Ceateuser };

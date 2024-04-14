import { Request, Response, NextFunction } from "express";
import { User } from "../models/user_schema";
// crypt password
const bcrypt = require("bcrypt");
const Loginuser = async (req: Request, res: Response, next: NextFunction) => {
  const user = new User(req.body);
  //   Check if fields are empty
  if (!user.email) {
    return res.status(400).send({ message: "Please enter Email" });
  } else if (!user.password) {
    return res.status(400).send({ message: "Please enter Password" });
  }
  try {
    const userExists = await User.findOne({ email: user.email });
    if (!userExists) {
      return res
        .status(400)
        .send({ message: "User with this email does not exist" });
    }
    const passwordMatch = await bcrypt.compare(
      user.password,
      userExists.password
    );
    if (!passwordMatch) {
      return res
        .status(400)
        .send({ message: "Invalid credentials. Please try again." });
    }
    res.send({ message: "Login successful", userExists });
  } catch (error) {
    console.log(error);
  }
};

export { Loginuser };

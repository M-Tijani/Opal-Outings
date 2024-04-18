import { Request, Response, NextFunction } from "express";
import { User } from "../models/user_schema";
// crypt password
const bcrypt = require("bcrypt");
// jwt
import jwt from "jsonwebtoken";

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
    // generate token
    let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });
    // Get id and Split id
    const userid: any = userExists._id;
    const firstsplit = String(userid).split(" ");
    const fianl_id: string = firstsplit[0];
    // set _id user
    res.cookie("Authorization", fianl_id);
    // set cookie
    res.cookie("token", token);
    // final response
    res.status(200).send({ message: "Login successful", userExists });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};

export { Loginuser };

import { Request, Response, NextFunction } from "express";

import { User } from "../models/user_schema";

import bcrypt from "bcrypt";
const saltRounds = 10;
const Updateuser = async (req: Request, res: Response, next: NextFunction) => {
  // Check user _id in database
  try {
    let input = req.body;
    let _id: string = req.cookies.Authorization;
    console.log(_id);

    // Hash passowrd
    input.password = await bcrypt.hash(input.password, saltRounds);
    // Update user
    const userupdate = await User.findByIdAndUpdate({ _id }, input, {
      new: true,
    });
    console.log(userupdate);
    await userupdate?.save();
    res.status(200).json({ message: "User updated successfully", userupdate });
  } catch (error) {
    res.status(500).send({ massega: error });
  }
};
export { Updateuser };

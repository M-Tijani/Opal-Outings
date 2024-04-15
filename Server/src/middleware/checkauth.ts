import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  try {
    if (token) {
      const decode = jwt.verify(token, process.env.JWT_SECRET as string);
      console.log(decode);
    } else {
      return res.status(400).send({ message: "Not Authorized" });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
export { checkAuth };

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token: any = req.headers.token;
  // const token1: any = req.cookies.token;
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET as string);
    // console.log(verify);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};
export { checkAuth };

import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Admin from "../models/Admin.model";

export const login = async (req: Request,res: Response) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({
    where: { email },
  });

  if (!admin) {
    return res.status(401).json({
      success: false,
      message: "Invalid Credentials",
    });
  }

  const isMatch =await bcrypt.compare(
      password,
      admin.get("password") as string
    );

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid Credentials",
    });
  }

  const token = jwt.sign(
    {
      id: admin.get("id"),
      email: admin.get("email"),
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "7d",
    }
  );

  res.status(200).json({
    success: true,
    token,
  });
};
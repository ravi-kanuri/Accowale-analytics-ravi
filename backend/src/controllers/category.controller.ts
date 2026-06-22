import { Request, Response } from "express";
import { Category } from "../models";

export const getCategories =async (req: Request,res: Response) => {
    const categories =await Category.findAll();

    res.status(200).json({
      success: true,
      data: categories,
    });
  };
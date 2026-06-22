import { Request, Response } from "express";

import { AnalyticsService } from "../services/analytics.service";
import { asyncHandler } from "../utils/asyncHandler";

const analyticsService =
  new AnalyticsService();

export const getAnalytics =asyncHandler(async ( req: Request,res: Response) => {
      const data =await analyticsService.getSummary();

      res.status(200).json({
        success: true,
        data,
      });
    }
  );
import { Request, Response } from "express";

import { FeedbackService } from "../services/feedback.service";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const feedbackService =
  new FeedbackService();

export const submitFeedback =asyncHandler( async (req: Request, res: Response) => {
      const feedback =await feedbackService.createFeedback(  req.body);

      res.status(201).json(
        new ApiResponse(
          true,
          "Feedback submitted successfully",
          feedback
        )
      );
    }
  );

export const getFeedbacks = asyncHandler(
  async (req: Request, res: Response) => {
    const page =
      Number(req.query.page) || 1;

    const limit =
      Number(req.query.limit) || 10;

    const search =
      (req.query.search as string) || "";

    const categoryId =
      (req.query.categoryId as string) || "";

    const feedbacks =
      await feedbackService.getFeedbacks({
        page,
        limit,
        search,
        categoryId,
      });

    res.status(200).json({
      success: true,
      data: feedbacks,

      pagination: {
        page,
        limit,
        total:
          feedbacks.count,

        totalPages:
          Math.ceil(
            feedbacks.count /
              limit
          ),
      },
    });
  }
);
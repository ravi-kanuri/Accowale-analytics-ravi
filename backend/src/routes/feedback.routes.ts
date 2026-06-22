import { Router } from "express";

import { getFeedbacks, submitFeedback } from "../controllers/feedback.controller";
import { validate } from "../middlewares/validate.middleware";
import { createFeedbackSchema } from "../validators/feedback.validator";

const router = Router();

router.post("/",validate(createFeedbackSchema),submitFeedback);

router.get("/", getFeedbacks);

export default router;
import { Router } from "express";

import feedbackRoutes from "./feedback.routes";
import analyticsRoutes from "./analytics.routes";
import healthRoutes from "./health.routes";
import categoryRoutes from "./category.routes";
import authRoutes from "./auth.routes";

const router = Router();

router.use("/feedback",feedbackRoutes);

router.use("/analytics", analyticsRoutes);

router.use("/health",healthRoutes);

router.use("/categories",categoryRoutes);

router.use("/auth", authRoutes);

export default router;
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes/index.routes";

import { errorHandler } from "./middlewares/error.middleware";
import { notFoundHandler } from "./middlewares/notFound.middleware";
import { requestLogger } from "./middlewares/requestLogger.middleware";
import { rateLimiter } from "./middlewares/rateLimiter.middleware";

const app = express();

/**
 * Required when using Render + Rate Limiter
 */
app.set("trust proxy", 1);

app.use(helmet());

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(requestLogger);

app.use(rateLimiter);

app.use("/api/v1", routes);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
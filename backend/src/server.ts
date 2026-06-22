import app from "./app";
import { connectDB, sequelize } from "./config/database";
import { seedCategories } from "./seed";

import "./models";
import { seedAdmin } from "./seedAdmin";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    await sequelize.sync({
      alter: true,
    });

    await seedCategories();
    await seedAdmin();

    console.log(" Database Synced");

    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
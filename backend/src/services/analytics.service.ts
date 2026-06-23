import { Category, Feedback } from "../models";
import { sequelize } from "../config/database";

export class AnalyticsService {
  async getSummary() {
    try {
      const totalFeedback =
        await Feedback.count();

      const categoryDistribution =
        await Feedback.findAll({
          attributes: [
            "categoryId",
            [
              sequelize.fn(
                "COUNT",
                sequelize.col("Feedback.id")
              ),
              "count",
            ],
          ],

          include: [
            {
              model: Category,
              as: "category",
              attributes: [
                "id",
                "name",
              ],
            },
          ],

          group: [
            "Feedback.categoryId",
            "category.id",
            "category.name",
          ],
        });

      const recentFeedback =
        await Feedback.findAll({
          limit: 5,
          order: [
            [
              "createdAt",
              "DESC",
            ],
          ],
          include: [
            {
              model: Category,
              as: "category",
            },
          ],
        });

      return {
        totalFeedback,
        categoryDistribution,
        recentFeedback,
      };
    } catch (error) {
      console.error(
        "Analytics Error:",
        error
      );

      throw error;
    }
  }
}
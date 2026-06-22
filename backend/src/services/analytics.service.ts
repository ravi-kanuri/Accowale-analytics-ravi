import { Category, Feedback } from "../models";
import { sequelize } from "../config/database";

export class AnalyticsService {
  async getSummary() {
    const totalFeedback =
      await Feedback.count();

    const categoryDistribution =
      await Feedback.findAll({
        attributes: [
          "categoryId",
          [
            sequelize.fn(
              "COUNT",
              sequelize.col("id")
            ),
            "count",
          ],
        ],

        include: [
          {
            model: Category,
            as: "category",
            attributes: ["name"],
          },
        ],

        group: [
          "categoryId",
          "category.id",
        ],
      });

    const recentFeedback =
      await Feedback.findAll({
        limit: 5,
        order: [["createdAt", "DESC"]],
      });

    return {
      totalFeedback,
      categoryDistribution,
      recentFeedback,
    };
  }
}
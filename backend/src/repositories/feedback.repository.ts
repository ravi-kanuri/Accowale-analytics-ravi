import { Op } from "sequelize";
import { Feedback, Category } from "../models";

export class FeedbackRepository {
  async create(data: any) {
    return Feedback.create(data);
  }

  async getFeedbacks({
    page,
    limit,
    search,
    categoryId,
  }: any) {
    const offset = (page - 1) * limit;

    const where: any = {};

    if (search) {
      where.comment = {
        [Op.iLike]: `%${search}%`,
      };
    }

    if (categoryId) {
      where.categoryId = categoryId;
    }

    return Feedback.findAndCountAll({
      where,
      include: [
        {
          model: Category,
          as: "category",
        },
      ],
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });
  }
}
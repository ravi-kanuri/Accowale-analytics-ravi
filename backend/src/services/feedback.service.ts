import { FeedbackRepository } from "../repositories/feedback.repository";
import { Op } from "sequelize";
import { Feedback, Category } from "../models";


export class FeedbackService {
  private repository =
    new FeedbackRepository();

  async createFeedback(payload: any) {
    return this.repository.create(payload);
  }

 async getFeedbacks({
  page,
  limit,
  search,
  categoryId,
}: {
  page: number;
  limit: number;
  search?: string;
  categoryId?: string;
}) {
  const offset =
    (page - 1) * limit;

  const whereClause: any = {};

  if (search) {
    whereClause[Op.or] = [
      {
        name: {
          [Op.iLike]:
            `%${search}%`,
        },
      },

      {
        email: {
          [Op.iLike]:
            `%${search}%`,
        },
      },

      {
        comment: {
          [Op.iLike]:
            `%${search}%`,
        },
      },
    ];
  }

  return Feedback.findAndCountAll({
    where: whereClause,

    include: [
      {
        model: Category,
        as: "category",

        ...(categoryId && {
          where: {
            id: categoryId,
          },
        }),
      },
    ],

    limit,

    offset,

    order: [
      [
        "createdAt",
        "DESC",
      ],
    ],
  });
}
}
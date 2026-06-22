import { Category } from "../models";

export class CategoryRepository {
  async getAll() {
    return Category.findAll({
      order: [["name", "ASC"]],
    });
  }

  async findById(id: string) {
    return Category.findByPk(id);
  }
}
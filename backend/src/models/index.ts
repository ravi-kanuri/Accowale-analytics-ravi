import Category from "./Category.model";
import Feedback from "./Feedback.model";

Category.hasMany(Feedback, {
  foreignKey: "categoryId",
  as: "feedbacks",
});

Feedback.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

export { Category, Feedback };
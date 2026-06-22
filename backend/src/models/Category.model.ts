import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "categories",
    timestamps: true,
  }
);

export default Category;
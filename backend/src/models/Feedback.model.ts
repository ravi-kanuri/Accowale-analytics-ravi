import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Feedback extends Model {}

Feedback.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },

    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "feedbacks",
    timestamps: true,

    indexes: [
      {
        fields: ["categoryId"],
      },
      {
        fields: ["createdAt"],
      },
    ],
  }
);

export default Feedback;
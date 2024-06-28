import { DataTypes, Sequelize } from "sequelize";
import Connection from "../database/db.js";

const Lists = Connection.define(
  "Lists",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    list_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    list_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "lists",
    timestamps: false,
  }
);

export default Lists;

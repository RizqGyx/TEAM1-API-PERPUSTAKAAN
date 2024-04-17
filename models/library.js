"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {
    static associate(models) {
      Library.hasMany(models.Book, {
        foreignKey: "libraryId",
      });
      Library.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Library.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      libraryName: DataTypes.STRING,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Library",
    }
  );
  return Library;
};

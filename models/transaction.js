"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    static associate(models) {
      Transactions.belongsTo(models.Book, {
        foreignKey: "bookId",
      });

      Transactions.belongsTo(models.User, {
        foreignKey: "userId",
      });

      Transactions.belongsTo(models.Library, {
        foreignKey: "libraryId",
      });
    }
  }
  Transactions.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      bookId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      libraryId: DataTypes.INTEGER,
      borrowDate: DataTypes.DATE,
      returnDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Transactions",
    }
  );
  return Transactions;
};

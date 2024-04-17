"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.belongsTo(models.Book, {
        foreignKey: "bookId",
      });

      Transaction.belongsTo(models.User, {
        foreignKey: "userId",
      });

      Transaction.belongsTo(models.Library, {
        foreignKey: "libraryId",
      });
    }
  }
  Transaction.init(
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
      modelName: "Transaction",
    }
  );
  return Transaction;
};

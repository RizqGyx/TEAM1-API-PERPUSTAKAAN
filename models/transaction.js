'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.belongsTo(models.User, {
        foreignKey: "borrowerId"
      });
      Transaction.belongsTo(models.User, {
        foreignKey: "issuerId"
      });
      Transaction.belongsTo(models.Book, {
        foreignKey: {
          name: "bookId"
        }
      });
      // Add other associations for Transaction (if needed)
    }
  }

  Transaction.init({
    bookId: DataTypes.INTEGER,
    borrowerId: DataTypes.INTEGER,
    dateBorrowed: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    status: DataTypes.STRING,
    issuerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};

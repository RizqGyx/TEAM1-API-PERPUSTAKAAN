'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {

    static associate(models) {
      // hasMany because if there still any books copies remain in library 
      // then any user can request a transaction to borrow the book
      Book.hasMany(models.Transaction, {
        foreignKey: {
          name: "bookId",
          allowNull: false
        }
      })
      // Because each book only belong to specific library
      Book.belongsTo(models.Library, {
        foreignKey: {
          name: "availableAt"
        }
      })
    }
  }
  Book.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    imageCover: DataTypes.TEXT,
    copies: DataTypes.INTEGER,
    availableAt: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
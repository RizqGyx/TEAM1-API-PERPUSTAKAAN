'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {

    static associate(models) {
      // hasMany because if there still any books copies remain in library 
      // then any user can request a transaction to borrow the book
      book.hasMany(models.Transaction, {
        foreignKey: {
          name: "bookId",
          allowNull: false
        }
      })
      // belongsToMany because books could be spread across several different libraries
      book.belongsToMany(models.Library, {
        foreignKey: {
          name: "availableAt"
        }
      })
    }
  }
  book.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    imageCover: DataTypes.TEXT,
    copies: DataTypes.INTEGER,
    availableAt: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Rack, {
        foreignKey: "rackId",
      });
    }
  }
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      author: DataTypes.STRING,
      language: DataTypes.STRING,
      publicationYear: DataTypes.INTEGER,
      publisher: DataTypes.STRING,
      imageCover: DataTypes.TEXT,
      numOfBooks: DataTypes.INTEGER,
      numBorrowed: DataTypes.INTEGER,
      rackId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
